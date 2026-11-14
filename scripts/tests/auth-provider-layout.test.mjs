import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const form=fs.readFileSync(new URL('../../src/app/login/AuthForm.jsx',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../../src/app/login/auth.css',import.meta.url),'utf8');
test('Google and Microsoft keep their server action and accessible circular controls',()=>{
 for (const [provider,label] of [['google','Google'],['azure','Microsoft']]) {
  const block=form.match(new RegExp(`<form action=\\{socialSignIn\\}>\\s*<input type="hidden" name="provider" value="${provider}"[\\s\\S]*?</form>`))?.[0];
  assert.ok(block,provider);
  assert.match(block,/className="auth-provider-button"/);
  assert.ok(block.includes(`aria-label="Sign in with ${label}"`));
  assert.ok(block.includes(`title="Sign in with ${label}"`));
 }
 assert.match(form,/aria-hidden="true" focusable="false"/);
});
test('providers share a centered wrapping row and keyboard focus styling',()=>{
 assert.match(css,/\.auth-social\{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:\.8rem\}/);
 assert.match(css,/\.auth-social \.auth-provider-button \{[\s\S]*?width: 44px;[\s\S]*?height: 44px;/);
 assert.match(css,/\.auth-card :focus-visible/);
 assert.match(css,/\.auth-social \.auth-social-wide\{flex-basis:100%\}/);
});
