let swiper = $('#swiper')
let swiperContainer = $('.swiperWrapper')
let btnPrev = $('#prev')
let btnNext = $('#next')
let imgs = $('.swiperLi')
let indexes = $('.idx > span')

let imgWid = swiperContainer.width();
let curIdx = 0;
let transX;

for(let item of imgs){
  let offsetX = $(item).position().left;
  console.log(offsetX)
}

setActiveIdx(curIdx);

btnNext.on('click',()=>{
  curIdx < imgs.length - 1 ? curIdx += 1 : curIdx = imgs.length -1;
  transX = $(imgs[curIdx]).position().left;
  transX< imgs.length * imgWid?
    translateSlide(transX) : null;
  setActiveIdx(curIdx);
})

btnPrev.on('click',()=>{
  curIdx > 0 ? curIdx -= 1 : curIdx = 0;
  transX = $(imgs[curIdx]).position().left;
  transX > -1?
    translateSlide(transX) : null;
  setActiveIdx(curIdx);
})

function setActiveIdx(index){
  $(indexes[index]).addClass('active')
    .siblings()
    .removeClass('active')
}

indexes.on('click',(e)=>{
  let curEl = $(e.currentTarget);
  let allChildren = curEl.parent().children();
  for(let ent of allChildren){
    if(curEl[0] === ent){
      curIdx = allChildren.index(ent);
      setActiveIdx(curIdx)
      transX = $(imgs[curIdx]).position().left;
      transX< imgs.length * imgWid && transX > -1?
        translateSlide(transX) : null;
    }
  }
})

function translateSlide(transX){
  swiper.css({
    transform:`translateX(-${transX}px)`,
    transition:'transform .5s'
  })
}