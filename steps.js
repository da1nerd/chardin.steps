$(document).ready(function() {
	var startBtn = $('.start-btn');
	var nextBtn = $('.next-btn').hide();
	var prevBtn = $('.prev-btn').hide();
	
	var stepsController = $('body').chardinjssteps();
  
  $('body').on('chardinJs:start', function() {
    startBtn.hide();
    nextBtn.show();
    prevBtn.show();
  });
  
  $('body').on('chardinJs:stop', function() {
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
