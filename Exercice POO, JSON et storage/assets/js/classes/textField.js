import { Field } from './field.js';

class TextField extends Field {

    constructor(element) {
        super(element);
    }
    // validate() {
    //     if (this.#element === ""){
    //         element.classList.add("nok")
    //     }
    //     else{
    //         element.classList.add("ok")
    //     }
    // }
}

export { TextField };