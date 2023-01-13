import { Field } from './field.js';

class EmailField extends Field {

    constructor(element) {
        super(element);
    }
    validate() {
        if (this.element.name === ""){
            this.element.classList.add("nok");
            this.errors = "Le champ ${this.#name} ne peut pas être vide";
        }
        else{
            this.element.classList.add("ok");
        }
    }
}

export { EmailField };