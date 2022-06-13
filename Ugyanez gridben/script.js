const valtozo = document.querySelector('.grid-item');

zaszlo();

document.getElementByClass('.grid-item').addEventListener('click', zaszlo);

function zaszlo(){
    document.getElementsByClass('.grid-item').innerHTML = 'a';
}
