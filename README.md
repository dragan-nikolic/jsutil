# jsutil
Dragan's JavaScript utility funcitons

## Install

```cmd
npm install git+ssh://git@github.com:dragan-nikolic/jsutil.git --save
```

## Usage

```js
(async () => {
  const jsutil = require('jsutil')

  const ts = jsutil.timestamp()
  console.log("Wait 5 sec...")
  await jsutil.sleep(5000)
  console.log(jsutil.timestamp() - ts)
})()
```
