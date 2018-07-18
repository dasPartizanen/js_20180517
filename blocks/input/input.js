import Block from '../block';
import template from './input.pug';
import './input.scss';

export default class Input extends Block {

    /**
     * Input
     * @param {Object} obj
     * @param {string} obj.placeholder - текст инпута,
     * @param {string} [obj.type] - тип инпута (по умолчанию text)
     * @param {string} [obj.value] - значение инпута
     */
    constructor({ placeholder, type = 'text', value = '', className = false }) {
        super();

        this.template = template({
            type: type,
            placeholder: placeholder,
            value: value,
            className: className
        });
    }

}
