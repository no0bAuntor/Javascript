const itemInput=document.getElementById('item-input');

// const onKeyPress=(e)=>{
//   console.log('keypress');
// }

// // itemInput.addEventListener('keypress', onKeyPress);

// const onKeyUp=(e)=>{
//   console.log('keyup');
// }

// itemInput.addEventListener('keyup', onKeyUp);

// const onKeyDown=(e)=>{
//   console.log('keydown');
// }


// itemInput.addEventListener('keyup', onKeyDown);

const reName=(e)=>{
  // method 1
  // console.log(e.key);
  // document.querySelector('h1').innerText=e.key;

  // method 2 (keycode)
  // https://www.toptal.com/developers/keycode/table
  // if (e.keyCode==13) {
  //   alert('You pressed enter')
  // }

  // method 3 (code)
  if (e.code==='Digit1' || e.code === 'Numpad1') {
    console.log('You pressed 1')
  }

  if (e.repeat) {
    console.log('You are holding down ' + e.key);
  }

  console.log('Shift: ' + e.shiftKey);
  console.log('Control: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);

}
itemInput.addEventListener('keydown', reName);