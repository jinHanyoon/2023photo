window.addEventListener("DOMContentLoaded", function () {
  $('nav').addClass('on')


  setTimeout(function () {
    intro()
    },1500)

function intro(){
  $('.sec01_name').addClass('on')
  $('.sec01_info').addClass('on')
}






  gsap.to("#sec02",{
    scrollTrigger: {
     trigger: "#sec02",
     start: "top top",
    //  scrolltop 
     end:'3000 bottom',
     pin:true,
     //position:fix
     scrub: true,
    },
   })

   gsap.to(".sec02_img",{
    scrollTrigger: {
     trigger: "#sec02",
     start: "top top",
    //  scrolltop 
     end:'bottom bottom',
     pin:false,
     //position:fix
     scrub: false,
     markers:false,
    },
  opacity:1,
  })
  


   gsap.to(".sec02_subtext",{
    scrollTrigger: {
     trigger: "#sec02",
     start: "top top",
    //  scrolltop 
     end:'bottom bottom',
     pin:false,
     //position:fix
     scrub: false,
     markers:false,
    },
  opacity:1,
  })
  


gsap.to(".sec02_maintext01 >p",{
  scrollTrigger: {
   trigger: "#sec02",
   start: "top top",
  //  scrolltop 
   end:'bottom bottom',
   pin:false,
   //position:fix
   scrub: false,
   markers:false,
  },
  y:0,
})

gsap.to(".sec02_maintext02 >p",{
  scrollTrigger: {
   trigger: "#sec02",
   start: "top top",
  //  scrolltop 
   end:'bottom bottom',
   pin:false,
   //position:fix
   scrub: false,
   markers:false,
  },
  y:0,
  delay:0.2,
})

gsap.to(".sec02_maintext03 >p",{
  scrollTrigger: {
   trigger: "#sec02",
   start: "top top",
  //  scrolltop 
   end:'bottom bottom',
   pin:false,
   //position:fix
   scrub: false,
   markers:false,
  },
  y:0,
  delay:0.4,

})

gsap.to(".sec02_maintext04 >p",{
  scrollTrigger: {
   trigger: "#sec02",
   start: "top top",
  //  scrolltop 
   end:'bottom bottom',
   pin:false,
   //position:fix
   scrub: false,
   markers:false,
  },
  y:0,
  delay:0.6,

})



 gsap.to("#sec03",{
  scrollTrigger: {
   trigger: "#sec03",
   start: "top top",
  //  scrolltop 
   end:'8000 bottom',
   pin:true,
   //position:fix
   scrub: true,
  },
 })



// // 가로 스크롤
  
  // const fixThis_1 = $(".container01_fix > section");
  // let this1Total = 0;

  // for (let i = 0; i < fixThis_1.length; i++) {
  //   this1Total += $(".container01_fix> section").eq(i).width();
  // }
  //       // 임시값 X innerWidth === 100vw;
  // //  임시값 X innerHeight === 100vh

  // /*  임시값 주석 해제 X slide,click event section */

  // gsap.to(".container01_fix", {
  //   x: -(this1Total - innerWidth),
  //   scrollTrigger: {
  //     trigger: ".container01_x",
  //     start: "top top",
  //     // end: () => "+=" + 300,
  //     end: "bottom bottom",
  //     pin: true,
  //     pinSpacing: false,
  //     scrub: true,
  //     // markers: true
  //   },
  // });


  /* scroll event section */
  
// $(window).scroll(function () {
//   var scrollTop = $(window).scrollTop();
//   $(".posNum").text(scrollTop);
  container.addListener((e) => {
    let scrollTop = container.scrollTop;
    $(".posNum").html(scrollTop);

    
    if(scrollTop >= 2000 && 3500){
      $('.sec03_text li:nth-child(1)').addClass('on')
      $('.sec03_color01').addClass('on')
    }else{
      $('.sec03_color01').removeClass('on')

    }if(scrollTop >=3500 && 5000){
      $('.sec03_text li:nth-child(1)').removeClass('on')
      $('.sec03_text li:nth-child(2)').addClass('on')
      $('.sec03_color02').addClass('on')

    }else{
      $('.sec03_text li:nth-child(2)').removeClass('on')
      $('.sec03_color02').removeClass('on')

    }if(scrollTop >=5000 && 6500){
      $('.sec03_text li:nth-child(2)').removeClass('on')
      $('.sec03_text li:nth-child(3)').addClass('on')
      $('.sec03_color03').addClass('on')

    }else{
      $('.sec03_text li:nth-child(3)').removeClass('on')
      $('.sec03_color03').removeClass('on')


    }if(scrollTop >=6500 && 8000){
      $('.sec03_text li:nth-child(3)').removeClass('on')
      $('.sec03_text li:nth-child(4)').addClass('on')
      $('.sec03_color04').addClass('on')

    }else{
      $('.sec03_text li:nth-child(4)').removeClass('on')
      $('.sec03_color04').removeClass('on')
    }
    


}); //end

$('body').on("mousewheel", function (event, delta) {
  if (delta > 0) {  //마우스 휠을 올렸을때
    $('nav').addClass('on')
  } else if (delta < 0) {//마우스 휠을 내렸을때
   $('nav').removeClass('on')
  }
});
$('.nav_list >li:nth-child(1)').click(function() {
  scrollToSection('#sec01');
});

$('.nav_list >li:nth-child(2)').click(function() {
  scrollToSection('#sec02');
});
$('.nav_list >li:nth-child(3)').click(function() {
  scrollToSection('#sec03');
});
//가상 스크롤값 초기화
function scrollToSection(sectionId) {
var sectionOffsetTop = $(sectionId).offset().top;
container.scrollTo(0, sectionOffsetTop, 1000);
}

})