document.addEventListener('DOMContentLoaded', function () {
  // 價目表風琴列
  const accordionBtn = document.getElementById("accordionBtn");
  const accordionNotice = document.getElementById("accordionNotice");
  const noticeBtn = document.getElementById("noticeBtn");

  accordionBtn.addEventListener('click', function () {
    accordionNotice.style.setProperty('--content-height', accordionNotice.scrollHeight + 'px');
    accordionNotice.classList.toggle('-on');
    noticeBtn.classList.toggle('-on');

  })

  // 切換AB模式
  let autoMode = document.getElementById('auto-mode');
  let manualMode = document.getElementById('manual-mode');

  let autoModePanel = document.getElementById('auto-mode-panel');
  let manualModePanel = document.getElementById('manual-mode-panel')

  function switchMode() {
    if (autoMode.checked) {
      autoModePanel.classList.remove('-none');
      manualModePanel.classList.add('-none');
    } else if (manualMode.checked) {
      manualModePanel.classList.remove('-none');
      autoModePanel.classList.add('-none');
    }
  }

  autoMode.addEventListener('change', switchMode);
  manualMode.addEventListener('change', switchMode);

  // 選取標題狀態變化
  const formSection = document.querySelectorAll('.form-step');
  const titleSteps = document.querySelectorAll('.title-steps');

  window.addEventListener('scroll', function () {
    // 小於1024px就不執行
    if (window.innerWidth <= 1024) {
      titleSteps.forEach(titleStep => titleStep.classList.remove('-current-step'));
      return;
    }

    let currentIndex = 0;
    formSection.forEach(function (section, index) {
      let rect = section.getBoundingClientRect();

      if (rect.top <= 120) {
        currentIndex = index;
      }
    });

    titleSteps.forEach(titleStep => titleStep.classList.remove('-current-step'));
    if (titleSteps[currentIndex]) {
      titleSteps[currentIndex].classList.add('-current-step');
    }

  });


  // 查看明細風琴

  const showBoxBtn = document.getElementById("showBoxBtn");
  const summaryBody = document.getElementById("summaryBody");
  const showArrow = document.getElementById("showArrow");

  showBoxBtn.addEventListener('click', function () {
    summaryBody.style.setProperty('--content-height', summaryBody.scrollHeight + 'px');
    summaryBody.classList.toggle('-on');
    showArrow.classList.toggle('-on');

  })


})


// 表單同步至狀態列
window.addEventListener('load', function () {
  const bookingForm = document.querySelector('.steps-container');
  const storeResult = document.getElementById('store-result');
  const dateResult = document.getElementById('date-result');
  const timeResult = document.getElementById('time-result');
  const memResult = document.getElementById('member-result');
  const modeResult = document.getElementById('mode-result');
  const tableResult = document.getElementById('table-result');
  const totalTablePriceEl = document.querySelector('.total-table-price');

  bookingForm.addEventListener('change', updateSummaryOrder);


  function updateSummaryOrder() {
    if (!bookingForm) { return; }

    // 場館資料
    const checkedStore = bookingForm.querySelector('input[name="store"]:checked');
    if (checkedStore) {
      const storeLabel = bookingForm.querySelector(`label[for = "${checkedStore.id}"]`);
      storeResult.textContent = storeLabel.textContent.trim();
    }

    // 日期
    const dateInput = bookingForm.querySelector('input[type="date"]');
    if (dateInput && dateInput.value) {
      dateResult.textContent = dateInput.value;
    } else {
      dateResult.textContent = "請選擇日期";
    }

    // 人數
    const memInput = bookingForm.querySelector('select[name="num_people"]').value;
    if (memInput) {
      memResult.textContent = `共 ${memInput} 位`;
    }

    // 時數
    const startTime = bookingForm.querySelector('select[name="start_time"]').value;
    const checkedHour = bookingForm.querySelector('input[name="hour"]:checked');

    if (startTime && checkedHour) {

      // 🎯 1. 幾何拆解：利用 .split(':') 把 "17:00" 拆成 ["17", "00"]
      const timeParts = startTime.split(':');

      // 🎯 2. 鋼鐵轉型：用 parseInt 把字串 "17" 變成可以做加法的整數 17
      let startHr = parseInt(timeParts[0], 10);
      let startMin = timeParts[1]; // 分鐘通常不用動，因為你的預約時數都是整數小時

      // 🎯 3. 時數轉型：把勾選的時數（例如 "2"）也轉成整數數字 2
      const duration = parseInt(checkedHour.value, 10);

      // 🎯 4. 數學加法：17 + 2 = 19
      let endHr = startHr + duration;

      // 🛡️ 5. 跨午夜防禦閥：萬一有人約深夜（例如 23:00 + 2小時 = 25 點 ➔ 自動修正為 01 點）
      if (endHr >= 24) {
        endHr = endHr - 24;
      }

      // 🎨 6. 頂級補零易容術：利用 .padStart(2, '0') 讓個位數的小時自動補零（例如 1 點 ➔ "01"）
      const endHrString = endHr.toString().padStart(2, '0');

      // 🚀 7. 組合出最終的結束時間字串（例如 "19:00"）
      const endTime = `${endHrString}:${startMin}`;

      timeResult.textContent = `${startTime} – ${endTime} (共 ${checkedHour.value} 小時)`;

    } else {
      timeResult.textContent = '未選擇完整時段';
    }


    // 選球桌模式
    const chosenMode = bookingForm.querySelector('input[name="choose-mode-input"]:checked');
    if (chosenMode) {
      const modeLabel = bookingForm.querySelector(`label[for="${chosenMode.id}"] .mode-title`);
      modeResult.textContent = modeLabel.textContent;

    }


  }

})
