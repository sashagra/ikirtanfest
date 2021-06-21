// JavaScript Document
// Author Name: Saptarang
// Author URI: http://www.saptarang.org
// Themeforest: http://themeforest.net/user/saptarang?ref=saptarang
// Creation Date: 8 April, 2015

jQuery( document ).ready( function( $ ) {
"use strict";
	
	//Preloader
	$(window).load(function() {
		$('#preloader').fadeOut();
		$('body').delay(350).css({'overflow':'visible'});
	})
  
	// Top Arrow
	$(window).scroll(function() {
		if ($(window).scrollTop() > 1000) { 
			$('a.top').fadeIn('slow'); 
		} else { 
			$('a.top').fadeOut('slow');
		}
	});
	  
	// Fixed Top bar
	$(window).on('scroll', function() {
	var navHeight = '100';
	   if ($(window).scrollTop() > navHeight) {
		   $('#top').addClass('visible');
	   }
	   else {
		   $('#top').removeClass('visible');
	   }
	});
  
	// SLIDER
	$('#slides').superslides({
	  animation: 'fade',
	  play:7000, // change value if you want to increase or decrese speed
	  animation_speed:800 // change time interval during slide change
	});
	
	// Counter
	var endDate = "August 17, 2021 17:00:00";
	
	$('.countdown.styled').countdown({
	  date: endDate,
	  render: function(data) {
		  var years = this.leadingZeros(data.years, 2);
		  if (years != '00') {
		$(this.el).html("<div><span>" + this.leadingZeros(data.years, 2) + " </span><strong>лет</strong></div><div><span>" + this.leadingZeros(data.days, 3) + " </span><strong>дней</strong></div><div><span>" + this.leadingZeros(data.hours, 2) + "  </span><strong>часов</strong></div><div><span>" + this.leadingZeros(data.min, 2) + "</span><strong>минут</strong></div><div><span>" + this.leadingZeros(data.sec, 2) + " </span><strong>секунд</strong></div>");
		  } else {
		  $(this.el).html("<div><span>" + this.leadingZeros(data.days, 3) + " </span><strong>дней</strong></div><div><span>" + this.leadingZeros(data.hours, 2) + "  </span><strong>часов</strong></div><div><span>" + this.leadingZeros(data.min, 2) + "</span><strong>минут</strong></div><div><span>" + this.leadingZeros(data.sec, 2) + " </span><strong>секунд</strong></div>");
		  }
	  }
	});
	
	// Artist and lineup carousel
	$("#celebs, #upcoming").owlCarousel({
		items : 4,
		lazyLoad : true,
		navigation : true,
    	navigationText : ["&#xf104;","&#xf105;"],
		pagination :false,
		itemsDesktop : [1199,3],
    	itemsTablet: [998,2],
    	itemsMobile : [479,1]
	});
	
	$("#sponsorOwl").owlCarousel({
		items : 3,
		lazyLoad : true,
		navigation : true,
    	navigationText : ["&#xf104;","&#xf105;"],
		pagination : false,
		itemsDesktop : [1199,3],
    	itemsTablet: [998,2],
    	itemsMobile : [479,1]
	});
	  
	// Testimonial
	 $('.carousel').carousel({
	interval: 8000 // change value to set speed of slideshow
	});
	  
	// Collapse menu for small devices
	var winWidth = $('body').width();
	if (winWidth <= 767) {
		
		// Add attribs to menu
		$('#menu .navbar-nav li a').attr('data-toggle', 'collapse');
		$('#menu .navbar-nav li a').attr('data-target', '#menu');
		
		// smooth page Scroll
		$('nav a[href^=#], a.top[href^=#], a.smooth[href^=#]').on("click", function(event) {
		  event.preventDefault();
		  $('html,body').animate({
		  scrollTop: $(this.hash).offset().top - 580},
		  1000);	
		});
		
	} else {
	
		// smooth page Scroll
		$('nav a[href^=#], a.top[href^=#], a.smooth[href^=#]').on("click", function(event) {
		  event.preventDefault();
		  $('html,body').animate({
		  scrollTop: $(this.hash).offset().top - 50},
		  1000);	
		});
		
	}
				
  
	// Contact Form
	$('.loader').hide();
	 
});