// let a = "6565h b";
// console.log(typeof a);
// let b =true;
// console.log(b);
// let c=5;
// console.log(5+b);
// let a= "mera name garvit";
// console.log("yes"+" "+a);
// console.log(`hanji ${a} hai`);
// let b=22;
// console.log(typeof String(b));
// console.log(a.indexOf("a"));
// console.log(a[3]);
// console.log(a.endsWith("mera name garvit"));
// console.log(a.includes("name"));
// console.log(a.replace("garvit","arora"));
// console.log(a.substring(0,6));
// console.log(a.slice(0,6))
// console.log(a.split(" "));
// console.log(a.length);
// let heading = document.getElementById("head");
// heading.innerText= "hloojnj nj"
// heading.style.color="red";
// heading.style.backgroundColor="yellow";
// let a = prompt("type a number");
// if(a<=5){
//     console.log("ok fine");
// }
// else if(a==6){
//     console.log("not fine");
// }
// else{ 
// console.log("han thk h");
// }

// let a =  Number(prompt("give the values"));
// switch(a){

//     case 1:
//     console.log("hello");
//     break;

//     case 2:
//     console.log("to kese hai aap log");
//     break;

//     case 3:
//     console.log("chaliye shuru karte hai");
//     break;

//     default:
//     console.log("3 hi condition hai mere bhai");
//     break;
// }

// for (let i=0; i < 10000; i=i+1) {

// document.write("a");
// }
// for (let i=0; i < 10; i=i+2) {
// console.log(Math.random());

// console.log("hey");
// console.log("hlww ji");
// console.log("kese hai aap log"); 
//     }


// let i=2;
// while(i<5){
//     console.log(i);
//     ++i;
// }
    


// function funi(a=[]){
    
//     for(let i=0; i<a.length; i++){
//     let b=0;
//     b=b+a[i];
//     console.log(b);
//     }
// }
// let a=[1,2,3,4,5];
// funi(a);





// console.log(document.body);
// console.log(document.body.FirstElement);
// console.log(document.body.childrenconso);
// console.log(document.getElementsByClassName("ied"));


// console.log(ied);
// console.log(document.getElementById("ied"));

// let thisone= document.getElementById("ied");
// console.log(thisone);

// console.log(document.getElementsByTagName("div"));

// thisone.style.color= "black";
// thisone.innerHTML= `<span class="hanji">hlkww</span>`
// console.log(thisone);
// console.log("compelet");
// thisone.style.backgroundColor="yellow";
// let hmm= document.getElementById("ied");
// hmm.style.color="red";
// hmm.style.cursor="pointer"
// hmm.getAttribute("id");
// console.log(hmm);
// const h2 = document.createElement("h2");
// h2.innerText ="yo";
// h2.style.color="blue";
// h2.style.cursor= "pointer";
// h2.prepend = "bhaiya";
// document.body.append(h2);
// let hmn;
// hmn.onclick = hmmfun;
// let hlw =document.getElementById("ied");
// hlw = document.querySelector("button");
// hlw.style.cursor="pointer"
// hlw.style.color="red"
// hlw.style.backgroundcolor="red";
// hlw.onclick = hmmfun;

// function hmmfun(){
// let hmm =document.createElement("h2");
// hmm.style.innerText="hello";
// document.body.append(hmm);
// }

// let myfunc=()=>{
//     console.log("iam garvit");
// }
// myfunc();



// Aero-Function
// let arr=[2,4,6,8,10];
// let rejult=  arr.find((value, index)=>{
//     if(value >   4){
//         return value;
//     }
//  });

// console.log(rejult)

// let arr=[2,4,6,8,10];
// let rejult=  arr.filter((value, index)=>{
//     if(value >   4){
//         return value;
//     }
//  });

// console.log(rejult)

// let arr=[1,2,4,6,8,10];
// let rejult=  arr.filter((value, index)=>{
//     if(value <   4){
//         return value;
//     }
//  });

// console.log(rejult);

// const arr = [2,4,6,8,10];
// let rejult = arr.every((value, index)=>{
//     return value > 1;
// });
// console.log(rejult);
  

const arr = [2,4,6,8,10];
// let rejult = arr.some((value, index)=>{
//     return value > 2;
// });
// console.log(rejult);
  

// for (let element of arr){
//     element=element+3;
//     console.log(element);
// }

// for (let value of arr){
//     value=  value+3;
//     console.log(value);
// }

// let sum=0;
//  arr.forEach((value, index)=>{
//     sum+=value;
// });

// console.log(sum);


let sum=0;
 arr.map((value, index)=>{
   return value+20;
});

console.log(sum);



