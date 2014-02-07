$(document).ready(function() {
	var startBtn = $('.start-btn');
	var nextBtn = $('.next-btn').hide();
	var prevBtn = $('.prev-btn').hide();
  
  $('.step').on('click', function() {
    // The "goto" method accepts any element (that has a data-order), 
    //  or any value that data-order can contain (number, string, etc)
    stepsController.goto(this); 
  });
	
	var stepsController = $('body').chardinstepsjs({
    // override settings here
    //click_to_dismiss: false,
	  //reset_on_resume: true
	});
  
  // can also override the settings programmatically like so:
  // stepsController.options['click_to_dismiss'] = true;
  
  $('body').on('chardinStepsJs:start', function() {
    startBtn.hide();
    nextBtn.show();
    prevBtn.show();
  });
  
  $('body').on('chardinStepsJs:stop', function() {
    startBtn.show();
    nextBtn.hide();
    prevBtn.hide();
  });
	
	startBtn.on('click', function(e) {
		e.preventDefault();
		stepsController.start();
	});
	nextBtn.on('click', function(e) {
		e.preventDefault();
		stepsController.next();
	});
	prevBtn.on('click', function(e) {
		e.preventDefault();
		stepsController.prev();
	});
});
