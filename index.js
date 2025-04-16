
console.log('start')
fetch('http://127.0.0.1:3001/sse').then(r => r.text()).then(console.log);
console.log('end')