$(document).ready(function(){



	setTimeout(function(){
		$('.loader-overlay').css({'opacity':'0','transition':'.3s'});
		setTimeout(function(){
			$('.loader-overlay').css('display','none');
		},300);
	},0);


	AOS.init({
      offset: 100,
      duration: 1500,
      easing: 'ease-in-out-sine',
      delay: 2500,
    });

    setTimeout(function(){
    	$('.default-modal-overlay').css({
    		'display':'flex',
    		'opacity':'1'
    	});
    	$('.default-modal').css({
    		'animation':'.5s modaldropdown ease',
    		'display':'flex'
    	});
    }, 70000000000000);

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
    })

    var navBar = document.querySelector("nav-container");

    psp = window.pageYOffset;
	  window.onscroll = function() {
		  var csp = window.pageYOffset;
		  	if(psp > csp) {
		  		navBar.style.top = "0px";
	  	} else{
	  		navBar.style.top = "-200px";
  		}
	  }


      function myFunction() {
            var input, filter, ul, li, a, i, txtValue;
            input = document.getElementById("search-input");
            filter = input.value.toUpperCase();
            ul = document.getElementById("myUL");
            li = ul.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }






});
