import Typed from 'typed.js'


const p = document.querySelector('.about-content p');
const p2 = document.querySelector('.paragraph');
const ul = document.querySelector(".about-content .profile-info");
const name = document.querySelector('.myname');
const img = document.querySelector('.img-fluid');


const generateAboutLi = (key, value) => {
    return `<li style="margin-bottom: 10px;"><span style="font-weight: bold;">${key} : </span>${value}</li>`
};

export const bindAboutData = data =>{
    ul.innerHTML='';
    p.textContent = data.description;
    p2.textContent = data.description;
    name.textContent = data.fullname;
    img.src=data.img;
    ul.innerHTML += generateAboutLi("Full Name",data.fullname);
    ul.innerHTML += generateAboutLi("Birth Date",data.birthDate);
    ul.innerHTML += generateAboutLi("Address",data.address);
    ul.innerHTML += generateAboutLi("Email",data.email);
    ul.innerHTML += generateAboutLi("Website",data.website);
    bindHeroSection(data.positions);
}

const bindHeroSection = positions =>{
    const typed = new Typed('.typed', {
        strings: positions,
        loop:true,
        typeSpeed: 150,
      });
}