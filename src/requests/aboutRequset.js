import ApiRequest from "./baseRequest.js";
import { ABOUT_ENDPOINT } from "../urlHelper.js";
const _about = new ApiRequest();

export async function getAllAbout(){
    const res = await _about.get(ABOUT_ENDPOINT);
    return await res.json();
}
