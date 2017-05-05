import { Tap } from './tap';
import { system } from './system';
import { VNodeDirective } from 'vue';

const instances = [];

export default function install(Vue): void {
    Vue.directive('tap', {
        bind,
        unbind
    });
}

function bind(node: HTMLElement, derective: VNodeDirective): void {
    if (system === 'ios') {
        instances.push(new Tap(node, derective.modifiers.stop));
    }
}

function unbind(node: HTMLElement): void {
    if (system === 'ios') {
        instances.forEach((tap: Tap, index: number): void => {
            if (tap.node === node) {
                tap.handler(false);
                instances.splice(index, 1);
            }
        });
    }
}
