const d=new Date();

const hour=d.getHours();

console.log(hour);

if (hour<=8) {
    console.log('Good Morning');
}

else if(hour>=20)
{
    console.log('Good Night');
}

else{
    console.log('have a nice day');
}