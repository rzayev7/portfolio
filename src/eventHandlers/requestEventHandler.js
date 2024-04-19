const formSubmit = document.querySelector("#form-submit");
const txtName = document.querySelector(".name");
const txtEmail = document.querySelector(".email");
const txtSubject = document.querySelector(".subject");

import { generateNextId } from "../requests/helpers/generateRandomId.js";
import { getAllRequests } from "../requests/reqRequest.js";
import { PostRequest } from "../requests/reqRequest.js";

export const addRequestEventListener = () => {
  formSubmit.addEventListener("submit", sendRequest);
};

const sendRequest = async (event) => {
  event.preventDefault(); 
  
  const allRequests = await getAllRequests();

  const row = {
    id: generateNextId(allRequests),
    name: txtName.value,
    email: txtEmail.value,
    subject: txtSubject.value
  };

  return await PostRequest(row);
};
