const spinSymbols = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
let delay = 200;

  for (const symbol of spinSymbols) {
    setTimeout(() => {
      process.stdout.write(symbol);
    }, delay);
    delay += 200;
  }
