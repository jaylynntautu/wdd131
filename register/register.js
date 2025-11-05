import { participantTemplate, successTemplate } from "./Templates.js";

let participantCount = 1;

// ADD PARTICIPANT BUTTON
document.querySelector("#add").addEventListener("click", () => {
  participantCount++;

  const addButton = document.querySelector("#add");
  addButton.insertAdjacentHTML("beforebegin", participantTemplate(participantCount));
});

// SUM FEES
function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];

  return feeElements.reduce((sum, input) => sum + Number(input.value), 0);
}

// SUBMIT FORM
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const adultName = document.querySelector("#adult_name").value;
  const feeTotal = totalFees();

  const summary = document.querySelector("#summary");
  summary.innerHTML = successTemplate({
    name: adultName,
    count: participantCount,
    total: feeTotal,
  });

  document.querySelector("form").classList.add("hide");
  summary.classList.remove("hide");
});
