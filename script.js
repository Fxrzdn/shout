const main = document.querySelector(".topalert");
const url = "data.txt";

reqData();

function output(data) {
  console.log(data);
  console.log(this.responseText);
  main.innerHTML = this.responseText;
}

function reqData() {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", output);
  xhr.open("GET", url);
  xhr.send();
  console.log(xhr);
}
