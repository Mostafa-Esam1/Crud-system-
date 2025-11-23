//Objects

// let store = {
//     nameStore: "om shima for tora7",
//     branshes: [
//       {
//         //index 0
//         location: "alex",
//         manger: "Wael",
//         Client: "20",
//       },
//       {
//         //index 1
//         location: "cairo",
//         manger: "Ahmed",
//         Client: "200",
//       },
//     ],

// };
//       console.log(store.branshes);

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

let phones = [
  { name: "iphone x", price: 200, qty: 10 },
  { name: "iphone 11", price: 400, qty: 6 },
  { name: "iphone 12", price: 600, qty: 16 },
];

let ShowPhones = () => {
  console.clear();
  console.table(phones);
};

let addPhones = () => {
  let NewPhone = {
    name: prompt("Add new phone"),
    price: +prompt("Add new price"),
    qty: +prompt("Add  qty"),
  };
  phones.push(NewPhone);
  ShowPhones();
};

let DeletePhone = () => {
  let IndexDelete = +prompt("enter index for delete");
  phones.splice(IndexDelete, 1);
  ShowPhones();
};

let EditName = () => {
  let IndexName = +prompt("enter the index ");
  let NewName = prompt("Enter new name phone");
  phones[IndexName].name = NewName;
  ShowPhones();
};
let EditPrice = () => {
  let IndexPrice = +prompt("enter the index ");
  let NewPrice = +prompt("Enter the new price"); // مرحلهReasige
  phones[IndexPrice].price = NewPrice;
  ShowPhones();
};
let EditQty = () => {
  let IndexQty = +prompt("Enter the index");
  let NewQty = +prompt("Enter new Qty ");
  phones[IndexQty].qty = NewQty;
  ShowPhones();
};
