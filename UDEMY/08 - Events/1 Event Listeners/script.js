const clearBtn = document.querySelector("#clear");

// JS event listener
// clearBtn.onclick=function()
// {
//     alert('CLear Items'); // now click on 'clear all'
// };

// // addEventListener()
// clearBtn.addEventListener('clcik', ()=>alert('Clear Items'));

// clearBtn.addEventListener('clcik', ()=>console.log('Clear Items')); => show console output








// comment top's all code to show below's code... not 1st line
function onClear() {
  alert("Clear Items");
}
clearBtn.addEventListener("click", onClear);
// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);  // only work after 1st click of 'Clear ALl'

// setTimeout(()=>clearBtn.click(), 5000);



// show output
function onClear() {
    const itemList=document.querySelector('ul');

    // method 1
    // itemList.innerHTML='';

    //method 2
    const items=itemList.querySelectorAll('li');
    items.forEach((item)=>item.remove());

    // method 3
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

}
