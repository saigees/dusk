import { O } from '../types.d.js';

declare class Dusk {
    url: string;
    params: O<string, any>;
    constructor(url: string, params?: O<string, any>);
    private replace_keys;
    fetch(data: ResponseInit): Promise<Response>;
    format(): this;
}

export { Dusk as default };
