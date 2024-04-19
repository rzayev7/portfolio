import ApiRequest from "./baseRequest.js";
import { SERVICE_ENDPOING } from "../urlHelper.js";
const _service = new ApiRequest();

const getAllServices= async ()=>{
    const data =await _service.get(SERVICE_ENDPOING);
    return await data.json();
}
export default getAllServices;