const socials = ["Twitter", "LinkedIn", "Facebook", "Instagram"];

socials.forEach(function (item) {
  console.log(item);
});

//This can be written as:
socials.forEach((item) => console.log(item));

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`));


//this can be written as by function:
function logSocials(social)
{
    console.log(social);
}
socials.forEach(logSocials);

const socialLink = [
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'Facebook', url: 'https://facebook.com'},
    {name: 'LinkedIn', url: 'https://linkedin.com'},
    {name: 'Instagram', url: 'https://instagram.com'},
];

socialLink.forEach((item) => console.log(item));