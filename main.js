const $DROPDOWNARROW1 = document.getElementById('arrow1');
const $DROPDOWNTEXT1 = document.getElementById('text1');
const $ITEMSDROPDOWN1 = document.getElementById('items-dropdown1');

const $DROPDOWNARROW2 = document.getElementById('arrow2');
const $DROPDOWNTEXT2 = document.getElementById('text2');
const $ITEMSDROPDOWN2 = document.getElementById('items-dropdown2');

const $DROPDOWNARROW3 = document.getElementById('arrow3');
const $DROPDOWNTEXT3 = document.getElementById('text3');
const $ITEMSDROPDOWN3 = document.getElementById('items-dropdown3');

const handleDwopdown = () => {
  $ITEMSDROPDOWN1.classList.toggle('show');
}

$DROPDOWNARROW1.addEventListener('click', handleDwopdown);
$DROPDOWNTEXT1.addEventListener('click', handleDwopdown);

$DROPDOWNARROW2.addEventListener('click', handleDwopdown);
$DROPDOWNTEXT2.addEventListener('click', handleDwopdown);

$DROPDOWNARROW3.addEventListener('click', handleDwopdown);
$DROPDOWNTEXT3.addEventListener('click', handleDwopdown);