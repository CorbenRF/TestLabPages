import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'


$(".accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
    icons: false,
  });

  var swiper = new Swiper(".mySwiper", {
    // setWrapperSize: true,
    slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchSlidesVisibility: true,
    breakpoints: {
      1240: {
          slidesPerView:3,
          spaceBetween: 30,
      },
      480: {
          slidesPerView:2,
          spaceBetween: 24,
      },
      0: {
        slidesPerView:1,
        spaceBetween: 10,
    },

  }
  });

  // burger func

  let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav__service');
let menuLinks = menu.querySelectorAll('.nav__link');
burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav--active');

    document.body.classList.toggle('stop-scroll');
  }
)
menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('nav--active');
    document.body.classList.remove('stop-scroll');

  })
})

// burger func end
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTd2lwZXIgZnJvbSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9zd2lwZXJAMTEvc3dpcGVyLWJ1bmRsZS5taW4ubWpzJ1xyXG5cclxuXHJcbiQoXCIuYWNjb3JkaW9uXCIpLmFjY29yZGlvbih7XHJcbiAgICBoZWlnaHRTdHlsZTogXCJjb250ZW50XCIsXHJcbiAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICBpY29uczogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyXCIsIHtcclxuICAgIC8vIHNldFdyYXBwZXJTaXplOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAxMjQwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OjMsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICB9LFxyXG4gICAgICA0ODA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6MixcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjQsXHJcbiAgICAgIH0sXHJcbiAgICAgIDA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OjEsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIH0sXHJcblxyXG4gIH1cclxuICB9KTtcclxuXHJcbiAgLy8gYnVyZ2VyIGZ1bmNcclxuXHJcbiAgbGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKTtcclxubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19zZXJ2aWNlJyk7XHJcbmxldCBtZW51TGlua3MgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2xpbmsnKTtcclxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcclxuICBmdW5jdGlvbiAoKSB7XHJcbiAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLS1hY3RpdmUnKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LS1hY3RpdmUnKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3N0b3Atc2Nyb2xsJyk7XHJcbiAgfVxyXG4pXHJcbm1lbnVMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlci0tYWN0aXZlJyk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi0tYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3N0b3Atc2Nyb2xsJyk7XHJcblxyXG4gIH0pXHJcbn0pXHJcblxyXG4vLyBidXJnZXIgZnVuYyBlbmQiXX0=
