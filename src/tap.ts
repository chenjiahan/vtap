/**
 * Tap
 */

export type TapCoord = {
    x: number,
    y: number
};

export class Tap {
    private moved: boolean;
    private coord: TapCoord;

    public readonly node: HTMLElement;
    public readonly shouldStop: boolean;

    private static readonly tapMove = 8;

    constructor(node: HTMLElement, shouldStop: boolean) {
        this.node = node;
        this.shouldStop = shouldStop;
        this.handler(true);
    }

    public handler(flag: boolean): void {
        const action = flag ? 'addEventListener' : 'removeEventListener';
        (<any>this.node[action])('touchstart', this.start);
        (<any>this.node[action])('touchmove', this.move);
        (<any>this.node[action])('touchend', this.end);
        (<any>this.node[action])('touchcancel', this.end);
    }

    private start = (event: TouchEvent): void => {
        this.stop(event);
        this.moved = false;
        this.coord = {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
        };
    }

    private move = (event: TouchEvent): void => {
        this.stop(event);
        this.moved = this.moved || Math.max(
            Math.abs(event.touches[0].clientX - this.coord.x),
            Math.abs(event.touches[0].clientY - this.coord.y)
        ) > Tap.tapMove;
    }

    private end = (event: TouchEvent): void => {
        this.stop(event);
        event.preventDefault && event.preventDefault();
        if (!this.moved) {
            this.trigger('click');
        }
    }

    private stop(event: TouchEvent): void {
        if (event && event.stopPropagation && this.shouldStop) {
            event.stopPropagation();
        }
    }

    private trigger(eventName: string): void {
        let event: CustomEvent;
        if ('CustomEvent' in window) {
            event = new CustomEvent(eventName);
        } else {
            event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, void 0);
        }
        this.node.dispatchEvent(event);
    }
}
