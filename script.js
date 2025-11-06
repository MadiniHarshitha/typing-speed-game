const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing fast requires practice and focus.",
  "JavaScript makes web pages interactive.",
  "Speed and accuracy are both important.",
  "Practice improves your typing speed."
];

let startTime;

function startGame() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = quote;
  document.getElementById("input").value = "";
  document.getElementById("result").textContent = "";
  startTime = new Date().getTime();
}

document.getElementById("input").addEventListener("input", function () {
  const quote = document.getElementById("quote").textContent;
  const typedText = this.value;

  if (typedText === quote) {
    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000;
    document.getElementById("result").textContent =' You typed in ${timeTaken.toFixed(2)} seconds! ';
  }
});
