export default class View {

    constructor({ el }) {
        this.el = el;
        this.hide();
    }

    render(template) {
        this.el.innerHTML = template();
    }

    show() {
        this.el.hidden = false;
    }

    hide() {
        this.el.hidden = true;
    }

    addBlock(block) {
        block.append(this.el.querySelector(`.${this.bemName}`));
        return this;
    }

}
