import {buildForm} from "./templates/form.js";

const execute = async () => {
    const container = document.querySelector('.container');
    
    const logIn = document.querySelector('.log');
    let request = './data-user.json';
   
    const form = async () => {
        try {
            let response = await fetch(request);
            const result = await response.json();
            container.innerHTML += buildForm(result);
        } catch (e) {
            console.log('TPL failed');
        }
        const actionBtn = document.querySelectorAll('button');
        console.log(11, actionBtn);
    };
    form();

    const eventBtn = () => {
        actionBtn.addEventListener('click', event => {
            event.preventDefault();
        });
    };
    eventBtn();
};
window.addEventListener('DOMContentLoaded', execute);