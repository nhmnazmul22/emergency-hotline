// =========== Default Data ========= //
let callingHistory = [];

// =========== Love Adding Features ========= //
let loveCounter = 0;
const loveBtn = document.querySelectorAll(".lovedBtn");
const loveCounterElement = document.getElementById("love-count");

loveBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    loveCounter += 1;
    loveCounterElement.innerText = loveCounter;
  });
});

// =========== Calling Features ========= //
let availableCoin = 100;
const coinCounterElm = document.getElementById("coin-count");

const callService = (serviceName, number) => {
  if (availableCoin === 0) {
    alert("❌ আপনার কাছে পর্যাপ্ত কয়েন নেই, দয়া করে কয়েন এড করুন।");
    return;
  }

  alert(`📞 কলিং ${serviceName} ${number}...`);
  availableCoin -= 20;
  coinCounterElm.innerText = availableCoin;

  // Render the calling history
  const callingData = { serviceName, number, time: Date.now() };
  callingHistory.push(callingData);
  renderHistoryCard();
};

// =========== History Rendering Features ========= //
const historyContainer = document.getElementById("history-container");

function renderHistoryCard() {
  historyContainer.innerHTML = callingHistory
    .map((value) => {
      return `
           <div
            class="bg-[#FAFAFA] rounded-xl flex justify-between items-center p-3"
          >
            <div>
              <p class="text-base xl:text-lg text-[#111111]">
                ${value.serviceName}
              </p>
              <p class="text-[#5C5C5C]">${value.number}</p>
            </div>
            <p class="text-base xl:text-lg text-[#111111]">${
              new Date(value.time).toLocaleString().split(",")[1]
            }</p>
          </div>
        `;
    })
    .join("");
}

// =========== History Clearing Features ========= //
const clearBtn = document.getElementById("clear-history");
clearBtn.addEventListener("click", () => {
  callingHistory = [];
  historyContainer.innerHTML = "";
});

// =========== Copy number Features ========= //
let copyCounter = 0;
const copyCounterElm = document.getElementById("copy-count");

const copyNumber = (number) => {
  alert(`নাম্বার কপি হয়েছে ${number}`);
  copyCounter += 1;
  copyCounterElm.innerText = copyCounter;
};
