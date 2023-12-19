// Задание первое начало 
// const regExp = /^(?:[01]\d|2[0-3]):[0-5]\d$/;

// const test1=regExp.test('23:00');
// const test2=regExp.test('23:59');
// const test3=regExp.test('24:00');
// const test4=regExp.test('23:60');

// console.table([
//     test1,
//     test2,
//     test3,
//     test4,
// ])

// Задание первое конец


// Задание второе начало
// const regExp = /^\(\+994\)[ -]?(55|77|50|99|51|70)[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}$/;

// const test1 = '(+994) 55 799 88 09';
// const test2 = '+994997771071';
// const test3='(+994)99-777-09-89'

// const result1 = regExp.test(test1);
// const result2 = regExp.test(test2);
// const result3=regExp.test(test3)

// console.table([
//    result1,
//    result2,
//    result3
// ])
// Задание второе конец



// 3ое задание начало
// const input=document.querySelector('input');

// input.addEventListener('input', function() {
//     const password = this.value;
//     const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&_])(?=.*[0-9])(?=.*[!?.,])[A-Za-z0-9@#$%&!?.,]{8,16}$/.test(password);
//     console.log(isValidPassword); 
//   });

//   3-е задание конец



// 4ое задание начало
// const str = "Rauf123 group233";
// const stringReplace = str.replace(/\d/g, 'D');

// console.log(stringReplace); 
// 4ое задание конец




// 5-ое задание начало

// const str = "Rauf123 group233 100 10";
// const stringReplace = str.replace(/[0-9]+/g, 'N');

// console.log(stringReplace); 

// 5 ое задание конец




// 6-ое задание начало 

const strSpace = "Rauf      group      number      location";
const wordsCount = strSpace.split(/\s+/).filter(word => word !== '').length;

console.log(wordsCount); 

// 6-ое задание конец