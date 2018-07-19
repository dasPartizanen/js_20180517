import Message from '../../blocks/messages/messages';
import Textarea from '../../blocks/textarea/textarea';
import View from '../views';
import template from './chat.pug';
import './chat.scss';

export default class ChatView extends View {

    get bemName() {
        return 'chat';
    }

    constructor({el}) {
        super({el});

        this.render(template);

        this.insertMessages([
            {
                text: 'Че каво, ссучары?',
                name: 'Пинкман',
                owner: false
            },
            {
                text: 'Сегодня кристально синий!',
                name: 'Уайт',
                owner: false
            },
            {
                text: 'Пакуйте, беру все.',
                name: 'Хэнк',
                owner: true
            }
        ]);

        this.textarea = new Textarea({
            className: `${this.bemName}__textarea`,
            placeholder: 'Введите свое сообщение'
        });

        this.addBlock(this.textarea, 'send-message');
        this.el.addEventListener('keyup', this.onKeyUp.bind(this))
    }

    insertMessage({ text, name, owner = false }) {
        this.message = new Message({
            className: `${this.bemName}__message`,
            message: text,
            author: name,
            modifierOwner: owner
        });
        this.addBlock(this.message, 'content')
    }

    insertMessages(messages = []) {
        messages.forEach((message) => this.insertMessage(message));
    }

    onKeyUp(e) {
        if (e.keyCode === 13) {
            let target = e.target;
            this.insertMessage({
                text: target.value,
                name: 'Хэнк',
                owner: true
            });
            e.preventDefault();
            target.value = '';
        }
    }

}
