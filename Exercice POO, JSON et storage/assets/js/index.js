import { Form } from './classes/form.js';
import { Field } from './classes/field.js';
import { TextField } from './classes/textField.js';
import { EmailField } from './classes/emailField.js';
import { PasswordField } from './classes/passwordField.js';


window.addEventListener("DOMContentLoaded", function(){

    let inputs = document.querySelectorAll("input");
    
    let firstname = new TextField(imputs[0]);
    let lastname = new TextField(dimputs[1]);
    let email = new EmailField(imputs[2]);
    let password = new PasswordField(imputs[3]);
    let confirmPassword = new PasswordField(imputs[4]);
    
});