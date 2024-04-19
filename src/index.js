import { getAllAbout } from "./requests/aboutRequset.js";
import getAllServices from "./requests/serviceRequest.js";
import { bindAboutData } from "./creators/aboutCreator.js";
import { initAllEvents } from "./eventHandlers/baseEventHandler.js";
import { bindServicesData } from "./creators/aboutService.js";
async function OnLoad(){
    await loadAboutData();   
    initAllEvents(); 
}
async function loadAboutData(){
    const res = await getAllAbout();
    const res2= await getAllServices();
    bindAboutData(res);
    bindServicesData(res2);
}



document.addEventListener('DOMContentLoaded',OnLoad);