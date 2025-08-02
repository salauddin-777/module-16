const school = 'Raj UK Uttara Model School';
// console.log(school);
const booi = 'Chemistry';
const book = 'chemistry';

if(booi.toLowerCase() === book.toLowerCase()){
    console.log("Ei bar porikkhai fatai delbo");
}
else{
    console.log('Ranna hocce ektu pore khabo');
}

const drink = '    water';
const liquid = 'water  ';
// Trim শুধু White Space কে সরাই ফেলে 
if( drink.trim() === liquid.trim()){
    console.log("Mile Gese Vai Milse re ");
}else{
    console.log("Ki sob kortesi sob mathar upor diye jaytese");
}