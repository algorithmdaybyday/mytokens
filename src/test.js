var a = { 'name': 13,'hello': [1,2,3] }

console.log({...a, 'hello': [...a['hello'], 133] })