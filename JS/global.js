document.addEventListener("DOMContentLoaded", function () {
  // 漢堡選單
  // 1. 抓取這兩個核心演員
  const burgerBtn = document.querySelector('.burger-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');

  // 2. 監聽點擊事件
  burgerBtn.addEventListener('click', () => {
    // 靈魂密碼 toggle：如果沒有此類別就加上，有就移除
    burgerBtn.classList.toggle('is-active');
    mobileDrawer.classList.toggle('is-active');

    // 防禦性小貼心：當打開全畫面選單時，禁止網格背景繼續滾動
    if (mobileDrawer.classList.contains('is-active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  })

  document.addEventListener("click", function (e) {
    // 1. 確保抓到的是 <a> 按鈕
    const btn = e.target.closest("a.btn-nav-drawer");
    if (!btn) return;
    e.preventDefault();

    // 2. 定義當前點擊的相關元素
    const currentLi = btn.closest("li");
    const currentUl = currentLi.querySelector("ul");
    const currentImg = btn.querySelector("img");

    // 檢查目前點擊的這個選單是不是已經打開了
    const isOpen = currentUl.classList.contains("-on");

    // 3. 【排他功能】找出畫面上所有「已經打開」的子選單（假設你的 HTML class 是這個）
    // 這裡用 .nav-btn-child-list.-on 抓出所有正在顯示的選單
    document.querySelectorAll(".nav-btn-child-list.-on").forEach(function (openUl) {
      // 如果這個開著的選單，不是我們目前點擊的這一個，就把牠關掉
      if (openUl !== currentUl) {
        openUl.classList.remove("-on");

        // 順便把那個被關掉選單的箭頭改回向下
        const otherBtn = openUl.closest("li").querySelector("a.btn-nav-drawer");
        if (otherBtn) {
          otherBtn.querySelector("img").src = "../images/arrow_down.svg";
        }
      }
    });

    // 4. 處理自己目前的開關與箭頭切換
    if (isOpen) {
      currentUl.classList.remove("-on");
      currentImg.src = "../images/arrow_down.svg";
    } else {
      currentUl.classList.add("-on");
      currentImg.src = "../images/arrow_up.svg";
    }
  });

  // login 燈箱
  const loginModalBtn = document.querySelectorAll(".js-login-modal-btn");
  const loginModal = document.getElementById("loginModal");
  const closeBtn = document.getElementById("closeBtn");

  loginModalBtn.forEach(btn =>
    { btn.addEventListener("click", function() {
      loginModal.showModal();
    });}
  )
  

  closeBtn.addEventListener("click", function () {
    loginModal.close();
  })

})