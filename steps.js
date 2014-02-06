$(document).ready(function() {
	var steps = $('.step').get().sort(function(a, b) {
	    return $(a).data("order") - $(b).data("order");
	});
	
	steps = $.map(steps, function(step, index) {
		return $(step);
	});
	
	var nextBtn = $('.next-btn').addClass('chardinjs-show-element');
	
	(function(nextBtn, stepList) {
		var steps = stepList;
		var cur = 0;
		
		function next() {
			if(cur < steps.length) {
				steps[cur].attr("data-intro", steps[cur].data("step"));
				if(cur > 0) {
					steps[cur-1].removeAttr("data-intro");
				}
				++cur;
			} else {
				steps[cur-1].removeAttr("data-intro");
				cur = 0;
				next();
			}
		}
		
		nextBtn.on('click', function(e) {
			e.preventDefault();
			
			next();
			
			$('body').chardinJs('reload');
		});
	})(nextBtn, steps);
});
