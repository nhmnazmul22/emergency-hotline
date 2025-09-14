// Default data
const emergencyCallingData = [
  {
    imgLink: "/assets/emergency.png",
    imgBgColor: "#FFE3E2",
    name: "জাতীয় জরুরি সেবা",
    nameEng: "National Emergency",
    number: "999",
    tag: "সার্বজনীন",
  },
  {
    imgLink: "/assets/police.png",
    imgBgColor: "#DFEFFF",
    name: "পুলিশ",
    nameEng: "Police",
    number: "999",
    tag: "পুলিশ",
  },
  {
    imgLink: "/assets/fire-service.png",
    imgBgColor: "#FFE3E2",
    name: "ফায়ার সার্ভিস",
    nameEng: "Fire Service",
    number: "999",
    tag: "ফায়ার",
  },
  {
    imgLink: "/assets/ambulance.png",
    imgBgColor: "#FFE3E2",
    name: "অ্যাম্বুলেন্স",
    nameEng: "Ambulance",
    number: "1994-999999",
    tag: "স্বাস্থ্য",
  },
  {
    imgLink: "/assets/emergency.png",
    imgBgColor: "#FFE3E2",
    name: "নারী ও শিশু সহায়তা",
    nameEng: "Women & Child Helpline",
    number: "109",
    tag: "সহায়তা",
  },
  {
    imgLink: "/assets/emergency.png",
    imgBgColor: "#FFE3E2",
    name: "দুদক",
    nameEng: "Anti-Corruption",
    number: "106",
    tag: "সরকারি",
  },
  {
    imgLink: "/assets/emergency.png",
    imgBgColor: "#FFE3E2",
    name: "বিদ্যুৎ বিভ্রাট",
    nameEng: "Electricity Outage",
    number: "16216",
    tag: "বিদ্যুৎ",
  },
  {
    imgLink: "/assets/brac.png",
    imgBgColor: "#FFE3E2",
    name: "ব্র্যাক",
    nameEng: "Brac",
    number: "16445",
    tag: "এনজিও",
  },
  {
    imgLink: "/assets/Bangladesh-Railway.png",
    imgBgColor: "#FFE3E2",
    name: "বাংলাদেশ রেলওয়ে",
    nameEng: "Bangladesh Railway",
    number: "163",
    tag: "পরিবহন",
  },
];

// Dom Variables
const emergencyCardContainer = document.getElementById("emergency-call-card");

(function () {
  emergencyCardContainer.innerHTML = emergencyCallingData
    .map((value, index) => {
      return `
         <div
            class="bg-white p-5 rounded-xl col-span-12 sm:col-span-6 xl:col-span-4 shadow-md"
          >
            <div class="flex justify-between items-center">
              <div
                class="bg-[${value.imgBgColor}] w-[60px] h-[60px] flex justify-center items-center rounded-2xl"
              >
                <img
                  src="${value.imgLink}"
                  alt="ambulance"
                  class="w-[32px] h-[32px]"
                />
              </div>
              <span
                class="lovedBtn"><i class="fa-regular fa-heart cursor-pointer text-xl"></i
              ></span>
            </div>
            <div class="my-5">
              <div class="mb-3">
                <p class="text-[24px] font-medium">${value.name}</p>
                <p class="text-lg text-[#5C5C5C]">${value.nameEng}</p>
              </div>
              <div>
                <p class="text-[24px] font-medium mb-3">${value.number}</p>
                <span class="bg-[#F2F2F2] text-[#5C5C5C] px-4 py-1 rounded-full"
                  >${value.tag}</span
                >
              </div>
            </div>
            <div class="flex gap-2 items-center justify-between">
              <button
                class="btn copy-btn w-[48%] bg-transparent shadow-none rounded-lg font-normal"
              >
                <i class="fa-regular fa-copy"></i> <span>Copy </span>
              </button>
              <button
                class="btn call-btn w-[48%] border-none rounded-lg bg-[#00A63E] text-white font-normal"
                onClick="callService('${value.name}', '${value.number}')"
              >
                <i class="fa-solid fa-phone"></i> <span>Call</span>
              </button>
            </div>
          </div>
    `;
    })
    .join("");
})();
