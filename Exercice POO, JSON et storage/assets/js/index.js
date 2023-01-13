import { Form } from './classes/form.js';
import { Field } from './classes/field.js';
import { TextField } from './classes/textField.js';
import { EmailField } from './classes/emailField.js';
import { PasswordField } from './classes/passwordField.js';


window.addEventListener("DOMContentLoaded", function(){

    let inputs = document.querySelectorAll("input");
    
    let firstname = new TextField(inputs[0]);
    firstname.name = inputs[0].getAttribute("name");
    let lastname = new TextField(inputs[1]);
    lastname.name = inputs[1].getAttribute("name");
    let email = new EmailField(inputs[2]);
    email.name = inputs[2].getAttribute("name");
    let password = new PasswordField(inputs[3]);
    password.name = inputs[3].getAttribute("name");
    let confirmPassword = new PasswordField(inputs[4]);
    confirmPassword.name = inputs[4].getAttribute("name");

    let form1 = new Form();
    console.log(form1);

    form1.addField(firstname);
    form1.addField(lastname);
    form1.addField(email);
    form1.addField(password);
    form1.addField(confirmPassword);
    
    let userInformationForm = document.getElementById("user-information");
    userInformationForm.addEventListener("submit", function(envent){
        console.log("coucou") 
        event.preventDefault();
        form1.submit();
    });
});