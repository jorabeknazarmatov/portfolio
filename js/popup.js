function createElement(tegName, className, place, link, content) {
	let tmp = document.createElement(tegName)
	let tmpPlace = document.querySelector(place);
	tmpPlace.appendChild(tmp);

	if (className !== 0) {
		tmp.classList.add(className);
	} else {
		undefined
	}

	if (content !== 0) {
		tmp.textContent = content;
	} else {
		undefined
	}

	if (link !== 0) {
		tmp.href = link;
	} else { tmp.href = '#';}	
}

let tempContent = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
	'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
	'See live',
	'See source'
]

function creatPopUp () {
	createElement('section','popup','body',0,0);
	createElement('div','close','.popup',0,0);
	createElement('span',0,'.close',0,0);
	createElement('span',0,'.close',0,0);
	createElement('div','popup_header','.popup',0,0);
	createElement('h3',0,'.popup_header',0,'Project name goes here');
	createElement('div','popup_nav','.popup_header',0,0);
	createElement('a',0,'.popup_nav',0,'HTML/CSS');
	createElement('a',0,'.popup_nav',0,'Ruby on Rails');
	createElement('a',0,'.popup_nav',0,'JavaScript');
	createElement('div','popup_corusel','.popup',0,0);
	createElement('div','popup_title','.popup',0,0);
	createElement('p',0,'.popup_title',0,tempContent[0]);
	createElement('br',0,'.popup_title',0,0)
	createElement('p',0,'.popup_title',0,tempContent[1]);
	createElement('div','popup_link','.popup',0,0);
	createElement('a',0,'.popup_link',0,tempContent[2]);
	createElement('a',0,'.popup_link',0,tempContent[3]);
	createElement('i','fa-github','.popup_link a:last-child',0,0);
	document.querySelector('.popup_link a:last-child').classList.add('fab')	
}

let n = 0;

const see = document.querySelectorAll('.see')

for (let i = 0; i < see.length; i++) {
	see[i].addEventListener('click',()=>{
		n +=1;
		if (n==1) {
			creatPopUp()
		}
		if (n==1) {
			document.querySelector('.close').addEventListener('click',()=>{
			document.querySelector('.popup').classList.toggle('popup_hidden')
		})
		}
		else {
			document.querySelector('.popup').classList.toggle('popup_hidden')
		}
	})
}