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
        // let retour = JSON.stringify(this);
        // sessionStorage.setItem("form", "form1");
    }
    validate(){
        let flag = false;
        for (let i=0; i<this.#fields.length; i++){
            this.#fields[i].validate();
            if (this.#fields[i].errors !== ""){
                flag = true;
            }
            let button = document.querySelector("button");
            
            if (flag === true){
                button.classList.add("disabled");
                button.disabled = true;
                
            }
            else{
                console.log("On valdide")
                button.classList.remove("disabled");
                button.disabled = false;
            }
        }
    }
    toJSON(){
        
    }
}

export { Form };