# Vtap
Vue tap plugin to remove click delays in iOS.

## Install
```
yarn add vtap
```

## Usage
``` javascript
import Vue from 'vue'
import Tap from 'vtap'
Vue.use(Tap);
```

``` html
<button v-tap @click="doSomething">Tap</button/>
```
