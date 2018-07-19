import Router from './modules/router';
import LoginView from './views/login/login';
import SignupView from './views/signup/signup';
import './blocks/reset.scss';

window.addEventListener('DOMContentLoaded', function () {
    let router = new Router();

    let loginView = new LoginView({
        el: document.querySelector('.js-login')
    });

    let signupView = new SignupView({
        el: document.querySelector('.js-signup')
    });

    router
        .route('login', loginView)
        .route('signup', signupView);

    router.start();
});
