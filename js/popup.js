const popup = document.createElement('section'); popup.classList.add('popup')

document.querySelector('body').appendChild(popup)

const popupProjets = {
	obj1 : [],
	obj2 : [],
	obj3 : [],
	obj4 : [],
	obj5 : [],
	obj6 : [],
}

function createPopup(){
	popup.innerHTML = `<div class="close">
		<span></span>
		<span></span>
	</div>
	<div class="popup_header">
		<h3>Project name goes here</h3>
		<div class="popup_nav">
			<a href="#">HTML/CSS</a>
			<a href="#">Ruby on Rails</a>
			<a href="#">JavaScript</a>
		</div>
		<div class="popup_corusel"></div>
		<div class="popup_title">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p><br>
			<p>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
		</div>
		<div class="popup_link">
			<a href="#">See live</a>
			<a href="#">See source <i class="fab fa-github"></i></a>
		</div>
	</div>`;
}
// createPopup()