// const otpfillupdiv = document.querySelector(".otpfillupdiv");
// const otpinput = document.querySelector(".otp");
// const otpsubmit = document.querySelector(".otpsubmit");

const chattingtext = document.querySelector(".chating_text");
const chat = document.querySelector(".chat");
const massage_hii = document.createElement("button");
massage_hii.setAttribute("class", "massage_hii");
massage_hii.innerHTML = "Hii!!👋🏻";
chat.append(massage_hii);

massage_hii.addEventListener("click", () => {
    form();
    massage_hii.style.display = "none";
});
function form() {
    const form = document.createElement("form");
    let nam = document.createElement("input");
    nam.setAttribute("class", "nam");
    let mail = document.createElement("input");
    mail.setAttribute("class", "mail");
    let msg = document.createElement("input");
    msg.setAttribute("class", "msg");
    let submitbtn = document.createElement("button");
    submitbtn.setAttribute("class", "submitbtn");
    chat.append(form);
    form.append(nam);
    form.append(mail);
    form.append(msg);
    form.append(submitbtn);
    nam.type = "text";
    nam.placeholder = "What's Your name?";
    mail.type = "text";
    mail.placeholder = "Type Your E-mail..";
    msg.type = "text";
    msg.placeholder = "Your Message to Me...?";
    submitbtn.innerHTML = "Send Message😊";
    submitbtn.type = "submit";

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        sendmail(nam.value, mail.value, msg.value);
    // otpfillupdiv.style.display = "block";
    });
}


function sendmail(name, email, massage) {
    let takengiven = {
        name: name,
        email: email,
        massage: massage,
    }
        emailjs.send("service_ppj72c7","template_jcvns8q",takengiven).then(alert("email send successfully!"));
    }   


    const cutNav = document.querySelector("#cutNav");
    const navLink = document.querySelector(".navContain");
    const Lines = document.querySelector(".line");
    Lines.addEventListener('click', () => {
        navLink.style.display = `block`;
        // Lines.style.display = `none`;
    });
    cutNav.addEventListener('click', () => {
        navLink.style.display = `none`;
        // Lines.style.display = `block`;
    });




