document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('buttonId');
  const navigationList = document.getElementById('navigationListId');
  const collapseClassOpen = 'open';
  function collapseMenu() {
      if (navigationList.classList.contains(collapseClassOpen)) {
          navigationList.classList.remove(collapseClassOpen);
      } else {
          navigationList.classList.add(collapseClassOpen);
      }
  }
  button.onclick = () => {
      collapseMenu();
  }
})

$(document).ready(() => {
  $('#portfolioSliderId').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      infinite:true,
      autoplay: true,
      responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 5,
            }
          },
          {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              }
          },
          {
              breakpoint: 950,
              settings: {
                slidesToShow: 3,
              }
          },
          {
              breakpoint: 610,
              settings: {
                slidesToShow: 2,
              }
          },
          {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
              }
          }
      ]
  });
});