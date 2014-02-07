$(document).ready(function() {
	var startBtn = $('.start-btn');
	var nextBtn = $('.next-btn').hide();
	var prevBtn = $('.prev-btn').hide();
	
	var stepsController = $('body').chardinstepsjs({
    //click_to_dismiss: false,
	  //reset_on_resume: true
	});
  
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
