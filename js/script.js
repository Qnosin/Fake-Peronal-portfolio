/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";


// Light and Dark Mode



const themeBtn = document.querySelector("[data-theme-btn]")
const HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-schem:dark)").matches;

if(sessionStorage.getItem("theme")){
    HTML.dataset.theme = sessionStorage.getItem("theme");
}else{
    HTML.dataset.theme = isDark ? "dark" : "light";
    sessionStorage.setItem("theme",HTML.dataset.theme);
}

const changeTheme = () =>{
    HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme",HTML.dataset.theme);
 }

themeBtn.addEventListener("click",changeTheme);


// TAB 

const tabBtn = [...document.querySelectorAll("[data-tab-btn]")];
let lastActiveTab = document.querySelectorAll("[data-tab-content]");
let lastActiveTabBtn = tabBtn;

tabBtn.forEach(item =>{
   item.addEventListener("click",()=>{
    const section = document.querySelector([`[data-tab-content="${item.dataset.tabBtn}"]`]);
    if(!section.classList.contains("active")){
        section.classList.add("active");
        item.classList.add("active");
    }
     let results = [...tabBtn].filter(items => items !== item);
     results.forEach((i)=>{
        i.classList.remove("active");
        const section = document.querySelector([`[data-tab-content="${i.dataset.tabBtn}"]`]);
        section.classList.remove("active");
     })
   })
})