const logo=document.querySelector('img');

const onclick=()=>console.log('click event');// click on image
const ondoubleclick=()=>
  {
    document.body.style.backgroundColor='gray'
    console.log('double click event');// click on image double times
  }

  const onRightClick=()=>console.log('Right click event'); // right click on image

  const onMouseDown=()=>console.log('Mouse down event');

  const onMouseWheel=()=>console.log('Mouse wheel event');

  const onMouseOver=()=>console.log('Mouse over event');

  const onMouseOut=()=>console.log('Mouse out event');

  const onDragStart=()=>console.log('Drag start event');

  const onDrag=()=>console.log('Drag event');

  const onDragEnd=()=>console.log('Drag end event');

// Event Listener
logo.addEventListener('click', onclick);
logo.addEventListener('dblclick', ondoubleclick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragStart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);



