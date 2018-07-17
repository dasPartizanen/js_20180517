export default class Block {

    /**
     * Вставка элемента на старинцу
     * @param {Element} root - родительский элемент
     */
    append(root) {
        root.innerHTML += this.template;
    }

}
