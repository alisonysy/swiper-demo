let $slideWrap = $('#slideWrapper');
let $images = $('#slideWrapper').children('img');
let $buttons = $('#slideWindow>#menu>button');
let current = 0;

makeFakePic();
$slideWrap.css({transform:`translateX(-500px)`})
bindEvent();

let timer = setInterval(function(){
  goToSlide(current+1);
},2000)
$('#slideWindow').on('mouseenter',function(){
  window.clearInterval(timer);
}).on('mouseleave',function(){
  timer=setInterval(function(){
    goToSlide(current+1);
  },2000)
})

document.addEventListener('visibilitychange',function(){
  if(document.hidden){
    window.clearInterval(timer);
  }else{
    timer=setInterval(function(){
      goToSlide(current+1);
    },2000)
  }
})

function bindEvent(){
  $('#slideWindow>#menu').on('click','button',function(q){
    let $currentButton = $(q.currentTarget);
    let buttonIndex = $currentButton.index();
    goToSlide(buttonIndex);
  })
}


function goToSlide(buttonIndex){
  if(buttonIndex>$buttons.length - 1){
    buttonIndex = 0;
  }else if(buttonIndex<0){
    buttonIndex = $buttons.length -1;
  }
  if(current === 0 && buttonIndex === $buttons.length -1){
    $slideWrap.css({transform:`translateX(0px)`})
    .one('transitionend',function(){
      $slideWrap.hide().offset()
      $slideWrap.css({transform:`translateX(-${$buttons.length*500}px)`}).show()
    })
    current = buttonIndex;
  }else if(current === $buttons.length-1 && buttonIndex === 0){
    $slideWrap.css({transform:`translateX(-${($buttons.length+1)*500}px)`})
    .one('transitionend',function(){
      $slideWrap.hide().offset()
      $slideWrap.css({transform:`translateX(-${(buttonIndex+1)*500}px)`}).show()
    })
    current = buttonIndex;
  }else{
    $slideWrap.css({transform:`translateX(-${(buttonIndex+1)*500}px)`})
    current = buttonIndex;
  }  
}


function makeFakePic(){
  let $firstPic = $images.eq(0).clone(true)
  let $lastPic = $images.eq($images.length-1).clone(true)
  $slideWrap.append($firstPic); //does not work if using $images
  $slideWrap.prepend($lastPic); 
}