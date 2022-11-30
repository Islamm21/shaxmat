// const users = {
//     1:{
//         name:"Bobur",
//         age:60
//     },
//     2:{
//         name: "Sobir",
//         age: 25  
//     },
//     3:{
//         name: "Yobir",
//         age: 45 
//     }
//     }
//     // console.log(users[2]);
//     for (const key in users) {
//          console.log(users[key].name);
//         // if (key != 2){
//         //     console.log(users[key].name);
//         // }
//     }


// let qoy = +prompt ("qoylar sonini kirit")
// let box = ""
// for (let a = 0; a < qoy; a++) {
//     for (let b = 0; b < qoy; b++) {
//         if (a==b || b==0 || a==0 || a==qoy-1 || b==qoy-1) {
//             box +="⬛"
//         }else{
//             box +="⬜"
//         }
//     }
//     console.log(box);
//     box=""
// }


// let qoy = +prompt ("qoylar sonini kirit")
// let box = ""
// for (let a = 0; a < qoy; a++) {
//     for (let b = qoy; b < qoy; b++) {
//         if ( a==b || b==0 || a==0 || a==qoy-1 || b==qoy-1) {
//             box +="⬛"
//         }else{
//             box +="⬜"
//         }
//     }
//     console.log(box);
//     box=""
// }



let qoy = +prompt("qoylar sonini kirit");
let box = "";

for (let a = 1; a < qoy; a++) {
  for (let b = 1; b < qoy; b++) {
    if (b == qoy -a ) {
        box += "⬛️";
    } else {
        box += "⬜️"; 
    }
  }
  console.log(box);
  box = "";
}

