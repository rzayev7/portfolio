import ApiRequest from "./baseRequest.js";
import { REQUEST_ENDPOINT } from "../urlHelper.js";

const _request = new ApiRequest();

export async function PostRequest(data) {
  return await _request.post(REQUEST_ENDPOINT, data);
}

export const getAllRequests = async() => {
    const res = await _request.get(REQUEST_ENDPOINT);
    return await res.json();
};
