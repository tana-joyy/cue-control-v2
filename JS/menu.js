document.addEventListener('DOMContentLoaded', function () {
  // 價目表風琴列
  const serviceTitle = document.getElementsByClassName("service-title");
  const serviceContent =document.getElementsByClassName("service-content");
  const noticeBtn = document.getElementsByClassName("notice-btn");

  
  for (let i = 0; i < serviceTitle.length; i++) {
    
    serviceTitle[i].addEventListener('click', function () {
      // console.log('12');
      serviceContent[i].style.setProperty('--content-height', serviceContent[i].scrollHeight + 'px');
      serviceContent[i].classList.toggle('-on');
      noticeBtn[i].classList.toggle('-on');
    })

  };





});