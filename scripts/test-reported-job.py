import json,os,pathlib,subprocess,sys,tempfile,time,unittest
from admin_activity_events import read_events
SCRIPTS=pathlib.Path(__file__).resolve().parent
class ProcessLifecycleTests(unittest.TestCase):
    def run_job(self,code):
        with tempfile.TemporaryDirectory() as directory:
            path=pathlib.Path(directory)/'events.json'
            args=[sys.executable,str(SCRIPTS/'run-reported-job.py'),'--event-file',str(path),
                  '--task-id','actual-test-child','--name','Actual isolated test process',
                  '--task','Running a real local test subprocess','--interval','1','--',
                  sys.executable,'-c',code]
            process=subprocess.Popen(args,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)
            running=None;deadline=time.monotonic()+8
            while time.monotonic()<deadline and process.poll() is None:
                if path.exists():
                    records=read_events(path)
                    if records and records[0]['status']=='running':
                        running=records[0];break
                time.sleep(.03)
            stdout,stderr=process.communicate(timeout=10)
            return process.returncode,running,read_events(path)[0],stdout,stderr
    def test_real_start_alive_and_success(self):
        code,running,done,stdout,stderr=self.run_job('import time; time.sleep(1.3)')
        self.assertEqual(code,0,stderr)
        self.assertEqual(running['kind'],'job')
        self.assertEqual(running['origin'],'guarded-process')
        self.assertIn('runnerPid',running)
        self.assertIn('processId',running)
        self.assertEqual(done['status'],'done')
        self.assertGreaterEqual(done['elapsedSeconds'],1)
        self.assertNotIn('model',done)
        self.assertNotIn('paidUsage',done)
        self.assertIn('process alive',stdout)
    def test_real_nonzero_exit_is_failed(self):
        code,running,failed,stdout,stderr=self.run_job('import time; time.sleep(.3); raise SystemExit(7)')
        self.assertEqual(code,7,stderr)
        self.assertEqual(failed['status'],'failed')
    def test_store_error_before_launch_cannot_run_command(self):
        with tempfile.TemporaryDirectory() as directory:
            marker=pathlib.Path(directory)/'must-not-run'
            bad=pathlib.Path(directory)/'events.json';bad.write_text('{bad');bad.chmod(0o600)
            result=subprocess.run([sys.executable,str(SCRIPTS/'run-reported-job.py'),'--event-file',str(bad),
              '--name','Rejected process','--task','Invalid telemetry store','--',sys.executable,
              '-c','from pathlib import Path; Path('+repr(str(marker))+').touch()'],capture_output=True,text=True)
            self.assertNotEqual(result.returncode,0)
            self.assertFalse(marker.exists())
if __name__=='__main__':unittest.main(verbosity=2)
