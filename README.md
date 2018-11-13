# jsutil
Dragan's JavaScript utility funcitons

## Install

```cmd
npm install git+ssh://git@github.com:dragan-nikolic/jsutil.git --save
```

## Usage

```js
(async () => {
  const { createTempEmailProvider } = require('tempemail')

  te = createTempEmailProvider('temp_mail')
  const newEmail = await te.createEmailAddress()
  console.log('*** newEmail ***', newEmail)
  te.closeBrowser()
})()
```
