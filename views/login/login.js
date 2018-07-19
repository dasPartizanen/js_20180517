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
            placeholder: 'Имя'
        });

        this.pwd = new Input({
            className: `${this.bemName}__input`,
            placeholder: 'Пароль',
            type: 'password'
        });

        this.button = new Button({
            text: 'Войти',
            type: 'submit'
        });

        this.link = new Link({
            href: '#signup',
            text: 'Регистрация'
        });

        this
            .addBlock(this.name)
            .addBlock(this.pwd)
            .addBlock(this.button)
            .addBlock(this.link);
    }

}
