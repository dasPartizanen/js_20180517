import Block from '../block';
import template from './message.pug';
import './message.scss';

export default class Message extends Block {

    /**
     * Input
     * @param {Object} obj
     * @param {string} obj.author - имя автора сообщения
     * @param {string} obj.message - текст сообщения
     */
    constructor({ message, author }) {
        super();

        this.template = template({
            text: message,
            author: author
        });
    }

}
