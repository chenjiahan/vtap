# Vtap
`vtap` is a vue plugin to remove click delays in iOS.
- Bind tap event in iOS devices
- Lightweight, 1KB gzipped
- Built with TypeScript

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

`v-tap` derective will prevent the click event and bind a tap event in iOS devices.    
The derective will be ignored in other systems such as Android.
``` html
<button v-tap @click="doSomething">Tap</button>
```

You can add stop modifiers to call event.stopPropagation().
``` html
<button v-tap.stop @click.stop="doSomething">Tap</button>
```

## License

[MIT](http://opensource.org/licenses/MIT)
