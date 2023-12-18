function zero(value) {
	if(value < 10) {
		value = "0" + value;
	}
	return value;
}

var currentDate = new Date();

document.querySelector('.menu__date-day').innerHTML = zero(currentDate.getDate());
document.querySelector('.menu__date-date').innerHTML = zero(currentDate.getMonth() + 1) + " | " + currentDate.getFullYear();

$('.intro__slider').slick({
    arrows: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4000,
	variableWidth: true,
	slickPause: false,
	swipe: false,

	customPaging : function(slider, i) {
        var title = $(slider.$slides[i]).data('title');
        var number = $(slider.$slides[i]).data('index');
        return '<a class="intro__nav"><span class="intro__nav-number">' + zero(number) + '</span><span class="intro__nav-title">' + title + '</span></a>';
    },
});

$(".surf__map-dot").on('click', function(){
		$(this).toggleClass("surf__map-dot--active").closest('.surf__map-loc').find(".surf__map-card").toggleClass("surf__map-card--active");	
});

$(document).ready(function() {
  $('.surf__map-dot').on('click', function() {
    $('.surf__map-card--active').not($(this).siblings()).removeClass('surf__map-card--active');
    $('.surf__map-dot--active').not($(this)).removeClass('surf__map-dot--active');
    $(this).siblings('.surf__map-card--active').show();
  });
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.surf__map-dot').length && !$(event.target).closest('.surf__map-card').length) {
      $('.surf__map-card--active').removeClass('surf__map-card--active');  
      $('.surf__map-dot--active').removeClass('surf__map-dot--active');  
    }
  });
});

$('.view-surf__slider').slick({
  arrows: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	focusOnSelect: true,
	variableWidth: true,
});

var shore = {
  0: "Airlie Beach | Australia",
  1: "Maradhoo Beach | Maldives",
  2: "Amatola Beach | South Africa",
  3: "Vieux Boucau | France",
  4: "Guaruga Beach | Brazil",
  5: "Carribean Beach | Cuba",
  6: "Malibu Beach | USA",
  7: "Hawaii Beach | USA"
};

var airline = {
  0: "Virgin Australia",
  1: "Virgin Blue",
  2: "Virgin Galactic",
  3: "Virgin Atlantic",
  4: "Virgin Atlantic",
  5: "Virgin America",
  6: "Virgin America",
  7: "Virgin America"
};

var bookFlight = {
  0: {
  	destination: "Queensland Australia",
  	distance: "9,430 Miles",
  	time: "16 Hours 55 Minutes",
  	pricing: "$1,976 USD"
  },
  1: {
  	destination: "Male Maldives",
  	distance: "9,557 Miles",
  	time: "17 Hours",
  	pricing: "$1,998 USD"
  },
  2: {
  	destination: "Amatola Africa",
  	distance: "8,562 Miles",
  	time: "15 Hours 5 Minutes",
  	pricing: "$1,790 USD"
  },
  3: {
  	destination: "Hossegor France",
  	distance: "4,760 Miles",
  	time: "8 Hours 30 Minutes",
  	pricing: "$1149 USD"
  },
  4: {
  	destination: "Guaruga Brazil",
  	distance: "4,544 Miles",
  	time: "8 Hours 5 Minutes",
  	pricing: "$1,119 USD"
  },
  5: {
  	destination: "Havana Cuba",
  	distance: "1,518 Miles",
  	time: "2 Hours 40 Minutes",
  	pricing: "$534 USD"
  },
  6: {
  	destination: "Malibu USA",
  	distance: "229 Miles",
  	time: "25 Minutes",
  	pricing: "$80 USD"
  },
  7: {
  	destination: "Hawaii USA",
  	distance: "2,544 Miles",
  	time: "4 Hours 30 Minutes",
  	pricing: "$783 USD"
  }
};

$('.travel__slider').slick({
  arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
});

$('.travel__slider').on('afterChange', function(event, slick, currentSlide){
  var index = $('.travel__slider').find('.slick-current').data('index');
  $('.travel__subtitle').text(shore[index]);
  $('.travel__airline-title').text(airline[index]);

  $("#destination").text(bookFlight[index].destination);
  $("#distance").text(bookFlight[index].distance);
  $("#time").text(bookFlight[index].time);
  $("#pricingFlight").text(bookFlight[index].pricing);
});

$(".travel__slider .slick-arrow").on('click', function(){
		$(".travel__plane").toggleClass("travel__plane--hide");	
});

var resort = {
  0: "Auberge | Australia",
  1: "Gili Lankanfushi | Maldives", 
  2: "Raddison Blue Hotel | South Africa", 
  3: "Royal-Riviera | France", 
  4: "The Falls Hotel | Brazil", 
  5: "La Villa Teresa | Cuba", 
  6: "Malibu Beach Inn | USA", 
  7: "Royal Kona Resort | USA" 
};

var rating = {
  0: 5,
  1: 5,
  2: 5,
  3: 5,
  4: 4,
  5: 4,
  6: 4,
  7: 5
};

//for shop section
var stars = {
  0: 5,
  1: 5,
  2: 4,
};

var bookSleep = {
	0: {
  	resort: "Auberge<br>Australia",
  	pricing: "$349 USD"
  },
  1: {
  	resort: "Gili Lankanfushi<br>Maldives",
  	pricing: "$695 USD"
  },
  2: {
  	resort: "Raddison Blue<br>South Africa",
  	pricing: "$412 USD"
  },
  3: {
  	resort: "Royal-Riviera<br>France",
  	pricing: "$320 USD"
  },
  4: {
  	resort: "The Falls Hotel<br>Brazil",
  	pricing: "$511 USD"
  },
  5: {
  	resort: "La Villa Teresa<br>Cuba",
  	pricing: "$187 USD"
  },
  6: {
  	resort: "Malibu Beach Inn<br>USA",
  	pricing: "$364 USD"
  },
  7: {
  	resort: "Royal Kona Resort<br>USA",
  	pricing: "$436 USD"
  },
}

$('.sleep__slider').slick({
  arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
});

function change(index, number) {
  $('#rating').html(""); //clean
  $('#shopRating').html("");

  for (let i = 1; i <= number; i++) {
    const $imgSleep = $('<img src="images/star.svg" class="sleep__rating-svg">');
    $('#rating').append($imgSleep);
    //for shop section
    const $imgShop = $('<img src="images/star.svg" class="shop__descr-svg">');
    //for shop section
    $('#shopRating').append($imgShop);
  }
}

$('.sleep__slider').on('afterChange', function(event, slick, currentSlide){
  var index = $('.sleep__slider').find('.slick-current').data('index');
  $('#resort').text(resort[index]);

  const number = rating[index];
  change(index, number);

  $("#resortSleep").html(bookSleep[index].resort);
  $("#pricingSleep").text(bookSleep[index].pricing);
});

$('#nightRemove').on('click', function() {
  let current = parseInt($('#night').text(), 10);
  if (current > 1) {
    current--;
    $('#night').text(current);
  }
});
  
$('#nightAdd').on('click', function() {
  let current = parseInt($('#night').text(), 10);
  if (current < 30) {
    current++;
    $('#night').text(current);
  }
});

$('#guestRemove').on('click', function() {
  let current = parseInt($('#guest').text(), 10);
  if (current > 1) {
    current--;
    $('#guest').text(current);
  }
});
  
$('#guestAdd').on('click', function() {
  let current = parseInt($('#guest').text(), 10);
  if (current < 20) {
    current++;
    $('#guest').text(current);
  }
});

var shop = {
	0: {
  	name: "North Nugget TT Surfboard",
  	dollars: "$799",
  	coins: "99"
  },
  1: {
  	name: "Softboard 5'9 Consignment Surfboard",
  	dollars: "$1099",
  	coins: "00"
  },
  2: {
  	name: "The ISLAND Funboard 5'9",
  	dollars: "$449",
  	coins: "99"
  },
};


$('.shop__slider').slick({
  arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
});

$(".shop__slider-btn").on('click', function(){
	$(this).toggleClass("shop__slider-btn--active").closest('.shop__slider-addition').find(".shop__slider-descr").toggleClass("shop__slider-descr--active");	
});

$(document).ready(function() {
  $('.shop__slider-btn').on('click', function() {
    $('.shop__slider-descr--active').not($(this).siblings()).removeClass('shop__slider-descr--active');
    $('.shop__slider-btn--active').not($(this)).removeClass('shop__slider-btn--active');
    $(this).siblings('.shop__slider-descr--active').show();
  });
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.shop__slider-btn').length && !$(event.target).closest('.shop__slider-descr').length) {
      $('.shop__slider-descr--active').removeClass('shop__slider-descr--active');  
      $('.shop__slider-btn--active').removeClass('shop__slider-btn--active');  
    }
  });
});

$('.shop__slider').on('afterChange', function(event, slick, currentSlide){
  var index = $('.shop__slider').find('.slick-current').data('index');
  $('#shopName').text(shop[index].name);
  $('#shopDollars').text(shop[index].dollars);
  $('#shopCoins').text(shop[index].coins);

  const number = stars[index];
  change(index, number);
});

 $(".nav__item").on("click", function (event) {
  var id  = $(this).attr('href').substring(1);
  var el = $("#" + id);
  if (el.length) {
        el[0].scrollIntoView({ behavior: 'smooth' });
      }
});

document.querySelectorAll('.nav__item').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

var currentSection = 0;

$('.section-arrow').on("click", function (event) {
  console.log($(window).height());
  console.log($(window).scrollTop());
	if (currentSection < $('section').length - 1) {
    currentSection++;
  } else {
    currentSection = 0;
  }
 $('section').eq(currentSection).get(0).scrollIntoView({ behavior: 'smooth' });
});