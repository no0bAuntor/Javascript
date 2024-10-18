const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
    color5: 'magenta',
};

for(const key in colorObj)
{
    console.log(key, colorObj[key]);
}

const colorArr= ['red', 'gree', 'yellow'];
for(const key in colorArr)
{
    
    console.log(colorArr[key]);
}