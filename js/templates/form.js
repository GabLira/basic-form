export const buildForm = data => {
    try {
        const output = data.reduce((previous, user) => {
            return `${previous}
                    <div class="container__form--group">
<!--                        <label for="email">${user.email}</label>-->
                        <input type="email" id="email" name="email" placeholder="E-mail">
                    </div>
                    <div class="container__form--group">
<!--                        <label for="password">${user.password}</label>-->
                        <input type="password" id="password" name="password" placeholder="Password">
                    </div>
                    <button class="container__form--log">${user.buttons.logIn}</button>
                    <button class="container__form--sign">${user.buttons.singUp}</button> 
                    <a href="" class="container__form--help">${user.help}</a>    
                               
`
        }, '');
        return `<form class="container__form">${output}</form>`
    } catch (e) {
        console.log('TPL failed');
    }
}
