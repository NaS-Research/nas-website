export const QUOTE_HOLD_MS=5000;
export const QUOTE_SLIDE_MS=1200;
export const platformQuotes=Object.freeze([
  {
    "id": "sharma",
    "quote": "The M5 generation is the first consumer silicon where clinically meaningful local inference is genuinely practical at scale.",
    "name": "Jivesh Sharma, M.D.",
    "role": "Medical Oncologist · OneOncology",
    "sourceNumber": 2,
    "url": "https://www.linkedin.com/posts/jiveshsharma_healthcareai-clinicalai-applesilicon-activity-7436320508389879808-ESTq",
    "context": "Personal commentary on local inference, not clinical validation, a NaS benchmark or an endorsement of NaS."
  },
  {
    "id": "booeshaghi",
    "quote": "This is the first time I've seen an Apple product market faster DNA sequencing.",
    "name": "A. Sina Booeshaghi, Ph.D.",
    "role": "HHMI Hanna H. Gray Postdoctoral Fellow · UC Berkeley Bioengineering",
    "sourceNumber": 3,
    "url": "https://x.com/sinabooeshaghi/status/2092273297874362482",
    "context": "User-provided quotation and affiliation. The linked X post could not be independently retrieved by the automated reader; not a NaS benchmark or an endorsement."
  },
  {
    "id": "de-witte",
    "quote": "That single chip holds a frontier-class medical AI model… entirely in local memory. Running at full speed. On a machine that fits under a desk.",
    "name": "Bart De Witte",
    "role": "Co-Founder & CEO · Isaree",
    "sourceNumber": 4,
    "url": "https://www.linkedin.com/posts/bartdewitte_yesterday-i-wrote-that-ai-in-healthcare-doesnt-activity-7498030023006896128-6v6w",
    "context": "Excerpt with user-supplied ellipsis from personal platform commentary, not a performance measurement of NaS’s 96 GB configuration or evidence of clinical validity."
  }
]);
export function nextQuote(index,step,count=platformQuotes.length){return ((index+step)%count+count)%count;}
export function shouldRotate({paused,reducedMotion,visible,inView,hovering,focused=false}){return !paused&&reducedMotion===false&&visible&&inView&&!hovering&&!focused;}
export function quoteRotationDelay(){return QUOTE_HOLD_MS;}
