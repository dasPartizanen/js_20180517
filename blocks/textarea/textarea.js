import Block from '../block';
import template from './textarea.pug';
import './textarea.scss';

export default class Textarea extends Block {

    /**
     * Input
     * @param {Object} obj
     * @param {string} obj.placeholder - placeholder поля
     * @param {string} [obj.className] - имя модификатора или микса
     */
    constructor({ placeholder, className = false }) {
        super();

        this.template = template({
            placeholder: placeholder,
            className: className
        });
    }

}
