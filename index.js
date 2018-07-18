import Router from './modules/router';
import LoginView from './views/login/login';
import './blocks/reset.scss';

window.addEventListener('DOMContentLoaded', function () {
    let router = new Router();

    let loginView = new LoginView({
        el: document.querySelector('.js-login')
    });

    router
        .route('login', loginView);

    router.start();
});
