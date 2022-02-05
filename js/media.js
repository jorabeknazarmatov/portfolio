if (screen.width>321) {
	nav.classList.toggle('nav_hidden')
	welcomeImg.getAttributeNode('src').value = 'images/image-geometry_1.svg';
    
    for (let i = 0; i < card.length; i++){
        card[i].addEventListener('mouseover',()=>{
            card[i].childNodes[3].style.transform = 'translateY(0)'
        })
        card[i].addEventListener('mouseout',()=>{
            card[i].childNodes[3].style.transform = 'translateY(355px)'
        })
    }
}
