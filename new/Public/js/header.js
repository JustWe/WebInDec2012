/* Design by Jovi zhan */
 $(function(){
   $("#mytable tr:even").addClass("even");
   $("#mytable tr:odd").addClass("odd");
   $("#mytable2 tr:even").addClass("even");
   $("#mytable2 tr:odd").addClass("odd");
   $("#mytable3 tr:even").addClass("even");
   $("#mytable3 tr:odd").addClass("odd");
 });

  /* message*/
(function( $ )
	{
	$.fn.badger = function(badge, callback) 
		{
  		var badgerExists = this.find('#Badger').html();
  		
  		// Clear the badge
  		if(!badge)
  			{
  			if(badgerExists)
  				{ this.find('#Badger').remove(); }
  			}
  		else
  			{
			// Figuring out badge data
			var oldBadge = this.find('#Badge').text();
			if(badge.charAt(0)=='+')
				{ 
				if(isNaN(badge.substr(1)))
					{ badge = oldBadge + badge.substr(1); }
				else
					{ badge = Math.round(Number(oldBadge) + Number(badge.substr(1))); }
				}
			else if(badge.charAt(0)=='-')
				{ 
				if(isNaN(badge.substr(1)))
					{ badge = oldBadge - badge.substr(1); }
				else
					{ badge = Math.round(Number(oldBadge) - Number(badge.substr(1))); }
				}
				
				
			// Don't add duplicates
			if(badgerExists)
				{ this.find('#Badge').html(badge); }
			else
				{ this.append('<div class="badger-outter" id="Badger"><div class="badger-inner"><p class="badger-badge" id="Badge">'+badge+'</p></div></div>'); }
				
			// Badger text or number class
			if(isNaN(badge))
				{ this.find('#Badge').removeClass('badger-number').addClass('badger-text'); }
			else
				{ this.find('#Badge').removeClass('badger-text').addClass('badger-number'); }
			// Send back badge
			if(callback) { callback(badge); }
			}
		};
})( jQuery );
 /* login input*/
$(function(){
if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
};
})
function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}

  /*search box*/
function searchFocus() {
	var $this = $("#search_query");
	if ($this.val() == $this.attr('title')) {
		$this.val("");
		$("#search_btn").addClass("typing");
		$this.parent().addClass("highlight");
	} else if ($this.val() !== "" && $this.val() !== $this.attr('title')) {
		$("#search_btn").addClass("typing");
		$this.parent().addClass("highlight");
	}
}

function searchBlur() {
	var $this = $("#search_query");
	if ($this.val() == "") {
		$this.val($this.attr('title'));
		$("#search_btn").removeClass("typing");
		$this.parent().removeClass("highlight");
	} else {
		$("#search_btn").removeClass("typing");
		$this.parent().removeClass("highlight");
	}
}