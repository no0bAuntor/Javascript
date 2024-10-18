// To see one function output, comment rest function


function replaceFirstItem()
{
    const firstItem=document.querySelector('li:first-child');

    const li=document.createElement('li');
    li.textContent='Replaced First';

    firstItem.replaceWith(li);
}

replaceFirstItem();

function replaceSecondItem() {
    const secondItem=document.querySelector('li:nth-child(2)');

    secondItem.outerHTML='<li> Replaced Second</li>';
}
replaceSecondItem();

function replacedAllItems() {
    const lis=document.querySelectorAll('li');

    lis.forEach((item) => {
        // item.outerHTML='<li>Replace All</li>' => bu outerHTML
        item.innerHTML='Replace All'; // by Outer HTML
    });
}

replacedAllItems();

function replaceAllWithoutSpecificOne() {
    const lis=document.querySelectorAll('li');
    // lis.forEach((item, index)=>{

        
    //     if (index==2) {
    //         item.innerHTML='Third Item';
    //     }
    //     else{
    //         item.innerHTML='Replace All';
    //     }
    // });

    // by ternary
    lis.forEach((item, index)=>item.outerHTML=index==2? '<li>Third Item</li>': '<li>Item</li>')
}

replaceAllWithoutSpecificOne();


function replaceChildHeading() {
    const header=document.querySelector('header');
    const h1=document.querySelector('header h1');

    const h2=document.createElement('h2');
    h2.id='app-title';
    h2.textContent='Shopping List';
    header.replaceChild(h2,h1);
}

replaceChildHeading();