const arr = process.argv;
const timeInput = arr.slice(2);

alarm = (timeInput) => {
  for (let time of timeInput) {
    if (timeInput === NaN) {
      return;
    }

    setTimeout(() => {
      process.stdout.write("\x07");
    }, time * 1000);
  }
};

alarm(timeInput);
