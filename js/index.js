// Your code goes here

const body = document.querySelector('body');
const introIMG = document.querySelector('.intro > img');
let introIMGHeight = introIMG.style.height;

const contentIMGS = document.querySelectorAll('.img-content > img')


const defaultBackgroundColor = body.style.backgroundColor;
document.addEventListener('keydown', eed => {
    body.style.backgroundColor = 'blue';
});

document.addEventListener('keyup', e => {
    body.style.backgroundColor = defaultBackgroundColor;
})

document.addEventListener('cut', e => {
    e.clipboardData.setData('text/plain', 'You cannot cut text from this site');
    body.style.backgroundColor = 'red'; 
    e.preventDefault();
});

document.addEventListener('copy', e => { 
    e.clipboardData.setData('text/plain', 'You cannot copy text from this site');
    body.style.backgroundColor = 'red'; 
    e.preventDefault();
});

introIMG.addEventListener('pointerenter', e => {
    console.log(introIMG);
    introIMG.style['border-radius'] = "5em";
    introIMG.style.height = "300px";
});

introIMG.addEventListener('pointerout', e => {
    introIMG.style['border-radius'] = '0';
    introIMG.style.height = introIMGHeight;
});

introIMG.addEventListener('dblclick', e => {
    introIMGHeight = '300px';
});

let selectedIMG = null;
contentIMGS.forEach((img) => {
    img.addEventListener('drag', e => {
        img.style.filter = 'blur(2px)';
        selectedIMG      = img.src;
    });

    img.addEventListener('wheel', e => {
        if(e.deltaY < 0) {
            e.target.style.transform = 'scale(' + e.deltaY * -0.05 + ')';
        } else if(e.deltaY > 0) {
            e.target.style.transform = 'scale(1)';
        } 
        e.preventDefault();
    });

    img.addEventListener('dragend', e => {
        img.style.filter   = 'blur(0px)';
    });
});