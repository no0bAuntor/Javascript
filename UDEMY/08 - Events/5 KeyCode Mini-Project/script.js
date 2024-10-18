// // Method 1

// window.addEventListener('keydown', (e)=>{
//     const insert=document.getElementById('insert');
//     insert.innerHTML=`<div class="key">
//         ${e.key == ' '?'Space ': e.key}
//         <small>e.key</small>
//       </div>

//       <div class="key">
//         ${e.keyCode}
//         <small>e.keyCode</small>
//       </div>

//       <div class="key">
//         ${e.code}
//         <small>e.code</small>
//       </div>`;
// })

// // Method 2
function showKeyCodes(e) {
    const insert=document.getElementById('insert');

    const keyCodes={
        'e.key': e.key == ' '? 'Space': e.key,
        'e.keyCode': e.keyCode, 
        'e.code': e.code,

    };
    console.log(keyCodes);
}

window.addEventListener('keydown', showKeyCodes);