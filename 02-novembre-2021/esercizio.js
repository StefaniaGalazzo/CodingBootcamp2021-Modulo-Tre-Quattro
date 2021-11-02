// Obbligatorio: dato il seguente array di oggetti

const arrObj = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv"
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net"
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org"
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca"
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info"
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz"
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me"
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io"
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz"
  }
]
// utilizzare il metodo .forEach() per creare un array o sovrascrivere lo stesso, 
// che contenga solamente i campi name ed email, quest'ultimo dovrà contenere testi esclusivamente in minuscolo.

// 1.
// arrObj.forEach(element => {
//   newArr = [element.name.toLowerCase() + element.email.toLocaleLowerCase()]; 
//   console.log(newArr);
// }); 
// console.log(arrObj);


//2.
const newArr = [];

arrObj.forEach((element) => {
  const newObj = {
    "name": element.name.toLocaleLowerCase(),
    "email": element.email.toLocaleLowerCase(),
  }

  newArr.push(newObj);
}
);

console.log(newArr);

// arrObj.forEach(element => console.log(element));











// Esempio del formato finale:

// [
//   {
//     "name": "Leanne Graham",
//     "email": "sincere@april.biz"
//   },
//   ...
//   ...
// ]