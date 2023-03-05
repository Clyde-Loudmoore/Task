const $DROPDOWNARROW1 = document.getElementById('arrow1');
const $DROPDOWNTEXT1 = document.getElementById('text1');
const $ITEMSDROPDOWN1 = document.getElementById('items-dropdown1');

const $DROPDOWNARROW2 = document.getElementById('arrow2');
const $DROPDOWNTEXT2 = document.getElementById('text2');
const $ITEMSDROPDOWN2 = document.getElementById('items-dropdown2');

const $DROPDOWNARROW3 = document.getElementById('arrow3');
const $DROPDOWNTEXT3 = document.getElementById('text3');
const $ITEMSDROPDOWN3 = document.getElementById('items-dropdown3');

const $DROPDOWNARROWMOBILE1 = document.getElementById('arrow1-mobile');
const $DROPDOWNTEXTMOBILE1 = document.getElementById('text1-mobile');
const $ITEMSDROPDOWNMOBILE1 = document.getElementById('items-dropdown1-mobile');

const $DROPDOWNARROWMOBILE2 = document.getElementById('arrow2-mobile');
const $DROPDOWNTEXTMOBILE2 = document.getElementById('text2-mobile');
const $ITEMSDROPDOWNMOBILE2 = document.getElementById('items-dropdown2-mobile');

const $DROPDOWNARROWMOBILE3 = document.getElementById('arrow3-mobile');
const $DROPDOWNTEXTMOBILE3 = document.getElementById('text3-mobile');
const $ITEMSDROPDOWNMOBILE3 = document.getElementById('items-dropdown3-mobile');

const $BURGERMENU = document.getElementById('burger');
const $NAVIGATIONMOBILE = document.getElementById('navigations-mobile');
const $CLOSEBUTTON = document.getElementById('close');

const $HEADER = document.getElementById('header');
const $MAINSECTION = document.getElementById('main');
const $FOOTER = document.getElementById('footer');

const handleDwopdown1 = () => {
  $ITEMSDROPDOWN1.classList.toggle('show');
}

const handleDwopdown2 = () => {
  $ITEMSDROPDOWN2.classList.toggle('show');
}

const handleDwopdown3 = () => {
  $ITEMSDROPDOWN3.classList.toggle('show');
}

const handleDwopdownMobile1 = () => {
  $ITEMSDROPDOWNMOBILE1.classList.toggle('show');
}

const handleDwopdownMobile2 = () => {
  $ITEMSDROPDOWNMOBILE2.classList.toggle('show');
}

const handleDwopdownMobile3 = () => {
  $ITEMSDROPDOWNMOBILE3.classList.toggle('show');
}

$DROPDOWNARROW1.addEventListener('click', handleDwopdown1);
$DROPDOWNTEXT1.addEventListener('click', handleDwopdown1);

$DROPDOWNARROW2.addEventListener('click', handleDwopdown2);
$DROPDOWNTEXT2.addEventListener('click', handleDwopdown2);

$DROPDOWNARROW3.addEventListener('click', handleDwopdown3);
$DROPDOWNTEXT3.addEventListener('click', handleDwopdown3);

$DROPDOWNARROWMOBILE1.addEventListener('click', handleDwopdownMobile1);
$DROPDOWNTEXTMOBILE1.addEventListener('click', handleDwopdownMobile1);

$DROPDOWNARROWMOBILE2.addEventListener('click', handleDwopdownMobile2);
$DROPDOWNTEXTMOBILE2.addEventListener('click', handleDwopdownMobile2);

$DROPDOWNARROWMOBILE3.addEventListener('click', handleDwopdownMobile3);
$DROPDOWNTEXTMOBILE3.addEventListener('click', handleDwopdownMobile3);

$BURGERMENU.addEventListener('click', () => {
  $NAVIGATIONMOBILE.style.display = 'flex';
  $NAVIGATIONMOBILE.style.height = '400px';
  $MAINSECTION.style.display = 'none';
  $FOOTER.style.display = 'none';
});

$CLOSEBUTTON.addEventListener('click', () => {
  $NAVIGATIONMOBILE.style.display = 'none';
  $MAINSECTION.style.display = 'block';
  $FOOTER.style.display = 'block';
});

$(document).ready(() => {
  $('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
  });
});