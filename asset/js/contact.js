function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
 }
  
 function validatePhone(phone) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(phone);
  }
  
  function validateText(text) {
    const re = /^[A-Za-z]+$/;
    return re.test(text);
  }
  const submitForm = (event) => {
      let error=false;
    //   var Form=document.forms["contactForm"]
    let Form=document.getElementById("contactForm");
    let fullName=Form.elements[0]
    let phone=Form.elements[1]
    let email=Form.elements[2]
    let message=Form.elements[3]
    let messageValue=message.value
    let fullNameValue=fullName.value
    let emailValue=email.value
    let phoneValue=phone.value
    // console.log(fullNameValue)
    // console.log(phone)
      event.preventDefault()

 if (!validateText(fullNameValue)) {
    error = true
    fullnameError.innerHTML= "<span class='text-danger'>Please input your correct name</span>";
}
if (fullNameValue === "") {
    // error = false
    error=true
    fullnameError.innerHTML= "<span class='text-danger'>Please input your full name</span>";
}


if(!validateEmail(emailValue)){
    error=true
    emailError.innerHTML= "<span class='text-danger'>Please input your valid email</span>";
}
if(emailValue === ""){
    error=true
    emailError.innerHTML= "<span class='text-danger'>Please input your email</span>";
}
// emailError.innerHTML= "";
if (!validatePhone(phoneValue)) {
    error = true
    phoneError.innerHTML= "<span class='text-danger'></span>";
}
if(phoneValue === ""){
    error=true
    phoneError.innerHTML= "<span class='text-danger'>Please input your phone number</span>";
}
if (!validateText(messageValue)) {
    error = true
    messageError.innerHTML= "<span class='text-danger'>Invalid Message</span>";
}
if (messageValue === "") {
    error = true
    messageError.innerHTML= "<span class='text-danger'>Please input your message</span>";
}

}

