import Block from '../block';
import template from './textarea.pug';
import './textarea.scss';

export default class Textarea extends Block {

    /**
     * Input
     * @param {Object} obj
     * @param {string} obj.placeholder - placeholder поля
     */
    constructor({ placeholder }) {
        super();

        this.template = template({
            placeholder: placeholder
        });
    }

}
