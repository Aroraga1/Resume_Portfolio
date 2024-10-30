// const taking = document.getElementById("taking");
// const btn = document.getElementById("btn");
// const heading = document.getElementById("h1");

// btn.addEventListener("click", () => {
//     taking.style.backgroundColor =" black";
// });


// btn.addEventListener("mouseover", () => {
//     btn.style.transform = "scale(1.2)";
// });


// btn.addEventListener("mouseout", () => {
//     btn.style.transform = "scale(1.0)";
// });



// btn.addEventListener("mouseover", () => {
//     btn.add = "scale(1.2)";
// });

// // const a = new Date();

// // console.log(a.getFullYear());

// const  input = document.getElementById("myInput");
// const  btnn  = document.getElementById("myBtn");
 
// const btnClick = ()=>{
//     sessionStorage.setItem("key1", input.value);
// }

// btn.addEventListener("click", btnClick);

// alert(sessionStorage.getItem("key1"));

// class base{
//     constructor(value1, value2){
//         this.name=value1;
//         this.srnm=value2;
//     }
//     child() {
//         console.log("hello everyone");        
//     }
// }
//  const variabl = new base(122,333);
  
//  variabl.name;
//  console.log(variabl);

function sendmail(){
    let takengiven = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        massage : document.getElementById("massage").value,
    }
    emailjs.send("service_ppj72c7","template_jcvns8q",takengiven).then(alert("email send successfully!"));
}   