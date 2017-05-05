/**
 * Tap
 */
export declare type TapCoord = {
    x: number;
    y: number;
};
export declare class Tap {
    private moved;
    private coord;
    readonly node: HTMLElement;
    readonly shouldStop: boolean;
    private static readonly tapMove;
    constructor(node: HTMLElement, shouldStop: boolean);
    handler(flag: boolean): void;
    private start;
    private move;
    private end;
    private stop(event);
    private trigger(eventName);
}
