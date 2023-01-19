import {buildForm} from "./templates/form.js";

const execute = () => {
    const container = document.querySelector('.container');

    const form = async () => {
        try {
            let response = await fetch('./data-user.json');
            const result = await response.json();
            container.innerHTML += buildForm(result);
        } catch (e) {
            console.log('TPL failed');
        }
    };
    form()
    const actionBtn = document.querySelectorAll('button');

    console.log(11, actionBtn)
    actionBtn.forEach(element => {
        const pressBtn = event => {
            event.preventDefault();
        };
        element.addEventListener('click', pressBtn);
    });
};
window.addEventListener('DOMContentLoaded', execute);