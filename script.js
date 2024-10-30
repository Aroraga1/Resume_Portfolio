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
    form.setAttribute("class","formm");
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

    const navbar = document.querySelector(".navbar");
    const cutNav = document.querySelector("#cutNav");
    const navLink = document.querySelector(".navContain");
    const Lines = document.querySelector(".line");
    const grd = document.querySelector(".grd-1");
    const Lines1 = document.querySelector(".line-1");
    const Lines2 = document.querySelector(".line-2");
    const Lines3 = document.querySelector(".line-3");
    Lines.addEventListener('click', () => {
        navLink.style.display = `flex`;
        Lines.style.display = "none";
    });
    cutNav.addEventListener('click', () => {
        navLink.style.display = `none`;
        Lines.style.display = `flex`;
    })
    
    const projectPage = document.querySelector("#projectPage");
    
    projectPage.addEventListener('click', () => {
        Lines.style.display = 'flex';
    });

    const techStacksData = {
        tools: [
            { name: 'Git', img: 'path/to/git.png' },
            { name: 'Figma', img: 'path/to/git.png' },
            { name: 'Canva', img: 'path/to/docker.png' },
            // Add more tools...
        ],
        competitiveTechSkills: [
            { name: 'Data Structures & Algorithms', img: 'path/to/data-structures.png' },
            { name: 'Data Structures & Algorithms', img: 'path/to/data-structures.png' },
            { name: 'Java Script', img: 'path/to/data-structures.png' },
            { name: 'SQL', img: 'path/to/algorithms.png' },
            // Add more skills...
        ],
        development: [
            { name: 'React', img: 'path/to/javascript.png' },
            { name: 'Node', img: 'path/to/python.png' },
            { name: 'Express', img: 'path/to/python.png' },
            { name: 'MongoDB', img: 'path/to/python.png' },
            { name: 'Sockets', img: 'path/to/python.png' },
            { name: 'JWT', img: 'path/to/python.png' },
            // Add more languages...
        ],
        softSkills: [
            { name: 'Communication', img: 'path/to/communication.png' },
            { name: 'Teamwork', img: 'path/to/teamwork.png' },
            // Add more skills...
        ],
    };
    
    const navButtons = document.querySelectorAll('.nav-button');
    const techStacksContainer = document.getElementById('tech-stacks');
    const indicator = document.getElementById('indicator');
    
    let currentButton = navButtons[0];
    
    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            techStacksContainer.innerHTML = '';
    
            techStacksData[category].forEach(stack => {
                const stackDiv = document.createElement('div');
                stackDiv.className = 'stack';
                stackDiv.innerHTML = `
                    <img src="${stack.img}" alt="${stack.name}">
                    <p>${stack.name}</p>
                `;
                techStacksContainer.appendChild(stackDiv);
            });
    
            currentButton.classList.remove('active');
            currentButton = button;
            currentButton.classList.add('active');
    
            const buttonRect = button.getBoundingClientRect();
            const navbarRect = document.querySelector('.navbar').getBoundingClientRect();
            indicator.style.transform = `translateX(${buttonRect.left - navbarRect.left}px)`;
        });
    });
    
    // Initial position of the indicator
    const initialButtonRect = navButtons[0].getBoundingClientRect();
    const initialNavbarRect = document.querySelector('.navbar').getBoundingClientRect();
    indicator.style.transform = `translateX(${initialButtonRect.left - initialNavbarRect.left}px)`;
    