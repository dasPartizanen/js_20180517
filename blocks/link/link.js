import Block from '../block';
import template from './link.pug';
import './link.scss';

export default class Link extends Block {

    /**
     * Input
     * @param {Object} obj
     * @param {string} obj.href - путь ссылки,
     * @param {string} [obj.className] - имя класса модификатора или микса
     */
    constructor({ href = '#', className = false, text = 'Ссылка' }) {
        super();

        this.template = template({
            href: href,
            className: className,
            text: text
        });
    }

}
