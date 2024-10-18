const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");

function run()
{
    // className
    console.log(itemList.className);
    // comment one to show another
    // text.className='card dark';
    // text.className='dark';

    //classList
    console.log(itemList.classList);
    itemList.classList.forEach((c)=> console.log(c));

    // text.classList.add('dark') // both dark and card works
    // text.classList.remove('card'); // remove card class


   //  // Comment one to see orignal execution of another
    // text.classList.toggle('dark');
    // text.classList.toggle('hidden');
    text.classList.replace('card', 'dark'); // dark replace to card


    // Change style
    itemList.style.lineheight='5';


    items.forEach((item, index)=>{
        item.style.color='red';
        
        if (index===2) {
            item.style.color='blue';
        }
    });


}

document.querySelector('button').onclick=run;