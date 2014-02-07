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
  //stepsController.options['click_to_dismiss'] = true;
  
  var stepList = $('.step-list');
  // NOTE: data-order could be anything (even an object),
  //       but just using numbers for right now.
  var stepTitles = {
    1 : 'My Rockin\' Title',
    2 : 'I am hungry',
    3 : 'Make me a sandwich',
    4 : 'Sudo make me a sandwich'
  };
  stepsController.steps().each(function(index, stepItems) {
    var order = stepItems[0].data("order");
    var title = stepTitles[order];
    $('<li>').addClass('step-item').text(title).on('click', function() {
      stepsController.goto(order);
    }).appendTo(stepList);
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
