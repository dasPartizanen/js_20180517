import Block from '../block';
import template from './button.pug';
import './button.scss';

export default class Button extends Block {

    /**
     * Кнопка
     * @param {Object} obj
     * @param {string} obj.text - текст кнопки
     * @param {string} [obj.type] - тип кнопки
     * @param {string} [obj.className] - имя модификатора или микса
     */
    constructor({ text, type = false, className = false }) {
        super();

        this.template = template({
            type: type,
            text: text,
            className: className
        });
    }
}
