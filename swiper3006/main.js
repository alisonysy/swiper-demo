let swiper = $('#swiper')
let swiperContainer = $('.swiperWrapper')
let btnPrev = $('#prev')
let btnNext = $('#next')
let imgs = $('.swiperLi')

let imgWid = swiperContainer.width();
let curIdx = 0;
let curX = 0;
let transX;

for(let item of imgs){
  let offsetX = $(item).position().left;
  console.log(offsetX)
}

btnNext.on('click',()=>{
  curIdx < imgs.length - 1 ? curIdx += 1 : curIdx = imgs.length -1;
  transX = $(imgs[curIdx]).position().left;
  transX<2001?
    swiper.css({
      transform:`translateX(-${transX}px)`,
      transition:'transform .5s'
    }) : null;
})

btnPrev.on('click',()=>{
  curIdx > 0 ? curIdx -= 1 : curIdx = 0;
  transX = $(imgs[curIdx]).position().left;
  transX > -1?
    swiper.css({
      transform:`translateX(-${transX}px)`,
      transition:'transform .5s'
    }) : null;
})