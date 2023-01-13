import { Field } from './field.js';

class TextField extends Field {

    constructor(element) {
        super(element);
    }
    validate() {
        if (this.element.name = ""){
            this.element.classList.add("nok");
            this.errors = "Le champ ${this.#name} ne peut pas être vide";
            console.log("add nok to text")
            console.log(this.element)
            
        }
        else{
            this.element.classList.add("ok");
                        console.log("add ok to text")
            console.log(this.element)

        }
    }
}

export { TextField };