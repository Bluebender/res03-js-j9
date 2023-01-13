import { Field } from './field.js';

class PasswordField extends Field {

    constructor(element) {
        super(element);
    }
    validate() {
        if (this.element.name === ""){
            this.element.classList.add("nok");
            this.errors = "Le champ ${this.#name} ne peut pas être vide";
        }
        else if (this.element.name.length < 5){
            this.errors = "Le champ ${this.#name} est trop court (5 caractères minimum)";
        }
        else{
            this.element.classList.add("ok");
        }
    }
}

export { PasswordField };