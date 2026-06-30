document.addEventListener("DOMContentLoaded", function () {
  // 判斷是不是支援hover的裝置
  const isTouchDevice = window.matchMedia('(hover: none)').matches;

  if (isTouchDevice) {
    const coachName = document.querySelectorAll('.coach-name-box');

    coachName.forEach(coach => {
      coach.addEventListener('click', function () {
        // console.log('123')
        // alert('123');
        const coachArea = this.closest('div.coach-area');
        const coachMiniCard = coachArea.querySelector('div.coach-mini-card');

        // console.log(coachMiniCard);
        coachMiniCard.classList.toggle('-on');
      }
      )
    });
  }


});