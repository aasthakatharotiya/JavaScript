let index = 11;
let stop = setInterval(() => {
    index--;
    document.getElementById("count").innerHTML = index;
    if (index === -1) {
        clearInterval(stop);
        document.getElementById("count").style.display = "none";
        document.getElementById("disp_slider").style.display = "block";
        show();
    }
}, 1000);

let pic = document.querySelectorAll("#slide");
let slide_index = 0;
let slider = document.getElementById("slider");

function slides(slide_index) {
    for (let i = 0; i < pic.length; i++) {
        pic[i].style.width = "20%";
    }
    pic[slide_index].style.width = "50%";
    pic[slide_index].style.transition = "2s";
    pic[slide_index].style.position = "center";
    centerSlide(pic[slide_index]);
}

function centerSlide(slide) {
    let sliderRect = slider.getBoundingClientRect();
    let slideRect = slide.getBoundingClientRect();
    let scrollLeft = slideRect.left - sliderRect.left + (slide.offsetWidth / 2) - (slider.offsetWidth / 2);
    
    slider.scroll({
        left: slider.scrollLeft + scrollLeft,
        behavior: 'smooth'
    });
}

function show() {
    setInterval(() => {
        slides(slide_index);
        slide_index++;
        if (slide_index === pic.length) {
            slide_index = 0;
        }
    }, 1500);
}