const form=document.getElementById('item-form');

// Method 1
function onSubmit(e)
{
  e.preventDefault();
  // console.log('submit');

  const item=document.getElementById('item-input').value;
  const priority=document.getElementById('priority-input');

if (item=='' || priority=='0') { // Here priority is 0 because, the option value of "Select Priority" is set to 0 in index.html
  alert('Please fill in all fields'); 
  return;
}

  console.log(item, priority.value);
}

form.addEventListener('submit', onSubmit);

// Method 2
function onSubmit2(e)
{
  e.preventDefault();

  const formData=new FormData(form);

  const item=formData.get('item');
  const priority=formData.get('priority');


  console.log(item, priority);
}

form.addEventListener('submit', onSubmit2);


// Method 3
function onSubmit3(e)
{
  e.preventDefault();

  const formData=new FormData(form);

  const entries=formData.entries();

  for (const entry of entries) {
    console.log(entry);
    console.log(entry[1]);
  }
}

form.addEventListener('submit', onSubmit3);