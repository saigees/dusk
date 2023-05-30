import { O } from "../types";

export default class Dusk {
    url: string
    params: O<string, any>
    constructor(url: string, params?: O<string, any>) {
        if(params) this.params = params
        this.url = this.replace_keys(url);
    }

    private replace_keys(url: string): string {
        let ur = `${url}`;
        let u = url.split("/").slice(3, url.split('/').length).map((z) => {
            let h = z.includes(":") ? z.replaceAll(":", "") : z
            return h.toLowerCase()
        })
        if(this.params) {
            for(let j = 0; j < u.length; j++) {
                let z = u[j]
                for(let i = 0; i < Object.keys(this.params).length; i++) {
                    let key = Object.keys(this.params)[i]
                    let value = this.params[key]
                    if(z.toLowerCase() === key.toLowerCase()) {
                        ur = ur.replaceAll(`:${z}`, `${value}`)
                        delete this.params[key]
                        this.params = {...this.params}
                    }
                }
            }
        }
        return ur
    }

    public async fetch(data: ResponseInit): Promise<Response> {
        return fetch(this.url, data)
    }
    
    public format(pipe?: boolean): this | string {
        let u = this.url
        if(this.params) {
            for(let i = 0; i < Object.keys(this.params).length; i++) {
                let symbol = i == 0 ? "?" : "&"
                let key = Object.keys(this.params)[i]
                let value = this.params[key]
                u += `${symbol}${key}=${encodeURIComponent(value)}`
            }
        }
        this.url = u
        if(pipe) {
            return this
        } else {
            return this.url
        }
    }
}