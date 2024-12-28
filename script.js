let yourName = document.getElementById("yourName");
let crush = document.getElementById("yourCrush");
let btn = document.getElementById("button");

btn.addEventListener("click", () => {
  let yourNameValue = yourName.value;
  let yourCrushValue = crush.value;
  if (yourNameValue == "" || yourCrushValue == "") {
    let div = document.createElement("div");
    div.style.height = "20px";
    div.innerText = "Please enter both name";
    div.style.color = "red";
    div.style.transition = "all";
    div.style.transitionDuration = "1s";
    div.style.transitionTimingFunction = "ease-in";
    yourName.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 3000);
  } else {
    let data = `${yourNameValue.toLowerCase()}love${yourCrushValue.toLowerCase()}`;
    countLetters(data);
  }
});

const countLetters = (data) => {
  let totalCount = "";
  let dataArray = data.split(""); // Convert string to array
  for (let i = 0; i < dataArray.length; i++) {
    let count = 0; // Reset count for each character
    for (let j = i; j < dataArray.length; j++) {
      if (dataArray[i] == dataArray[j]) {
        count++;
        if (i !== j) {
          dataArray.splice(j, 1); // Remove data[j]
          j--; // Adjust index after removal
        }
      }
    }
    totalCount += count;
  }

  calculatePercentage(totalCount);
};

const calculatePercentage = (data) => {
  let dataArray = data.split("");
  let result = "";
  let length = dataArray.length;
  for (let i = 0; i < Math.ceil(length / 2); i++) {
    let sum = parseInt(dataArray[i]) + parseInt(dataArray[length - 1 - i]);
    result += sum.toString();
  }

  let newResult = result;
  while (newResult.length > 2) {
    let dataArray = newResult.split("");
    newResult = "";
    for (let i = 0; i < Math.ceil(dataArray.length / 2); i++) {
      let sum =
        parseInt(dataArray[i]) + parseInt(dataArray[dataArray.length - 1 - i]);
      newResult += sum.toString();
    }
  }

  let div = document.createElement("div");
  div.innerHTML = `<h1>Result:${newResult}% </h1>`;
  btn.after(div);
  setTimeout(() => {
    div.remove();
  }, 5000);
  console.log(newResult);
};
