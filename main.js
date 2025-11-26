//Objects

// let store = {
//   nameStore: "om shima for tora7",
//   branshes: [
//     {
//       //index 0
//       location: "alex",
//       manger: "Wael",
//       Client: "20",
//     },
//     {
//       //index 1
//       location: "cairo",
//       manger: "Ahmed",
//       Client: "200",
//     },
//   ],
// };
// // console.log(` Manger is : ${store.branshes[1].manger}`);
// console.log(` Client is : ${store.branshes}`);

// let add = () => {
//   let AddNew = {
//     location: prompt("Enter new location"),
//     manger: prompt("Enter new Manger"),
//     Client: +prompt("Enter new Client"),
//   };
//   store.branshes = AddNew;
//   console.log(store.branshes);

// };

// let Dipslay2 = () => {
//   store = {
//     loctaion: prompt("Enter the Location"),
//     Manger: prompt("Enter the Name"),
//     client: prompt("Enter the Cleint"),
//   };
//   console.log(store.client);
// };

// let EditUsers = () => {
//   console.clear();
//   let NewName = +prompt("Enter new cleint");
//   store.client = NewName;
//   console.log(store);
// };

//Arraw of objects

// let phones = [
//   { name: "iphone x", price: 200, qty: 10 },
//   { name: "iphone 11", price: 400, qty: 6 },
//   { name: "iphone 12", price: 600, qty: 16 },
// ];

// let ShowPhones = () => {
//   console.clear();
//   console.table(phones);
// };

// let addPhones = () => {
//   let NewPhone = {
//     name: prompt("Add new phone"),
//     price: +prompt("Add new price"),
//     qty: +prompt("Add  qty"),
//   };
//   phones.push(NewPhone);
//   ShowPhones();
// };

// let DeletePhone = () => {
//   let IndexDelete = +prompt("enter index for delete");
//   phones.splice(IndexDelete, 1);
//   ShowPhones();
// };

// let EditName = () => {
//   let IndexName = +prompt("enter the index ");
//   let NewName = prompt("Enter new name phone");
//   phones[IndexName].name = NewName;
//   ShowPhones();
// };
// let EditPrice = () => {
//   let IndexPrice = +prompt("enter the index ");
//   let NewPrice = +prompt("Enter the new price"); // مرحلهReasige
//   phones[IndexPrice].price = NewPrice;
//   ShowPhones();
// };
// let EditQty = () => {
//   let IndexQty = +prompt("Enter the index");
//   let NewQty = +prompt("Enter new Qty ");
//   phones[IndexQty].qty = NewQty;
//   ShowPhones();
// };

//Function into Object

let userInfo = {
  name: "Mostafa",
  lastName: "Esam",
  age: 20,

  fullName : function () { //method 
    return userInfo.name + ' ' +userInfo.lastName
  }
};
console.log(userInfo.fullName());
