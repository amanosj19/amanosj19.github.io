$(document).ready(function(){


    setTimeout(function(){
    	$('.default-modal-overlay').css({
    		'display':'flex',
    		'opacity':'1'
    	});
    	$('.default-modal').css({
    		'animation':'.5s modaldropdown ease',
    		'display':'flex'
    	});
    }, 1000000);

    $('#close-modal').click(function(){
    	$('.default-modal').css(
    		'animation','1s modalexit ease'
    	);
    	setTimeout(function(){
    		$('.default-modal-overlay').css({
    			'display':'none',
    			'opacity':'0'
    		});
    	}, 1000)
    });

    $('#checklist-nav-highlight').click(function(){
        $('#nav-check').css('background','#F36607');
        setTimeout(function(){
            $('#nav-check').css('background','transparent');
        }, 3000);
    });

    

});


