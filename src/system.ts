/**
 * Get Current System
 */

export type System = 'ios' | 'other';

function getSystem(): System {
    const ua = navigator.userAgent.toLowerCase();
    return /ios|iphone|ipod|ipad/.test(ua) ? 'ios' : 'other';
}

export const system = getSystem();
