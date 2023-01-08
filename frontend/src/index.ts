const ws = new WebSocket('ws://localhost:4000');

ws.addEventListener('message', ({ data }) => { console.log(data); ws.close() });
ws.addEventListener('open', () => { ws.send(JSON.stringify({data: null})); });
