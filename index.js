let slider_index= 0;
showslide(slider_index)


function changeslide(n) {
    showslide (slider_index += n)
}

function showslide(n) {
    let slides= document.querySelectorAll('.carrousel-slider > div')
    if (n >=slides.length) {
        slider_index= 0
    }
     if (n <0) {
        slider_index= slides.length -1
     }
     slides.forEach (slide=> slide.classList.remove('slide-active'))
     slides[slider_index].classList.add('slide-active')
}

/*setInterval( ()=>{
    changeslide(1)
},5000

)*/