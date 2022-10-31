// validate email
//if incorrect symbols or "" toggle imgActive & remove display on msg

const email_input = document.querySelector(".email_input");
const error_msg = document.querySelector(".error_msg");
const error_img = document.querySelector(".error_img");
const form = document.querySelector(".email_box")


email_input.addEventListener("keyup" , (e) => {
    let emailInputValue = email_input.value;

    if (emailInputValue === '' || emailInputValue == null) {
        e.preventDefault()
        error_msg.classList.toggle("hidden");
        error_img.classList.toggle("hidden");
    }  
})

