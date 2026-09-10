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

})


