function myMath(operation, ...numbers) {
    let result = 0;
  
    if (operation in Math && typeof Math[operation] === 'function') {
      return Math[operation](...numbers);
    } else {
      switch (operation.toLowerCase()) {  //Это добавил для того чтоб если укажем напр:Divide,DiVide и т.д не считал ошибкой 
        case 'add':
          result = 0;
          for (let num of numbers) {
            result += num;
          }
          break;
  
        case 'subtract':
          if (numbers.length === 0) {
            result = 0;
          } else {
            result = numbers[0];
            for (let i = 1; i < numbers.length; i++) {
              result -= numbers[i];
            }
          }
          break;
  
        case 'multiply':
          result = 1;
          for (let num of numbers) {
            result *= num;
          }
          break;
  
        case 'divide':
          if (numbers.length === 0) {
            result = 1;
          } else {
            result = numbers[0];
            for (let i = 1; i < numbers.length; i++) {
              if (numbers[i] !== 0) {
                result /= numbers[i];
              } else {
                return 'Ошибка. Деление на ноль запрещено!';
              }
            }
          }
          break;
  
        case 'PI':
          return Math.PI;
          break;
  
        default:
          result = 'Такой операции не существует';
      }
    }
    return result;
  }


//   Мои проверки
  console.log(myMath("log10",100));
  console.log(myMath("fround",4.3));
  console.log(myMath("atan",14));
  console.log(myMath("ceil",5.6));
  console.log(myMath("PI",5.6));
  console.log(myMath("Divident",5,2));
  console.log(myMath("subtract"));
  console.log(myMath("divide"));
  console.log(myMath("multiply"));
  console.log(myMath("DiVide",5,0));