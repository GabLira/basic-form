import {buildForm} from "./templates/form.js";

const execute = async () => {
    const container = document.querySelector('.container');
    const actionBtn = document.querySelectorAll('button');
    let request = './data-user.json';

    console.log(11, actionBtn)
    console.log('container', container)

    actionBtn.forEach(element => {
        const pressBtn = event => {
            event.preventDefault();
        };
        element.addEventListener('click', pressBtn);
    });

    const form = async () => {
        try {
            let response = await fetch(request);
            const result = await response.json();

            container.innerHTML += buildForm(result);
        } catch (e) {
            console.log('TPL failed');
        }
    };
    form()

};
window.addEventListener('DOMContentLoaded', execute);