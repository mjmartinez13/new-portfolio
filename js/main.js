$(document).ready(function () {

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });


    $('a:nth-child(1)').click(function () {
      $('li:nth-child(1) a').addClass('active');
      $('li:nth-child(2) a, li:nth-child(3) a, li:nth-child(4) a').removeClass('active');

  });

  $('li:nth-child(2)').click(function () {
    $('li:nth-child(2) a').addClass('active');
    $('li:nth-child(1) a, li:nth-child(3) a, li:nth-child(4) a').removeClass('active');
  });

  $('li:nth-child(3)').click(function () {
    $('li:nth-child(3) a').addClass('active');
    $('li:nth-child(1) a, li:nth-child(2) a, li:nth-child(4) a').removeClass('active');
  });

  $('li:nth-child(4)').click(function () {
    $('li:nth-child(4) a').addClass('active');
    $('li:nth-child(1) a, li:nth-child(2) a, li:nth-child(3) a').removeClass('active');
  });



  $('.dicerace').hover(function () {
    $('.dicerace img').css({
      'transition': 'all .2s ease-in',
      'transform': 'scale(1.10)'
    });
    $('.dicerace-about').css({
      'animation-duration': '2s',
      'opacity': '1'});
  }, function () {
    $('.dicerace img').css({
      'transition': 'all .2s ease-in',
      'transform': 'scale(1)'
    });
    $('.dicerace-about').css({
      'animation-duration': '2s',
      'opacity': '0'});
  });

  $('.birthday').hover(function () {
    $('.birthday img').css({
      'transition': 'all .2s ease-in',
      'transform': 'scale(1.10)'
    });
    $('.birthday-about').css({
      'animation-duration': '2s',
      'opacity': '1'});
  }, function () {
    $('.birthday img').css({
      'transition': 'all .2s ease-in',
      'transform': 'scale(1)'
    });
    $('.birthday-about').css({
      'animation-duration': '2s',
      'opacity': '0'});
  });

  $('.world-foods').hover(function () {
    $('.world-foods img').css({
      'transition': 'all .2s ease-in',
      'transform': 'scale(1.10)'
    });
    $('.world-foods-about').css({
      'animation-duration': '2s',
      'opacity': '1'});
  }, function () {
    $('.world-foods img').css({
      'transition': 'all .2s ease-in',
      'transform': 'scale(1)'
    });
    $('.world-foods-about').css({
      'animation-duration': '2s',
      'opacity': '0'});
  });

  $('.pristine').hover(function () {
    $('.pristine img').css({
      'transition': 'all .2s ease-in',
      'transform': 'scale(1.10)'
    });
    $('.pristine-about').css({
      'animation-duration': '2s',
      'opacity': '1'});
  }, function () {
    $('.pristine img').css({
      'transition': 'all .2s ease-in',
      'transform': 'scale(1)'
    });
    $('.pristine-about').css({
      'animation-duration': '2s',
      'opacity': '0'});
  });


  // setInterval(rotateText, 3000);
    let currentString = "Mac User";
    let text = $('.text-switch');
    let randomText = ["Mac User", "Tech Enthusiast", "Front-end Developer", "Problem Solver"];
    setInterval(function () {
      let oneText = randomText[Math.floor(Math.random()*randomText.length)];

      if (currentString === randomText) {
        let newText = randomText[Math.floor(Math.random()*randomText.length)];
        currentString = newText;
        text.html(newText);
      }else {
        currentString = oneText;
        text.html(oneText);
      }
    }, 3000);





});
