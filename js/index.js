// Your code goes here

const introIMG = document.querySelector('.intro > img');
const introIMGHeight = introIMG.style.height;

const contentIMGS = document.querySelectorAll('.img-content > img')

introIMG.addEventListener('pointerenter', () => {
    console.log(introIMG);
    introIMG.style['border-radius'] = "5em";
    introIMG.style.height = "300px";
});

introIMG.addEventListener('pointerout', () => {
    introIMG.style['border-radius'] = '0';
    introIMG.style.height = introIMGHeight;
});


let selectedIMG = null;
contentIMGS.forEach((img) => {
    img.addEventListener('drag', () => {
        img.style.filter = 'blur(2px)';
        selectedIMG      = img.src;
    });

    img.addEventListener('dragend', () => {
        img.style.filter   = 'blur(0px)';
    });
});