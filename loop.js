 
 const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'white',
    isNew: true
 }

// for of : for Array
// for in : for Object

//  for(const yoyo in mobile){
//     console.log(yoyo);
//     console.log(mobile[yoyo]);
//  }

 const keys = Object.keys(mobile);
 console.log(keys);
 for(let prop of keys){
    console.log(prop);
    console.log(mobile[prop]);
 }