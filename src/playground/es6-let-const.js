var nameVar = "Tim";
var nameVar = "Mike";
console.log('nameVar', nameVar);

let nameLet = "Sab";
nameLet = "Jul";
console.log('nameLet', nameLet);

const nameConst = "Frank";
console.log('nameConst', nameConst);

function getPetName(params) {
    const petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);  