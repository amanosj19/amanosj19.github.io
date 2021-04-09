$(document).ready(function(){

	// 
	// 
	// First section of javaScript File - Things to do when page loads and reuasable elements accross several pages implementation
	// 
	// 


	// Reusable Loader
	$('#loader-placeholder').html(`
		<div class="loader-overlay">
			<div class="loader-container">
			<div class="loader-title">
			<p id="loading-text">Page is Loading...</p>
			</div>
				<div class="tri" id="tri1">△</div>
				<div class="tri" id="tri2">▽</div>
			</div>
			<div class="creator-point">
				<p>Website Presentation Made By Shannon</p>
			</div>
		</div>
	`);


	if(localStorage.getItem('initialvisit') == 'done'){
		// Shows Loading animation for non-initial opening - takes load time plus 2500ms to finish
		localStorage.setItem('fastload', 'true');
		if(localStorage.getItem('fastload') == 'true'){
			$('.loader-overlay').css({'opacity':'0','transition':'.3s'});
			setTimeout(function(){
				$('.loader-overlay').css('display','none');
				$('.delay').css('opacity','1');
			}, 300);
		} else{
			setTimeout(function(){
				$('.loader-overlay').css({'opacity':'0','transition':'.3s'});
				setTimeout(function(){
					$('.loader-overlay').css('display','none');
					$('.delay').css('opacity','1');
				},300);
			},1000);
		}		
	} else{
		// Shows Loading animation for initial opening - takes load time plus 3000ms to finish
		setTimeout(function(){
			$('#loading-text').html('First load per session');
			$('.loader-overlay').css({'opacity':'0','transition':'.3s'});
			setTimeout(function(){
				$('.loader-overlay').css('display','none');
				$('.delay').css('opacity','1');
			},300);
		},3000);
		localStorage.setItem('theme', 'dark')
	}
	// Setting the initial visit as done nonetheless
	localStorage.setItem('initialvisit', 'done');
	

	// Detecting whether the user has set theme before and set theme accordingly
	if(localStorage.getItem('theme') == 'light'){
	 	$('body,html').toggleClass("light-theme");
	 	$('#theme-btn').html("Dark Theme");
	}

	// Reusable Navigation Menu
	$('#nav-placeholder').html(`
		<div class="nav-container">
			<div class="nav-header">
				<h1 class="nav-title" id="nav-home-link">Christchurch Boys' High School</h1>
			<div class="search-bar-container">
				<div class="search-button">
				<img src="media/search-icon-light.png">
				</div>
				<input type="text" name="#" id="search-input" placeholder="Search this site">
			</div>
			<h3>Contact | 0800 123 456</h3>
			<img id="logo" src="media/logo.jpg">
		</div>
			<div class="nav-bar">
				<div class="burger" id="burger-btn">
	   	    		<div class="bar1"></div>
		   	 		<div class="bar2"></div>
		   	 		<div class="bar3"></div>
	    		</div>
				<a href="index.html">Home</a>
				<a href="english.html">English</a>
				<a href="math.html">Math</a>
				<a href="science.html">Science</a>
				<a href="additional-facts.html">Additional Facts</a>
				<a href="javascript:void(0)" id="nav-check">Your Checklist</a>
				<a href="javascript:void(0)" style="float: right;" id="theme-btn">Light Theme</a>
			</div>
		</div>
	`);
	// Reusable Search Results
	  $('#search-results-placeholder').html(`
	  	<div class="search-results-container">
			<div class="search-results">
				<br>
				<p id="go-back-fs-btn">← &nbsp Go Back</p>
				<h1><b id="search-for-what">Showing All Results : </b></h1>
				<p id="close-search">Close Search <b>&times;</b></p>
				<div class="result-counter">
					<div class="result-link">
						<p class="result-link-display">cbhs.school.nz/english.html</p>
						<a href="english.html" class="result-link-click">CBHS English Page - Information Cards to help you learn English</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div>
					<div class="result-link">
						<p class="result-link-display">cbhs.school.nz/math.html</p>
						<a href="math.html" class="result-link-click">CBHS Math Page - Information Cards to help you learn Math</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div>
					<div class="result-link">
						<p class="result-link-display">cbhs.school.nz/science.html</p>
						<a href="science.html" class="result-link-click">CBHS Science Page - Information Cards to help you learn Science</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div>
					<div class="result-link">
						<p class="result-link-display">cbhs.school.nz/facts.html</p>
						<a href="facts.html" class="result-link-click">CBHS Additional Facts - Read Additional Facts (For more academically advanced)</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div>
					<div class="result-link">
						<p class="result-link-display">cbhs.school.nz/sources.html</p>
						<a href="sources.html" class="result-link-click">Global Sources for this Website</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div>
					<div class="result-link">
						<p class="result-link-display">https://www.cbhs.school.nz/</p>
						<a href="https://www.cbhs.school.nz/" class="result-link-click">Christchurch Boys' High School | Educating Fine Young Men</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div>
					<div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div>
					<div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div><div class="result-link">
						<p class="result-link-display">https://intranet.cbhs.school.nz/start/?g=s</p>
						<a href="https://intranet.cbhs.school.nz/start/?g=s" class="result-link-click">CBHS Intranet Start Page</a>
						<p class="result-description">loremsd fg hs hfdhjfd ghfhuitrbfj ffjf dgfhds hfhj fds hfr tfhjw gerf dgfxhj gdhjv gdyu gfvyhut rgehfd gfdyhs gfhj fgfdhj vgyhfdgshfjds gsyf dgshfyugfhjs fyswrdhshfjs grfhjsbfdshj rfgj</p>
					</div>
				</div>
			</div>
			<div class="search-website-description-container">
				<div class="description-header">
					<div>
						<h1>CBHS Education</h1>
						<p>Online Website</p>
					</div>
					<img src="media/logo.jpg">
				</div>
				<div class="description-link">
					<a href="index.html">Click to open Website Homepage</a>
				</div>
				<div class="description-description">
					CBHS Education is a quick and easy place to find up to date information on certain subjects, like English, Math, and Science, there are all compulsary subjects. There are also tons of other information for the academically advanced students, as well as links to other websites that offer great information and resources to learn something new, take coding for example.
				</div>
				<div class="description-details">
					<p><b>Date of Launch: </b>5/04/2021</p>
					<p><b>Web Developer: </b>Shannon Amano</p>
					<p><b></b></p>
					<p><b></b></p>
				</div>
			</div>
		</div>
	  `);

	$('#external-nav-placeholder').html(`
		<div class="external-nav-overlay">
			<div class="external-nav-container">
				<div class="external-nav-content">
					<div class="external-nav-header">
						<h1>CBHS Education</h1>
						<p id="close-external-nav">&times;</p>
					</div>
					<br><br><br><br>
					<b>General Links</b>
					<a href="index.html">Home</a>
					<a href="english.html">English</a>
					<a href="math.html">Math</a>
					<a href="science.html">Science</a>
					<a href="facts.html">Additional Facts</a>
					<a href="sources.html">Global Sources</a>
					<div class="default-split-section" id="external-split"></div>
					<b>Functions</b>
					<a href="#">External Link</a>
					<a href="#">External Link</a>
					<a href="#">External Link</a>
					<div class="default-split-section" id="external-split"></div>
					<b>External Links</b>
					<a href="#">External Link</a>
					<a href="#">External Link</a>
					<a href="#">External Link</a>
					<br><br><br>
				</div>
			</div>
		</div>
		`);

	  // Reusable Footer
	  $('#footer-placeholder').html(`
	  	<br><br><br><br><br><br>
	  	<button onclick="$(document).scrollTop(0)" id="back-to-top"><p><i class="arrow up"></i></p></button>
	  	<footer>
			<p>Copyright &copy; Shannon. A, 2021</p>
			<div class="footer-flexbox">
				<div>
					<h3>Current Website Links</h3>
					<a href="#">link</a>
					<a href="#">link</a>
					<a href="#">link</a>
				</div>
				<div>
					<h3>External Website Links</h3>
					<a href="#">link</a>
					<a href="#">link</a>
					<a href="#">link</a>
				</div>
				<div>
					<h3>JavaScript Buttons</h3>
					<a href="#">Activate Modal</a>
					<a href="#">Adtivate </a>
					<a href="#">link</a>
				</div>
			</div>
		</footer>
	  `);

	  $('#notification-placeholder').html(`
	  	<div class="theme-notification">
			<p id="theme-change-text">You changd the theme</p>
			<button type="button">OK</button>
			<a href="#" class="default-hyperlink">Learn More</a>
		</div>
	  	`);

	  $('#global-checklist-placeholder').html(`
	  	<div class="global-checklist-container">
			<p id="close-global-checklist">&times;</p>
			<div class="global-checklist-header">
				<h1>Your Checklist - <b class="percentage-placeholder">20%</b></h1>
				<h3>Check off what you have done when navigating through the website. Don't worry, it will save even you go to another page. The checklist will reset after you restart you browser or clear your browsers cache.</h3>
			</div>
			<div class="global-checklist-flex">
			 			<div class="global-checklist-row-one">
			 				<h3>Pages</h3>
							<label class="global-checklist">Homepage
							    <input type="checkbox" class="check-home" checked>
							    <span class="global-checkmark" id="checked"></span>
							</label>
							<label class="global-checklist">English
							    <input type="checkbox" class="check-english">
							    <span class="global-checkmark"></span>
							</label>
							<label class="global-checklist">Math
							    <input type="checkbox" class="check-math">
							    <span class="global-checkmark"></span>
							</label>
							<label class="global-checklist">Science
							    <input type="checkbox" class="check-science">
							    <span class="global-checkmark"></span>
							</label>
							<label class="global-checklist">Additional Facts
							    <input type="checkbox" class="check-facts">
							    <span class="global-checkmark"></span>
							</label>
							<label class="global-checklist">Global Sources
							    <input type="checkbox" class="check-sources">
							    <span class="global-checkmark"></span>
							</label>
				 		</div>
				 		<div class="global-checklist-row-two">
				 			<h3>JS Functions</h3>
				 			<label class="global-checklist">Checklist
							    <input type="checkbox" class="check-check" checked>
							    <span class="global-checkmark" id="checked"></span>
							</label>
							<label class="global-checklist">Dark Theme / Light Theme
							    <input type="checkbox" class="check-theme">
							    <span class="global-checkmark"></span>
							</label>
							<label class="global-checklist">Burger Menu
							    <input type="checkbox" class="check-burger-menu">
							    <span class="global-checkmark"></span>
							</label>
							<label class="global-checklist">Search Function
							    <input type="checkbox" class="check-search">
							    <span class="global-checkmark"></span>
							</label>
				 		</div>
			 		</div>
			 		<div class="completion-ani-container">
			 			 <div class="completion-ani">
			 			 	<span class="com-checkmark">
							    <div class="com-checkmark_stem"></div>
							    <div class="com-checkmark_kick"></div>
							</span>
			 			 </div>
			 			 <div class="restart-check-container">
			 			 	<div class="restart-check-wrap">
			 			 		<button class="restart-check" class="default-button">Restart Checklist</button>
			 			 	</div>
			 			 </div>		
			 		</div>
			 		<p><b style="color: red;">* </b>Complete the checklist to see a short animation at the end</p>
			 	</div>
		</div>
	  	`)

	  // 
	  // 
	  // Second Section of JavaScript File - JavaScript Functions
	  // 
	  // 


	  // Filtering for Search Option
	  $("#search-input").on("keyup", function() {
	  	$('#search-for-what').html('Live Search Results for : "'+$(this).val()+'"');
	  	var value = $(this).val().toLowerCase();
	    if(value.length != 0){
	    	$(".result-link").filter(function() {
		    	$(this).toggle($(this).text().toLowerCase().indexOf(value) > 0)
		    });
	    } else{
	    	value = "a";
	    	$('#search-for-what').html('Showing All Results : ');
		   $(".result-link").filter(function() {
		    	$(this).toggle($(this).text().toLowerCase().indexOf(value) > 0)
		    });
	    }
	  });

	  // Opening the Search results when user clicks on search bar
	  $("#search-input").focus(function(){
	  	$(".search-results-container").css('display','block');
	  	$('.root').css('display','none');
	  	$(document).scrollTop(0)
	  })
	  // Closing the search results when user click on close button
	  $('#go-back-fs-btn').click(closeSearch);
	  $('#close-search').click(closeSearch);
	  function closeSearch(){
	  	$(".search-results-container").css('display','none');
	  	$('.root').css('display','block');
	  }
	  // Going back to home page when user clicks on header title
	  $('#nav-home-link').click(function(){
	  	window.open('index.html', '_self');
	  });
	  // Changing the theme when user click on 'Light Theme' or 'Dark Theme' button.
	  $('#theme-btn').click(function(){
	  	if(localStorage.getItem('theme') == 'dark'){
	  		localStorage.setItem('theme', 'light');
	  		$('body,html').toggleClass("light-theme");
	  		$('#theme-btn').html("Dark Theme");
	  		$('.theme-notification').css({'display':'block'});
	  		$('#theme-change-text').html('Light Theme is now enabled on all pages');
	  		setTimeout(function(){
	  			$('.theme-notification').css({'opacity':'1','transform':'translate(0, 0)','transition':'.5s'});
	  		}, 10);
	  	} else{
	  		localStorage.setItem('theme','dark');
	  		$('body,html').toggleClass("light-theme");
	  		$('#theme-btn').html("Light Theme")
	  		$('.theme-notification').css({'display':'block'});
	  		$('#theme-change-text').html('Dark Theme is now enabled on all pages');
	  		setTimeout(function(){
	  			$('.theme-notification').css({'opacity':'1','transform':'translate(0, 0)','transition':'.5s'});
	  		}, 10)
	  	}
	  });

	  // Closing the theme notification when user clicks 'OK'
	  $('.theme-notification button').click(function(){
	  	$('.theme-notification').css({'opacity':'0','transform':'translate(100px, 0)','transition':'.5s'});
	  	setTimeout(function(){
	  		$('.theme-notification').css({'display':'none'});
	  	}, 500)
	  });

	// Opening External Navigation
	$('#burger-btn').click(function(){
    	openExternalNav();
   	});
   	function openExternalNav(){
   		$('.external-nav-overlay').css('display','block');
   		setTimeout(function(){
   			$('.external-nav-overlay').css('width','100%');
    		$('.external-nav-container').css('width','365px');
   		}, 10)
    	setTimeout(function(){
    		$('.external-nav-content').css('opacity','1');
    	}, 300)
   	}


	// Closing External Navigation
	$('#close-external-nav').click(closeExternalNav);
	window.onclick = function(event) {
		if (event.target == document.querySelector('.external-nav-overlay')) {
			closeExternalNav();
		}
	}
	function closeExternalNav(){
		$('.external-nav-content').css('opacity','0');
		setTimeout(function(){
			$('.external-nav-overlay').css('width','0');
			$('.external-nav-container').css('width','0');
		}, 200)
		setTimeout(function(){
			$('.external-nav-overlay').css('display','none');
		}, 500)
	}

	// Back to Top button
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
	  if ($(window).scrollTop() > 100) {
	    $('#back-to-top').css('display','block');
	  } else {
	    $('#back-to-top').css('display','none');
	  }
	}

	// Checklist - with localStorage
	// English
	if(localStorage.getItem('check_english') == 'true'){
		$('.check-english').prop('checked',true);
	}
	$('.check-english').click(function(){
		if(localStorage.getItem('check_english') == 'true'){
			localStorage.setItem('check_english','false');
			$('.check-english').prop('checked',false);
		} else{
			localStorage.setItem('check_english','true');
			$('.check-english').prop('checked',true);
		}
		checkCheckFunction();
	});

	// Math
	if(localStorage.getItem('check_math') == 'true'){
		$('.check-math').prop('checked',true);
	}
	$('.check-math').click(function(){
		if(localStorage.getItem('check_math') == 'true'){
			localStorage.setItem('check_math','false');
			$('.check-math').prop('checked',false);
		} else{
			localStorage.setItem('check_math','true');
			$('.check-math').prop('checked',true);
		}
		checkCheckFunction();
	});

	// Science
	if(localStorage.getItem('check_science') == 'true'){
		$('.check-science').prop('checked',true);
	}
	$('.check-science').click(function(){
		if(localStorage.getItem('check_science') == 'true'){
			localStorage.setItem('check_science','false');
			$('.check-science').prop('checked',false);
		} else{
			localStorage.setItem('check_science','true');
			$('.check-science').prop('checked',true);
		}
		checkCheckFunction();
	});

	// Additional Facts
	if(localStorage.getItem('check_facts') == 'true'){
		$('.check-facts').prop('checked',true);
	}
	$('.check-facts').click(function(){
		if(localStorage.getItem('check_facts') == 'true'){
			localStorage.setItem('check_facts','false');
			$('.check-facts').prop('checked',false);
		} else{
			localStorage.setItem('check_facts','true');
			$('.check-facts').prop('checked',true);
		}
		checkCheckFunction();
	});

	// Global Sources
	if(localStorage.getItem('check_sources') == 'true'){
		$('.check-sources').prop('checked',true);
	}
	$('.check-sources').click(function(){
		if(localStorage.getItem('check_sources') == 'true'){
			localStorage.setItem('check_sources','false');
			$('.check-sources').prop('checked',false);
		} else{
			localStorage.setItem('check_sources','true');
			$('.check-sources').prop('checked',true);
		}
		checkCheckFunction();
	});

	// Dark Theme / Light Theme
	if(localStorage.getItem('check_theme') == 'true'){
		$('.check-theme').prop('checked',true);
	}
	$('.check-theme').click(function(){
		if(localStorage.getItem('check_theme') == 'true'){
			localStorage.setItem('check_theme','false');
			$('.check-theme').prop('checked',false);
		} else{
			localStorage.setItem('check_theme','true');
			$('.check-theme').prop('checked',true);
		}
		checkCheckFunction();
	});

	// Burger Menu
	if(localStorage.getItem('check_burger_menu') == 'true'){
		$('.check-burger-menu').prop('checked',true);
	}
	$('.check-burger-menu').click(function(){
		if(localStorage.getItem('check_burger_menu') == 'true'){
			localStorage.setItem('check_burger_menu','false');
			$('.check-burger-menu').prop('checked',false);
		} else{
			localStorage.setItem('check_burger_menu','true');
			$('.check-burger-menu').prop('checked',true);
		}
		checkCheckFunction();
	});

	// Search Function
	if(localStorage.getItem('check_search') == 'true'){
		$('.check-search').prop('checked',true);
	}
	$('.check-search').click(function(){
		if(localStorage.getItem('check_search') == 'true'){
			localStorage.setItem('check_search','false');
			$('.check-search').prop('checked',false);
		} else{
			localStorage.setItem('check_search','true');
			$('.check-search').prop('checked',true);
		}
		checkCheckFunction();
	});


	// Opening and closing global checklist
	$('#close-global-checklist').click(function(){
		$('.global-checklist-container').css({'transform':'translate(500px,0)','opacity':'0'});
		setTimeout(function(){
			$('.global-checklist-container').css('display','none');
		}, 300);
	});
	$('#nav-check').click(function(){
		$('.global-checklist-container').css('display','block');
		setTimeout(function(){
			$('.global-checklist-container').css({'transform':'translate(0, 0)','opacity':'1'});
		}, 10);
	});

	// Animation trigger for when the checklist has been completed
	checkCheckFunction()
	function checkCheckFunction(){
		checkPercentage();
		if (localStorage.getItem('check_english') == 'true' && localStorage.getItem('check_math') == 'true' && localStorage.getItem('check_science') == 'true' && localStorage.getItem('check_facts') == 'true' && localStorage.getItem('check_sources') == 'true' && localStorage.getItem('check_theme') == 'true' && localStorage.getItem('check_burger_menu') == 'true' && localStorage.getItem('check_search') == 'true'){
			$('.completion-ani-container').css('display','block');
			setTimeout(function(){
				$('.completion-ani-container').css('opacity','1');
				$('.com-checkmark').css({'animation':'.7s comani ease'});
				setTimeout(function(){
					$('.com-checkmark').css({'opacity':'0'});
				}, 1000);
				setTimeout(function(){
					$('.com-checkmark').css({'display':'none'});
					$('.completion-ani-container').css('background','#111');
					$('.light-theme .completion-ani-container').css('background','#fff');
					$('.restart-check').css('opacity','1');
				}, 2000);
			}, 10);
		}
		
	}


	// Resetting everything user wants to restart the checklist
	$('.restart-check').click(function(){
		localStorage.setItem('check_english','false');
		localStorage.setItem('check_math','false');
		localStorage.setItem('check_science','false');
		localStorage.setItem('check_facts','false');
		localStorage.setItem('check_sources','false');
		localStorage.setItem('check_theme','false');
		localStorage.setItem('check_burger_menu','false');
		localStorage.setItem('check_search','false');
		$('.completion-ani-container').css('opacity','0');
		$('.check-english').prop('checked',false);
		$('.check-math').prop('checked',false);
		$('.check-science').prop('checked',false);
		$('.check-facts').prop('checked',false);
		$('.check-sources').prop('checked',false);
		$('.check-theme').prop('checked',false);
		$('.check-burger-menu').prop('checked',false);
		$('.check-search').prop('checked',false);
		setTimeout(function(){
			$('.completion-ani-container').css('display','none');
		},1000);
		checkPercentage();
	});

	// So Homepage and Checklist cannot be unchecked
	$('.check-home, .check-check').prop('disabled', true);

	//checkPercentage();
	function checkPercentage(){
			let checked = $(".global-checklist-flex .global-checklist input:checkbox:checked").length;
			let out_of = 10;
			let check_percentage = checked / out_of * 100;
			$('.percentage-placeholder').html(check_percentage+"%");
	}

	
	// When the user scrolls the page, execute myFunction
	window.onscroll = function() {myFunction()};
	function myFunction() {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.getElementById("pg-bar").style.width = scrolled + "%";
	}






});
