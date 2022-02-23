
  const swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay:{// 자동실행
      delay:5000,//5초 대기후 이동
    },
  });

  const swiper2 = new Swiper(".new_pro", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination:{
          el: ".swiper-pagination",
          clickable: false,
        },
    breakpoints:{
    768
    : {
      slidesPerView: 4,
      spaceBetween: 0,
    }
  }
  });

  const swiper3 = new Swiper(".best_pro", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination:{
          el: ".swiper-pagination",
          clickable: false,
        },
    breakpoints:{
    768
    : {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
  });


  const btn = document.querySelector('#button');
  const btn2 = document.querySelector('#button2');

  btn.addEventListener('click', () => {
    document.querySelector('#leftslide').style.left = "0";
    document.querySelector('#button').style.display = "none";
    document.querySelector('#button2').style.visibility = "visible";
  });
  btn2.addEventListener('click', ()=> {
    document.querySelector('#leftslide').style.left = "-300px";
    document.querySelector('#button').style.display = "block";
    document.querySelector('#button2').style. visibility="hidden";
});    