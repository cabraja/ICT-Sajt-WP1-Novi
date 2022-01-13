// Provera forme
let submitButton = document.querySelector("#check");



submitButton.addEventListener("click",() => {

    let inputName = document.querySelector("#name");
    let inputEmail = document.querySelector("#email");
    let inputBeer = document.querySelector("#beer");
    let inputMessage = document.querySelector("#message");


    // Provera imena i prezimena
    if(inputName.value.length < 6){
        inputName.nextElementSibling.innerHTML = "Name can not be shorter than 6 characters."
        inputName.className = "false";
    }
    else{
        const regName = /^[A-ZČĐĆŠŽ][A-zČĆŠĐŽ]{2,14}(\s[A-ZČĐĆŠŽ][A-zČĆŠĐŽ]{2,30})+$/;

        if(!regName.test(inputName.value)){
            inputName.nextElementSibling.innerHTML = "Name must start with a capital letter and have at least two words."
            inputName.className = "false";
        }
        else{
            inputName.nextElementSibling.innerHTML = "";
            inputName.className = "correct";
        }
    }

    // Provera email adrese
    if(inputEmail.value.length < 6){
        inputEmail.nextElementSibling.innerHTML = "Email can not be shorter than 6 characters.";
        inputEmail.className = "false";
    }
    else{
        const regEmail = /^[a-z|A-Z][a-z|A-Z+_\-.]{2,40}[a-z|A-Z][@][a-z]{3,12}[.][a-z]{2,4}$/;

        if(!regEmail.test(inputEmail.value)){
            inputEmail.nextElementSibling.innerHTML = "Email must be in format 'example@mail.domain'."
            inputEmail.className = "false";
        }
        else{
            inputEmail.nextElementSibling.innerHTML = "";
            inputEmail.className = "correct";
        }
    }

    // Provera select input-a
    if(inputBeer.value == "default-option"){
        inputBeer.nextElementSibling.innerHTML = "Please select an option above.";
        inputBeer.className = "false";
    }
    else{
        inputBeer.nextElementSibling.innerHTML = "";
        inputBeer.className = "correct";
    }

    // Provera poruke
    if(inputMessage.value.length < 20){
        inputMessage.nextElementSibling.innerHTML = "Message should not be shorter than 20 characters.";
        inputMessage.className = "false";
    }
    else{
        inputMessage.nextElementSibling.innerHTML = "";
        inputMessage.className = "correct";
    }

})


