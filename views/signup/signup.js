import Input from '../../blocks/input/input';
import Button from '../../blocks/button/button';
import Link from '../../blocks/link/link';
import View from '../views';
import template from './signup.pug';
import './signup.scss';

export default class SignupView extends View {

    get bemName() {
        return 'signup';
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

        this.pwdRe = new Input({
            className: `${this.bemName}__input`,
            placeholder: 'Повторите пароль',
            type: 'password'
        });

        this.button = new Button({
            className: `${this.bemName}__button`,
            text: 'Зарегистрироваться',
            type: 'submit'
        });

        this.link = new Link({
            className: `${this.bemName}__link`,
            href: '#login',
            text: 'Логин'
        });

        this
            .addBlock(this.name)
            .addBlock(this.pwd)
            .addBlock(this.pwdRe)
            .addBlock(this.button)
            .addBlock(this.link);
    }

}
