# AirBean

Mockup: https://www.figma.com/file/QQZELyqlj8wFhsnxCXONWh/AirBean-v.1.1



## Airbean API

### EndPoints
APIet har två EndPoints.

* GET /api/beans, som svarar med data om menyn
* POST /api/beans, som genomför en order och efter 2sek svarar med datan om ordern.

### Running

1. `cd backend`
2. `npm install`
3. `node app.js`

### Example Fetching

```js
const req = await fetch('http://localhost:5000/api/beans')
const body = await req.json()
`