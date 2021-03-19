import { HtttpResponse } from "./http";

export interface Controller {
    handle: () => Promise<HtttpResponse>
}