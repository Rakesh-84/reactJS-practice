function Timer() {
  this.seconds = 0;

    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
}

const timer = new Timer();