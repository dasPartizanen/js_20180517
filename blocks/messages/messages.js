import Block from '../block';
import template from './message.pug';
import './message.scss';

export default class Message extends Block {

    /**
     * Input
     * @param {Object} obj
     * @param {string} obj.author - имя автора сообщения
     * @param {string} obj.message - текст сообщения
     * @param {string} [obj.className] - имя микса
     */
    constructor({ message, author, className = false, modifierOwner = false }) {
        super();

        this.template = template({
            className: className,
            modifierOwner: modifierOwner ? 'message_owner' : '',
            text: message,
            author: author
        });
    }

}
