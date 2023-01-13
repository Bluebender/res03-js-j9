class Form {
    #fields;
    #submitted;

    constructor() {
        this.#fields = [];
    }
    get fields() {
        return this.#fields;
    }
    get submitted() {
        return this.#submitted;
    }
    set submitted(submitted) {
        this.#submitted = submitted;
    }
    addField(field){
        this.#fields.push(field);
    }
    submit(){
        
    }
    validate(){
        for (let i=0; i<this.#fields.length; i++){
            this.#fields[i].validate();
            console.log("On lance le validate du form1")

        }
    }
    toJSON(){
        
    }
}

export { Form };