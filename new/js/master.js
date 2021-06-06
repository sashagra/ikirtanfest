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
		items : 4,
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
				
	// Subscription Form Validation
	   $("#subscribeForm input").focus(function() {
		  $(this).prev("label").hide();
		  $(this).prev().prev("label").hide();	 		 	
	  });
	   
	  $("#subscribeForm").submit(function() {
		  // validate and process form here
		  var emailSubscribe = $("#emailSubscribe").val();
		  if (emailSubscribe == "") {
				$('#emailSubscribe').addClass('reqfld');
				$('<span class="error" style="display:none; color:#ffc107"><i class="fa fa-exclamation-circle"></i></span>').insertBefore('#emailSubscribe').fadeIn(400);
				$("#emailSubscribe").focus(function() {  $('#emailSubscribe').removeClass('reqfld');  $(this).prev().fadeOut(400);});
				return false;
		   } else if(emailSubscribe.indexOf('@') == -1 || emailSubscribe.indexOf('.') == -1) {
				$('#emailSubscribe').addClass('reqfld');
				$('<span class="error" style="display:none;  color:#ffc107">Invalid!</span>').insertBefore('#emailSubscribe').fadeIn(400);
				$("#emailSubscribe").focus(function() {  $('#emailSubscribe').removeClass('reqfld');  $(this).prev().fadeOut(400);});
				return false;
		  }
	  
		  var sub_security = $("#sub-security").val();
			  
		  var dataString = '&emailSubscribe=' + emailSubscribe + '&sub-security=' + sub_security;
		  
		  $.ajax({
			type: "POST",
			url: "form/subscribe.php",
			data: dataString,
			success: function() {
			  $("#subscribeForm .form-row").hide();
			  $('#subscribeForm').append("<div id='subscribesuccess' class='alert alert-success' style='border:#"+sub_successBox_Border_Color+" 1px "+sub_successBoxBorderStyle+"; background:#"+sub_successBoxColor+";' ></div>");
			  $('#subscribesuccess').html("<h5 class='text-center' style='color:#"+sub_textColor+";'><i class='fa fa-check-circle'></i> "+sub_submitMessage+"</h5>")
			  .hide().delay(300)
			  .fadeIn(1500);
			  
			  $('#subscribeForm .form-row').delay(6000).slideUp('fast');
			  
			}
		  });
		  return false;
	});	
  
	// Contact Form
	$('.loader').hide();
	 
	// $("#contact_form").submit(function() {
	// 	// validate and process form here
	// 	var name = $("#name").val();
	// 		  if (name == "") {
	// 		  $('#name').addClass('reqfld');
	// 		  $('<span class="error" style="display:none; margin-top:0px;">Required!</span>').insertBefore('#name').fadeIn(400);
	// 		  $("#name").focus(function() {  $('#name').removeClass('reqfld');  $(this).prev().fadeOut(400);});
	// 		  return false;
	// 	} 
		  
	// 	var phone = $("#phone").val();
	// 		  if (phone == "") {
	// 		  $('#phone').addClass('reqfld');
	// 		  $('<span class="error" style="display:none;">Required!</span>').insertBefore('#phone').fadeIn(400);
	// 		  $("#phone").focus(function() {  $('#phone').removeClass('reqfld');  $(this).prev().fadeOut(400);});
	// 		  return false;
	// 	}
		
	// 	var email = $("#email").val();
	// 	if (email == "") {
	// 		  $('#email').addClass('reqfld');
	// 		  $('<span class="error" style="display:none;">Required!</span>').insertBefore('#email').fadeIn(400);
	// 		  $("#email").focus(function() {  $('#email').removeClass('reqfld');  $(this).prev().fadeOut(400);});
	// 		  return false;
	// 	 } else if(email.indexOf('@') == -1 || email.indexOf('.') == -1) {
	// 		  $('#email').addClass('reqfld');
	// 		  $('<span class="error" style="display:none;">Invalid Email Address!</span>').insertBefore('#email').fadeIn(400);
	// 		  $("#email").focus(function() {  $('#email').removeClass('reqfld');  $(this).prev().fadeOut(400);});
	// 		  return false;
	// 	}
		
	// 	var comment = $("#comment").val();
	// 		  if (comment == "") {
	// 		  $('#comment').addClass('reqfld');
	// 		  $('<span class="error" style="display:none;">Required!</span>').insertBefore('#comment').fadeIn(400);
	// 		  $("#comment").focus(function() {  $('#comment').removeClass('reqfld');  $(this).prev().fadeOut(400);});
	// 		  return false;
	// 	}
		
	// 	$('#contact_form').animate({opacity:'0.3'}, 500);
  
	// 	var security = $("#security").val();
  
	// 	var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone + '&comment=' + comment + '&security=' + security;
		

		//alert (dataString);return false;
		// $.ajax({
		//   type: "GET",
		//   url: "http://127.0.0.1:8080/message/" + "kirtanform()safasfa()asdasd()sads",
		// //   data: dataString,
		//   success: function() {
		// 	alert('OK')
		// 	$("#contact_form").animate({opacity:'1'}, 500);
		// 	$('.loader').hide();
		// 	$("<div id='success' class='alert alert-success' style='border:#"+successBox_Border_Color+" 1px "+successBoxBorderStyle+"; background:#"+successBoxColor+";' ></div>").insertAfter('#contact_form');
		// 	$('#contact_form').slideUp(300);
		// 	$('#success').html("<h5 style='color:#"+textColor+";'>"+submitMessage+"</h5><p style='color:#"+textColor+";'>"+successParagraph+"</p>")
		// 	.hide().delay(300)
		// 	.fadeIn(1500);
		//   }
		// });
	// 	return false;
	// });
});