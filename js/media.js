if (screen.width>321) {
	nav.classList.toggle('nav_hidden')
	welcomeImg.getAttributeNode('src').value = 'images/image-geometry_1.svg';
    let arr = []
    for (let i = 0; i < card.length; i++){
        arr.push(card[i].childNodes[3])
        arr[i].style.opacity = 0;

        // card[i].addEventListener('mouseover',()=>{
        //     arr[i].style.height = card[i].clientHeight / 2;
        //     console.log(arr[i]);
        // })
        card[i].addEventListener('mouseover',()=>{
            card[i].childNodes[3].classList.add('card_active');
            arr[i].style.opacity = 1;
        })
        card[i].addEventListener('mouseout',()=>{
            card[i].childNodes[3].classList.remove('card_active');
            arr[i].style.opacity = 0;
        })
    }

    
}
