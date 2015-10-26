$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });



// =====================================	
//	 Inizialize Header Owl carousel 
// =====================================	
	
	var owl = $("#goods-carousel");

	owl.owlCarousel({
		items : 6,
		autoHeight : true,	
		pagination : true,	
		paginationNumbers: true,
		rewindSpeed : 3000,
		paginationSpeed : 900,
		slideSpeed : 600,		
		itemsDesktop: [1700,5],			
		itemsDesktop: [1512,4],	
      	itemsDesktopSmall: [1196,3],
      	itemsTablet: [760,2],
      	itemsMobile: [480,2]
	});

	owl.on("mousewheel", ".owl-wrapper", function (e) {

		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next-btn").click(function(){		
		owl.trigger("owl.next");
	});
	$(".prev-btn").click(function(){
		owl.trigger("owl.prev");
	});

	




// =========================
// Dropdown filter in header 
// =========================

function close_list(param) {

	$(param).closest('li').find('ul').css({'display':'none'});
	$(param).removeClass('open');
	$(param).addClass('close');

	$(param).css({
		transform : 'rotate(360deg)'		
	});
}

function open_list(param){

	$(param).closest('li').find('ul').css(
	{
		'display':'block',
		"top": '27px',
		"left" : '0'
	});

	$(param).css({
  		transform : "rotate(180deg)"
	});

	$(param).removeClass('close');
	$(param).addClass('open');
}


$("body").on("click", ".open-list",  function(event) {
	event.preventDefault(); 
	
	$(this).closest('li').find('ul').css(
	{
		'display':'block',
		"top": '27px',
		"left" : '0'
	});

	$(this).closest('li').find('#sparrow-list').css({
		transform : "rotate(180deg)"
	});

	$(this).removeClass('open-list');
	$(this).addClass('close-list');

});


$("body").on("click", ".close-list",  function(event) {
	event.preventDefault(); 
	
	$(this).closest('li').find('ul').css(
	{
		'display':'none'
	});

	$(this).closest('li').find('#sparrow-list').css({
		transform : "rotate(360deg)"
	});

	$(this).removeClass('close-list');
	$(this).addClass('open-list');

});


$("body").on("click", ".close",  function() {

	open_list(this);

});

$("body").on("click", ".open",  function() {
	
	close_list(this);	


});


/*
==============================
Dropdown Sortierung
==============================
*/


$("body").on("click", ".sh__open",  function(){


$(this).closest('li').find('ul').animate({		
		
		"height": 'show'
		
	}, {
    	duration: 1100
});


	$(this).css({
  		transform : "rotate(180deg)"
	});

	$(this).removeClass('sh__open');
	$(this).addClass('sh__close');

});

$("body").on("click", ".sh__close",  function() {

	$(this).closest('li').find('ul').animate({		
		"height": 'hide'
		
	}, {
    	duration: 1100
	});


	$(this).removeClass('sh__close');
	$(this).addClass('sh__open');

	$(this).css({
		transform : 'rotate(360deg)'		
	});


});


/*
======================================
Dropdown menu filtren for mobile 640px
-Main filters mobile-
======================================
*/


$("body").on("click", "#down-f",  function(event) {
	event.preventDefault();

	$(this).closest('li').find('ul').animate({		
		
		"height": 'show'
		
	}, {
    	duration: 1000
	});

	$(this).closest('li').find('ul').css({
		'top':'4.3em'
	})

	$(this).closest('li').find('span#down-f').css({
  		transform : "rotate(180deg)"
	});


	$(this).addClass('close_filter');

})

$("body").on("click", ".main__filters_mobile .close_filter",  function(event) {
	event.preventDefault();

	$(this).closest('li').find('ul').animate({		
		
		"height": 'hide'
		
	}, {
    	duration: 1100
	});

	$(this).closest('li').find('span#down-f').css({
  		transform : "rotate(360deg)"
	});

	$(this).removeClass('close_filter');

	
})





/*
==============================
Dropdown in header aside
==============================
*/

$("body").on("click", "#am-sub__list",  function(event) {
	event.preventDefault(); 

	$(this).addClass('close_list');

	$(this).closest('li').find('ul.am-sub__list').animate({		
		"height": 'show'
		
	}, {
    	duration: 1500
	});

});

$("body").on("click", ".a-menu__item .close_list",  function(event) {
	event.preventDefault(); 

	$(this).removeClass('close_list');

	$(this).closest('li').find('ul.am-sub__list').animate({		
		"height": 'hide'
		
	}, {
    	duration: 1500
	});

});


/*
==============================
Close filter's
==============================
*/

$("body").on("click", "#close-all-f",  function(event) {
	event.preventDefault(); 
	$(this).closest('ul').css({'display' : 'none'});
});




$("body").on("click", "#close-f",  function(event) {
	event.preventDefault(); 
	$(this).closest('li').css({'display' : 'none'});
});


/*
==============================
Slider in header
==============================
*/

$(function() {
    $( "#preis-diapazon" ).slider({
      range: true,
      min: 5,
      max: 500,
      values: [ 50, 500 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "€"+ui.values[0]);
			$( "#amount-max" ).val( "€"+ui.values[ 1 ] );
		}
    });
        $( "#amount" ).val( $( "#preis-diapazon" ).slider( "values", 0 ) + "€");

        $( "#amount-max" ).val( $( "#preis-diapazon" ).slider( "values", 1 ) + "€");
  

  	});



/*
==============================
Slider in mobile version menu
==============================
*/

$(function() {
    $( "#preis-diapazon_mob" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 50, 500 ],
		slide: function( event, ui ) {
			$( "#kat__amount" ).val( "€"+ui.values[0]);
			$( "#kat__amount-max" ).val( "€"+ui.values[ 1 ] );
		}
    });
        $( "#kat__amount" ).val( $( "#preis-diapazon_mob" ).slider( "values", 0 ) + "€");

        $( "#kat__amount-max" ).val( $( "#preis-diapazon_mob" ).slider( "values", 1 ) + "€");
  

  	});


/*
==========================================
Dropdown menu filtren in mobile version
==========================================
*/


$("body").on("click", "#down-f",  function(event) {
	event.preventDefault();

	$(this).addClass("down-f_open");

	$('.mob__sub_menu #mob__kat-menu').css({'display':'none'});

	$('.mob__sub_menu #mob__filter-menu').css({'display':'block'});

	$(this).closest('li').find('#list-sparrow').css({
  		transform : "rotate(180deg)"
	});


	$(".mob__sub_menu").animate({		
		"height": 'show'
		
	}, {
    	duration: 1500
	});
	


});

$("body").on("click", ".down-f_open",  function(event) {
	event.preventDefault();

	$(this).removeClass("down-f_open");	

	$(".mob__sub_menu").animate({		
		"height": 'hide'
		
	}, {
    	duration: 1500
	});

	$(this).closest('li').find('#list-sparrow').css({
  		transform : "rotate(360deg)"
	});
	
});

/* Open / Close Kategorien in 640px */


$("body").on("click", "#down-k",  function(event) {
	event.preventDefault();

	$(this).addClass("down-k_open");

	$('.mob__sub_menu #mob__filter-menu').css({'display':'none'});

	$('.mob__sub_menu #mob__kat-menu').css({'display':'block'});

	$(this).closest('li').find('#list-sparrow').css({
  		transform : "rotate(180deg)"
	});


	$(".mob__sub_menu").animate({		
		"height": 'show'
		
	}, {
    	duration: 1500
	});
	


});

$("body").on("click", ".down-k_open",  function(event) {
	event.preventDefault();

	$(this).removeClass("down-k_open");	

	$(".mob__sub_menu").animate({		
		"height": 'hide'
		
	}, {
    	duration: 1500
	});

	$(this).closest('li').find('#list-sparrow').css({
  		transform : "rotate(360deg)"
	});


});


/* Open / Close sub-menu in Kategorien >=640px */


$("body").on("click", "#mob__kat_child",  function(event) {
	event.preventDefault();

	$(this).addClass("kat_child__open");

	$(this).closest('li').find("ul").animate({		
		"height": 'show'		
	}, {
    	duration: 1500
	});
	


});

$("body").on("click", ".kat_child__open",  function(event) {
	event.preventDefault();

	$(this).removeClass("kat_child__open");	

	$(this).closest('li').find("ul").animate({				
		"height": 'hide'
		
	}, {
    	duration: 1500
	});

	


});





/*
===================================
Dropdown sub-menu in mobile version
===================================
*/
$("body").on("click", "#a__child_close",  function(event) {

	event.preventDefault();

	$(this).addClass("a__child_open");

	$(this).closest('li').find('ul').animate({		
		"height": 'show'
		
	}, {
    	duration: 1500
	});


});


$("body").on("click", ".a__child_open",  function(event) {

	event.preventDefault();

	$(this).removeClass("a__child_open");

	$(this).closest('li').find('ul').animate({		
		"height": 'hide'
		
	}, {
    	duration: 1500
	});


});


/*
=================================
Show / Hidden mobile header menu
=================================
*/


$("body").on("click", "#show-menu",  function(event) {

	event.preventDefault(); 

	$('.mob_sub__menu').animate({		
		"height": 'show'
		
	}, {
    	duration: 1500
	});

	$('#show-menu').addClass('menu-open');
	$('#show-menu').addClass('open_ico');
	$('#show-menu').removeClass('close-menu');

});

$("body").on("click", ".menu-open",  function(event) {

	event.preventDefault(); 

	$('.mob_sub__menu').animate({		
		"height": 'hide'
		
	}, {
    	duration: 1500
	});

	$('#show-menu').removeClass('menu-open');
	$('#show-menu').removeClass('open_ico');
	$('#show-menu').addClass('close-menu');

});


/*
====================================
Show / Hidden mobile header sub-menu
====================================
*/



$("body").on("click", "#damen_sub__list",  function(event) {

	event.preventDefault();

	$(this).addClass("sub__list_open");

	$('.damen__sub_list').css({'display':'block'});

	$('.damen__sub_list ul').animate({		
		"height": 'show'
		
	}, {
    	duration: 1500
	});


});


$("body").on("click", ".sub__list_open",  function(event) {

	event.preventDefault();

	$(this).removeClass("sub__list_open");

	$('.damen__sub_list ul').animate({		
		"height": 'hide'
		
	}, {
    	duration: 1500
	});

	

});



/*
===============================================
Show / Hidden mobile header sub-menu child menu
===============================================
*/


$("body").on("click", "#mob_sub_child",  function(event) {
	event.preventDefault();

	$(this).addClass("sub_child_open");

	$(this).closest('li').find('ul').animate({		
		"height": 'show'
		
	}, {
    	duration: 1500
	});


});


$("body").on("click", ".sub_child_open",  function(event) {

	event.preventDefault();

	$(this).removeClass("sub_child_open");

	$(this).closest('li').find('ul').animate({		
		"height": 'hide'
		
	}, {
    	duration: 1500
	});


});



/*
=================================
Show / Hidden star in content
=================================
*/

$('.p-image').hover(
	function(){
		$(this).closest('div.product').find('.p-whish').css({'display':'block'});
		$(this).closest('div.product').find('.p-image').css({'border-color':'rgb(215, 180, 105)'});
	},
	function(){
		$(this).closest('div.product').find('.p-whish').css({'display':'none'});
		$(this).closest('div.product').find('.p-image').css({'border-color':'#fff'});
	}
);

$('.p-whish').hover(
	function(){
		$(this).closest('div.product').find('.p-whish').css({'display':'block'});
		$(this).closest('div.product').find('.p-image').css({'border-color':'rgb(215, 180, 105)'});
	},
	function(){
		$(this).closest('div.product').find('.p-whish').css({'display':'none'});
		$(this).closest('div.product').find('.p-image').css({'border-color':'#fff'});
	}
);

$('.p-image').hover(
	function(){
		
		$(this).closest('div.product').find('.p-image').css({'border-color':'rgb(215, 180, 105)'});
	},
	function(){
		
		$(this).closest('div.product').find('.p-image').css({'border-color':'#fff'});
	}
);


$('.p-delete').hover(
	function(){
		
		$(this).closest('div.product').find('.p-image').css({'border-color':'rgb(215, 180, 105)'});
	},
	function(){
		
		$(this).closest('div.product').find('.p-image').css({'border-color':'#fff'});
	}
);



$('.fc-settings__label a').hover(
	function(){		
		$(this).closest('div.f-content__settings').find('div.fc-settings__icon').css({'background':'url("./img/icons/settings-active-icon.png") no-repeat'})
	},
	function(){
		$(this).closest('div.f-content__settings').find('div.fc-settings__icon').css({'background':'url("./img/icons/settings-icon.png") no-repeat'})
	}

);




/*
============================
Menu level 2 in Card product
============================
*/

$("body").on("click", "#am-child_list",  function(event) {

	event.preventDefault();

	$(this).addClass("a__sub_open");

	$(this).closest('li').find('ul').animate({		
		"height": 'show'
		
	}, {
    	duration: 1500
	});


});


$("body").on("click", ".a__sub_open",  function(event) {

	event.preventDefault();

	$(this).removeClass("a__sub_open");

	$(this).closest('li').find('ul').animate({		
		"height": 'hide'
		
	}, {
    	duration: 1500
	});


});





$("body").on("click", ".am-sub__list .am-sub_child__menu li a",  function(event) {

	event.preventDefault();

});


$('a#show-menu').hover(
	function(){
		$(this).find('img').attr('src', './img/menu-mob-hover.png');
	},
	function(){
		$(this).find('img').attr('src', './img/menu-mob.png');
	}
);


/* Show / Hide popup Newsletter */


	$(".newsletter").dialog({		
		autoOpen: false,
		dialogClass: 'fixed__dialog',
		draggable: false,
		modal: true,
		resizable: false,
		title: "Melde dich fur deinen personlichen Newsletter an",
		width: "820px"
	});

	$(".ui-dialog-titlebar-close").css({
	    'background-image': 'url(img/icons/close-icon.png)',
	    'width': '25',
	    'height': '25',
	    'background-repeat': 'no-repeat',
	    'background-position': 'center center'
	});

	$('.ui-icon').css('display','none');

	$("#fc-contact__input").click(function() {
		$(".newsletter").dialog("open");
	});


/* Show / Hide Newsletter - werfalten_Full popup */

	$(".newsletter-verfalten_full").dialog({
		autoOpen: false,
		dialogClass: 'fixed__dialog',
		draggable: false,
		modal: true,
		resizable: false,
		title: "Newsletter verwalten",
		width: "820px"
	});

	$(".ui-dialog-titlebar-close").css({
	    'background-image': 'url(img/icons/close-icon.png)',
	    'width': '25',
	    'height': '25',
	    'background-repeat': 'no-repeat',
	    'background-position': 'center center'
	});

	$('.ui-icon').css('display','none');

	$("#n-verwalten").click(function() {
		$(".newsletter-verfalten_full").dialog("open");
	});




/* Show / Hide Newsletter - werfalten popup */

	$(".newsletter-verfalten").dialog({
		autoOpen: false,
		dialogClass: 'fixed__dialog',
		draggable: false,
		modal: true,
		resizable: false,
		title: "Newsletter verwalten",
		width: "820px"
	});

	$(".ui-dialog-titlebar-close").css({
	    'background-image': 'url(img/icons/close-icon.png)',
	    'width': '25',
	    'height': '25',
	    'background-repeat': 'no-repeat',
	    'background-position': 'center center'
	});

	$('.ui-icon').css('display','none');

	$("#n-verwalten").click(function() {
		/*$(".newsletter-verfalten").dialog("open");*/
	});


/* Show / Hide Sale-Alarm einrichten popup */

	$(".sale-alarm__dialog").dialog({
		autoOpen: false,
		dialogClass: 'fixed__dialog',
		draggable: false,
		modal: true,
		resizable: false,
		title: "Sale-Alarm einrichten",
		width: "820px"
	});

	$(".ui-dialog-titlebar-close").css({
	    'background-image': 'url(img/icons/close-icon.png)',
	    'width': '25',
	    'height': '25',
	    'background-repeat': 'no-repeat',
	    'background-position': 'center center'
	});

	$('.ui-icon').css('display','none');

	$("#sale-alarm").click(function() {
		$(".sale-alarm__dialog").dialog("open");
	});





/* Show/hide Newsletter sub-menu */

$("body").on("click", "#popup_kat",  function(event) {
	event.preventDefault();

	$(this).closest('li').find('ul').css({
		'display':'block'
	});

	$(this).closest('li').find('span.nlf-category__close').css({
		transform : "rotate(180deg)"
	});



	$(this).addClass('open_kat');

});



$("body").on("click", ".open_kat",  function(event) {
	event.preventDefault();

	$(this).closest('li').find('ul').css({
		'display':'none'
	});

	$(this).closest('li').find('span.nlf-category__close').css({
		transform : "rotate(360deg)"
	});

	$(this).removeClass('open_kat');

});


$("body").on("click", "#popup_marken",  function(event) {

	event.preventDefault();

	$('body').find('ul.popup__marken_list').css({
		'display':'block'
	});

	$(this).closest('li').find('span.nlf-category__close').css({
		transform : "rotate(180deg)"
	});

	$(this).addClass('open_marken');

});

$("body").on("click", ".open_marken",  function(event) {
	event.preventDefault();

	$('body').find('ul.popup__marken_list').css({
		'display':'none'
	});

	$(this).closest('li').find('span.nlf-category__close').css({
		transform : "rotate(360deg)"
	});

	$(this).removeClass('open_marken');



});







/** Show / Hide header sub menu  **/





$('#damen_sub_menu').hover(

	function(){		
		$('#damen').addClass('item_after');
		$('#damen_sub_menu').css({'display':'block'});	
	},
	function(){		
		$('#damen').removeClass('item_after');
		$('#damen_sub_menu').css({'display': 'none'});			
	}

);

$('#kinder_sub_menu').hover(

	function(){		
		$('#kinder').addClass('item_after');
		$('#kinder_sub_menu').css({'display':'block'});	
	},
	function(){		
		$('#kinder').removeClass('item_after');
		$('#kinder_sub_menu').css({'display': 'none'});			
	}
);

$('#herren_sub_menu').hover(

	function(){		
		$('#herren').addClass('item_after');
		$('#herren_sub_menu').css({'display':'block'});	
	},
	function(){		
		$('#herren').removeClass('item_after');
		$('#herren_sub_menu').css({'display': 'none'});			
	}
);


$('#marken_sub_menu').hover(
	function(){		
		$('#marken').addClass('item_after');
		$('#marken_sub_menu').css({'display':'block'});	
	},
	function(){		
		$('#marken').removeClass('item_after');
		$('#marken_sub_menu').css({'display': 'none'});			
	}
);





$('a#damen').hover(
	function(){
		$('#damen').addClass('item_after');
		$('#damen_sub_menu').css({'display':'block'});	
	},
	function(){
		$('#damen').removeClass('item_after');
		$('#damen_sub_menu').css({'display': 'none'});			
	}
);


$('a#kinder').hover(
	function(){
		$('#kinder').addClass('item_after');
		$('#kinder_sub_menu').css({'display':'block'});	
	},
	function(){
		$('#kinder').removeClass('item_after');
		$('#kinder_sub_menu').css({'display': 'none'});			
	}

);


$('a#herren').hover(
	function(){
		$('#herren').addClass('item_after');	
		$('#herren_sub_menu').css({'display':'block'});
	},
	function(){
		$('#herren').removeClass('item_after');
		$('#herren_sub_menu').css({'display': 'none'});			
	}

);

$('a#marken').hover(
	function(){
		$('#marken').addClass('item_after');	
		$('#marken_sub_menu').css({'display':'block'});
	},
	function(){
		$('#marken').removeClass('item_after');
		$('#marken_sub_menu').css({'display': 'none'});			
	}

);






$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});



});
