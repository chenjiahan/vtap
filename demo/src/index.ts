import Vue from 'vue';
import Tap from '../../dist';

Vue.use(Tap);

new Vue({
    el: '#app',
    template: `
        <div id="app">
            <button @click="onClick">Click</button>
            <button v-tap @click="onTap">Tap</button>
        </div>
    `,
    methods: {
        onClick() {
            console.log('click');
        },
        onTap() {
            console.log('tap');
        }
    }
});
