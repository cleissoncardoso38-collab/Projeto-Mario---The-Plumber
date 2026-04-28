const form = document.querySelector('.service-form');
const maskForm = document.querySelector('.mask-form');



function showForm () {
    form.style.left = '50%';
    form.style.transform = 'translateX(-50%)';
    maskForm.style.visibility = 'visible';
}

function hiddenForm (){
    form.style.left = '-340px';
    form.style.transform = 'translateX(0)';
    maskForm.style.visibility = 'hidden';
}