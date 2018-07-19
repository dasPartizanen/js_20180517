import Input from '../../blocks/input/input';
import Button from '../../blocks/button/button';
import Link from '../../blocks/link/link';
import View from '../views';
import template from './login.pug';
import './login.scss';

export default class LoginView extends View {

    get bemName() {
        return 'login';
    }

    constructor({el}) {
        super({el});

        this.render(template);

        this.name = new Input({
            className: `${this.bemName}__input`,
            placeholder: 'Имя',
            name: 'name'
        });

        this.pwd = new Input({
            className: `${this.bemName}__input`,
            placeholder: 'Пароль',
            type: 'password',
            name: 'password'
        });

        this.button = new Button({
            className: `${this.bemName}__button`,
            text: 'Войти',
            type: 'submit'
        });

        this.link = new Link({
            className: `${this.bemName}__link`,
            href: '#signup',
            text: 'Регистрация'
        });

        this
            .addBlock(this.name)
            .addBlock(this.pwd)
            .addBlock(this.button)
            .addBlock(this.link);

        this.el.addEventListener('submit', function (e) {
            console.log(e.target.querySelector('input[name=name]').value);
            e.preventDefault(); // убираем сабмит формы
        })
    }

}
