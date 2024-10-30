const input =document.getElementById("numofwords");
let container = document.querySelector(".container");

const generateword = (n) => {
    let text = " ";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i=0; i< n; ++i) {
        const random =(Math.random() * 25).toFixed(0);
        text += letters[random];
    }
return text;
};



const generatepara =()=>{
    const numofwords = Number(input.value);
    
    const paras = document.createElement("p");
    let data ="";

    for(let i = 0; i < numofwords; ++i) {
        const randomNumber = (Math.random() * 15).toFixed(0);
        data += generateword(randomNumber); 
        data += "";
    }
    paras.innerText = data;
    
    paras.setAttribute("class", "paras");

    container.append(paras);
    
};
   
// let input = document.getElementById("numofwords");
// let container = document.querySelector(".container");
// const generateword = (n) =>{
//     const randomword = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//    let text=" ";
//     for(let i=0; i<n; ++i);{                    
//         const randm = (Math.random() * 25).toFixed(0);
//         text += randomword[randm];
//     }
// return text; 
// };

// const generatepara =() =>{
//    const numofwords = Number(input.value);
//    let data =" ";
//    for(let i=0; i<numofwords; ++i);{
//        let a = (Math.random() * 15).toFixed(0);
//        data += generateword(a);
//        data +=" ";
//     }
//     const paras = document.createElement("p");
//     paras.innerText = data;
//     paras.setAttribute("class", "paras");
//    container.append(paras);
// };









