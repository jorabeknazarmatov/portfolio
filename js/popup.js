const popup = document.createElement('section'); popup.classList.add('popup')
document.querySelector('body').appendChild(popup)

const popupProjets = 
	[
		{
			languages: ['Html/css','Python','Java'],
			carusel: ['Rectangle 21-1.png','1 element.'],
			description : '1 element    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',

		},
		{
			languages: ['Html/css','Ruby','GO'],
			carusel: ['Rectangle 21-1.png','2 element.'],
			description : '2 element    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',

		},
		{
			languages: ['Html/css','Python','Java'],
			carusel: ['Rectangle 21-1.png','3 element.'],
			description : '3 element    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',

		},
		{
			languages: ['Html/css','Java','Python'],
			carusel: ['Rectangle 21-1.png','4 element'],
			description : '4 element    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',

		},	
		{
			languages: ['Html/css','Python','Java'],
			carusel: ['Rectangle 21-1.png','5 element'],
			description : '5 element    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',

		},
		{
			languages: ['Html/css','Python','Java'],
			carusel: ['Rectangle 21-1.png','6 element.'],
			description : '6 element    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',

		},
	]

function createPopup(lang,carusel,description){
	let temp =
	`<div class="close">
		<span></span>
		<span></span>
	</div>
	<div class="popup_header">
		<h3>Project name goes here</h3>
		<ul class="popup_nav">
			${lang}
		</ul>
		<div class="popup_corusel">
			${carusel}
		</div>
		<div class="popup_title">
			${description}
		</div>
		<div class="popup_link">
			<a href="#">See live</a>
			<a href="#">See source <i class="fab fa-github"></i></a>
		</div>
	</div>`;
	popup.innerHTML = temp
}

function creat(x) {
	let b = '';
	for(let i = 0; i < popupProjets[x].languages.length; i++){
		b += `${'<li>'+popupProjets[x].languages[x]+'</li>'}`
	};
	let d = `<img src="images/${popupProjets[x].carusel[0]}" alt="${popupProjets[x].carusel[1]}">`;
	let c = `<p>${popupProjets[x].description}</p>`;
	createPopup(b,d,c)
}
let g;
for (let i = 0; i < see.length; i++){
	see[i].addEventListener('click',()=>{
		g=i
		creat(g)
	})
	
}