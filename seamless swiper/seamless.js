var n = 1;
initial();


function initial(){
  var n = 1;
  $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter');
}

setInterval(() => {
  makeLeave(getImage(n))
    .one('transitionend',function(q){
      makeEnter($(q.currentTarget))
    });
  makeCurrent(getImage(n+1));
    n +=1
}, 3000);

function getImage(n){
  return $(`.images > img:nth-child(${x(n)})`)
}


function makeCurrent($node){
  return $node.removeClass('enter leave').addClass('current')
}

function makeLeave($node){
  return $node.removeClass('current enter').addClass('leave')
}

function makeEnter($node){
  return $node.removeClass('current leave').addClass('enter')
}

function x(n){
  if(n>3){
    n = n%3;
    if(n===0){
      n=3;
    }
  } // n = 1/2/3
  return n;
}
/*setTimeout(function(){
  $('.images>img:nth-child(1)').css({
    transform:'translateX(-100%)'
  })
  
  $('.images>img:nth-child(2)').css({
    transform:'translateX(-100%)'
  })

  $('.images>img:nth-child(1)').one('transitionend',function(x){
    $(x.currentTarget).addClass('right').css({transform:'none'})
  })

},2000)

setTimeout(function(){
  $('.images>img:nth-child(2)').css({
    transform:'translateX(-200%)'
  })
  
  $('.images>img:nth-child(3)').css({
    transform:'translateX(-100%)'
  })

  $('.images>img:nth-child(2)').one('transitionend',function(x){
    $(x.currentTarget).addClass('right').css({transform:'none'})
  })
},4000)

setTimeout(function(){
  $('.images>img:nth-child(3)').css({
    transform:'translateX(-200%)'
  })
  
  $('.images>img:nth-child(1)').css({
    transform:'translateX(-100%)'
  })

  $('.images>img:nth-child(3)').one('transitionend',function(x){
    $(x.currentTarget).addClass('right').css({transform:'none'})
  })
},6000)*/