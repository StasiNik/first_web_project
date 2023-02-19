// if while dowhile for

// for (let index = 0; index < 5; index++) {
//     if (index == 3) {
//        break 
//     }
//     console.log(index);
// }

// a = [1,2,3,4,5,6]

// a.forEach(element => {
//     if (element != 4) {
//         console.log(element)
//     }
//     // console.log(element)
// });


// a.forEach(element => {
//     alert(element)
// });

// console.log(qwerty1(5))

// function qwerty1(a) {
//     1 * 2 * 3 * 4 * 5
//     result = 1;
//     for (let index = 1; index <= a; index++) {
//         result = index * result;
//     }
//     return result
// }

// function qwerty(a) {
//     if (a == 1) {
//         return 1
//     } else {
//         return a * qwerty(a - 1)
//     }
// }

bloc = document.querySelectorAll("li.del");
for (let index = 0; index < bloc.length; index++) {
    element = bloc[index];
    element.style = `animation-delay: ${1 + 0.3 * index}s;`
}

// selects = document.querySelectorAll(".selected")
// selects.forEach(element => {
//     element.addEventListener('click', function(){
//         console.log("127");
//     });
// });

result_time = 0;
result_price = 0;
type = [{}];
design = [];
adapt = [];

function getResult() {
    console.log("i`m work")
    // var tipe = document.getElementsByName('tipe');
    // var des = document.getElementsByName('design');
    // var adaptive = document.getElementsByName('adaptive');
    // console.log(tipe[0].value);
    // console.log(des[0].value);
    // console.log(adapt[0].value)
}
