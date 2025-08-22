import { execSync } from 'node:child_process';

const base = process.env.BASE_URL || 'http://localhost:8888';
const fnPath = '/.netlify/functions/contact';

function curl(path, method='GET', body='') {
  const data = body ? `--data '${body}'` : '';
  const hdrs = body ? "-H 'Content-Type: application/json'" : '';
  const cmd = `curl -s -o /dev/null -w \"%{http_code}\" -X ${method} ${hdrs} ${data} ${base}${path}`;
  return execSync(cmd, { stdio: 'pipe' }).toString();
}

console.log('contact OPTIONS (204):', curl(fnPath,'OPTIONS'));
console.log('contact GET (405):',      curl(fnPath,'GET'));
console.log('contact POST (201/400):', curl(fnPath,'POST', JSON.stringify({
  fullName:'Smoke Test', email:'ops@careai.app', subject:'Hello', message:'Test', locale:'en'
})));
