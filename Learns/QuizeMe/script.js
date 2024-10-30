const a = [{
    "Quastion":"blue Color ka pen kis color ki ink chhodta hai?",
    "Answer":["Red","Yello","Blue","Black"]
}, {
    "Quastion":"Red Color ka pen kis color ki ink chhodta hai?",
    "Answer": ["Red","Yello","Blue","Black"]
},{
    "Quastion":"Black Color ka pen kis color ki ink chhodta hai?",
    "Answer":["Red","Yello","Blue","Black"]
},{
    "Quastion":"Yellow Color ka pen kis color ki ink chhodta hai?",
    "Answer":["Red","Yello","Blue","Black"]
}];

const quastion = document.getElementById('qustion');
const answarButtons = document.getElementById('answarButtons');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const nextBtn = document.getElementById('nextBtn');
const btn = document.querySelector('.btn');


function chooseClick(){
btn1.addEventListener(`click`, () => {
        nextBtn.style.display = "block";
      });    
      btn2.addEventListener(`click`, () => {
        nextBtn.style.display = "block";
      });    
      btn3.addEventListener(`click`, () => {
        nextBtn.style.display = "block";
      });    
      btn4.addEventListener(`click`, () => {
        nextBtn.style.display = "block";
      });    
    }
    chooseClick();
nextBtn.addEventListener( `click` , ()=>{
    nextBtn.style.display = "none";
});

let count=0;
function counting(){
    
}