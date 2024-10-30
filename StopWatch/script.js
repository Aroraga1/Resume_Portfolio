    const watch = document.querySelector(".watch");

    let timer = 0;
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;

    function reset() {
        watch.innerHTML = "00:00:00:00";
        clearInterval(timer);
        timer = 0;
        elapsedTime = 0;
        isRunning = false;
    }

    function Stop(){
        if (isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
        }
    }

    function start() {
        if (!isRunning) {
          startTime = Date.now() - elapsedTime;
          timer = setInterval(update, 10);
          isRunning = true;
        }
      }

    function update() {
        const currentTime = Date.now();
        elapsedTime = currentTime - startTime;
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let milliseconds = Math.floor(elapsedTime % 1000 / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        watch.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`;
        console.log(`${hours}:${minutes}:${seconds}:${milliseconds}`);
    }
