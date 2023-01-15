import { Field } from './field.js';

class PasswordField extends Field {

    constructor(element) {
        super(element);
    }
    validate() {
        this.errors = [];
        
        if (this.element.value.length === 0){
            this.element.classList.remove("ok");
            this.element.classList.add("nok");
            this.errors = `Le champ ${this.name} ne peut pas être vide`;
        }
        else if (this.element.value.length < 5){
            this.element.classList.remove("ok");
            this.element.classList.add("nok");
            this.errors = `Le champ ${this.name} est trop court (5 caractères minimum)`;
        }
        else{
            this.element.classList.remove("nok");
            this.element.classList.add("ok");
            this.errors = "";
        }
    }
}

export { PasswordField };