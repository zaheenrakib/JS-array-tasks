const friends = ['balam','kalam','salam','dilam','ranlam', 'kailam'];

console.log(friends.includes('salam'));
console.log(friends.includes('palam'));

if ( friends.includes('salam')){/////case sensetive 
    console.log('party');
}
else{
    console.log('no Food .we Are fasting');
}