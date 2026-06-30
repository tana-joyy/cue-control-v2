// 🗃️ 服務區塊的中央資料庫
const serviceData = {
    "booking": {
        title: "球檯預約",
        desc: "提供線上即時查位與選桌服務。無論是系統快速配桌，或是依您的需求進行客製化挑選，都能快速輕鬆預約，讓您優雅出發免等待。",
        img: "./images/bubble-booking.png",
        link: "booking.html"
    },
    "hardware": {
        title: "專業球具",
        desc: "館內提供國際賽事級公桿與專屬巧克，每把球桿皆由專業職人定期維護、校正直線度，讓熱愛撞球的你，不需要自備球具也能發揮完美球感。",
        img: "./images/bubble-hardware.png",
        link: "about.html"
    },
    "course": {
        title: "撞球課程",
        desc: "由國家級教練與明星球員組成的師資團隊，不論你是零基礎想體驗出桿樂趣，還是想精進下塞與做球細節，都能為您量身打造專屬進階課表。",
        img: "./images/bubble-course.png",
        link: "coaches.html"
    },
    "space": {
        title: "明亮空間",
        desc: "打破傳統球館昏暗偏見，採用全面高解析無影照明系統與高檔都會清水模裝潢，完美呈現球檯視野，讓每一次擊球都是極致的視覺美學享受。",
        img: "./images/bubble-space.png",
        link: "about.html"
    },
    "no-smoking": {
        title: "全館禁菸",
        desc: "我們嚴格落實全館 100% 禁菸規範，並配置醫療級強效空氣清淨與全熱交換機系統，徹底隔絕任何異味，全家大小都能安心享受健康的運動空間。",
        img: "./images/bubble-no-smoking.png",
        link: "about.html"
    },
    "food": {
        title: "複合餐飲",
        desc: "特別特聘星級主廚團隊跨界合作，提供現調精品現泡茶飲、時髦輕食與現做熱騰騰主食，讓你在熱血切磋之餘，舌尖也能享受最精緻的都會款待。",
        img: "./images/bubble-food.png",
        link: "menu.html"
    }
};


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
                    otherBtn.querySelector("img").src = "./images/arrow_down.svg";
                }
            }
        });

        // 4. 處理自己目前的開關與箭頭切換
        if (isOpen) {
            currentUl.classList.remove("-on");
            currentImg.src = "./images/arrow_down.svg";
        } else {
            currentUl.classList.add("-on");
            currentImg.src = "./images/arrow_up.svg";
        }
    });


    // compare 卡片點擊翻面動畫

    // 1. 選取卡片元素
    const card = document.getElementsByClassName('compare-card');
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('click', function () {
            this.classList.toggle('flipped');
        })

    };

    // service 泡泡區
    const bubbles = document.querySelectorAll('.bubble');

    const cardImg = document.querySelector('.js-service-img');
    const cardTitle = document.querySelector('.js-service-title');
    const cardDesc = document.querySelector('.js-service-desc');
    const cardLink = document.querySelector('.js-service-link');

    bubbles.forEach(bubble => {
        bubble.addEventListener("click", function () {
            bubbles.forEach(b =>
                b.classList.remove('active'))
            this.classList.add('active');

            const serviceKey = this.dataset.service;

            if (serviceData[serviceKey]) {
                const data = serviceData[serviceKey];

                cardImg.src = data.img;
                cardImg.alt = data.title;
                cardTitle.textContent = data.title;
                cardDesc.textContent = data.desc;
                cardLink.href = data.link;
            }

        })
    })

    const defaultActive = document.querySelector('.item.bubble.active');
    if (defaultActive) {
        defaultActive.click();
    }



    // 登入燈箱
    const loginModalBtn = document.querySelectorAll(".js-login-modal-btn");
    const loginModal = document.getElementById("loginModal");
    const closeBtn = document.getElementById("closeBtn");

    loginModalBtn.forEach(btn => {
        btn.addEventListener("click", function () {
            loginModal.showModal();
        });
    }
    )


    closeBtn.addEventListener("click", function () {
        loginModal.close();
    })



})


