const stages = [];

function defineTime(event) {
  event.preventDefault();
  const dateWork = new Date(document.getElementById("workDate").value),
    surname = document.getElementById("surname").value;
  if (dateWork && surname && dateWork.getFullYear() <= new Date().getFullYear() && dateWork.getFullYear() >= 1970) {
    const finalResult = new Date().getFullYear() - dateWork.getFullYear();

    const tbody = document.getElementById("table2").getElementsByTagName("tbody")[0];
    const row = tbody.insertRow(-1),
      td1 = row.insertCell(0),
      td2 = row.insertCell(1);

    td1.innerHTML = surname;
    td2.innerHTML = finalResult;
    stages.push(finalResult);
    if (finalResult.toString()[finalResult.toString().length - 1] === "1") {
      td2.innerHTML += " год";
    } else {
      td2.innerHTML += " лет";
    }
    defineAverage();
  } else {
    alert("Ошибка ввода, пожалуйста, проверьте правильность введенных данных!");
  }
  document.getElementById("workDate").value = "";
  document.getElementById("surname").value = "";
}
document.getElementById("button").addEventListener("click", defineTime);

document.getElementById("surname").addEventListener("input", (event) => {
  if ("1234567890".indexOf(event.data) != -1) {
    event.target.value = "";
  }
});

function defineAverage() {
  let average = 0;

  for (let index = 0; index < stages.length; index++) {
    average += stages[index];
  }

  average = average / stages.length;
  if (average.toString()[average.toString().length - 1] === "1") {
    average += " год";
  } else {
    average += " лет";
  }

  document.querySelector(".average-stage").textContent = average;
}
