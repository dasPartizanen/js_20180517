import Block from '../block';
import template from './list.pug';
import './list.scss';

export default class List extends Block {

    /**
     * Input
     * @param {Object} obj
     * @param {string} obj.list - массив с элементами списка
     */
    constructor({ list }) {
        super();

        this.template = template({
            items: list
        })
    }

}
