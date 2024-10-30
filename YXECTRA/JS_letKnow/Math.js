const garvit = Math.floor(Math.random() * 2 +1);

var x = (name) => {
    console.log(new Date(Date.now()));
}

// var a = new Date(Date.now());
const b = setInterval(x,1000,"garvit");
console.log(b);