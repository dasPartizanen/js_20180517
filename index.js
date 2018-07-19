import Router from './modules/router';
import LoginView from './views/login/login';
import SignupView from './views/signup/signup';
import ChatView from './views/chat/chat';
import './blocks/reset.scss';
import './blocks/main/main.scss';

window.addEventListener('DOMContentLoaded', function () {
    let router = new Router();

    let loginView = new LoginView({
        el: document.querySelector('.js-login')
    });

    let signupView = new SignupView({
        el: document.querySelector('.js-signup')
    });

    let chatView = new ChatView({
        el: document.querySelector('.js-chat')
    });

    router
        .route('login', loginView)
        .route('signup', signupView)
        .route('chat', chatView);

    router.start();
});
