// insertAdjacentElement Example
function insertElement() {
    const filter=document.querySelector('.filter');

    const h1=document.createElement('h1');
    h1.textContent='insertAdjacentElement';

    // filter.insertAdjacentElement('beforebegin',h1);
    filter.insertAdjacentElement('afterend',h1);
}

insertElement();

// insertAdjacentText Example
function insertText() {
    const item=document.querySelector('li:first-child');

    // item.insertAdjacentText('afterend', 'insertAdjacenttext');
    item.insertAdjacentText('beforebegin', 'insertAdjacenttext');
}
insertText();


// insertAdjacentHTML Example
function insertHTML() {
    const clearBtn=document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}
insertHTML();

// insertBefore Example
function insertBeforeItem() {
    const ul=document.querySelector('ul');

    const li=document.createElement('li');
    li.textContent='Mango';

    const thirdItem=document.querySelector('li:nth-child(3)');

    ul.insertBefore(li, thirdItem);
}

insertBeforeItem();