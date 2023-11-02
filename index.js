/* function myMath(operation, ...numbers) {
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
  console.log(myMath("DiVide",5,0)); */


  function MyArray(...args) {
    this.elements = {
        length: 0
    };

    this.push = function(...args) {
        for (const arg of args) {
            const index = this.elements.length;
            this.elements[index] = arg;
            ++this.elements.length;
        }
        return this.elements.length;
    };

    this.shift = function() {
        if (this.elements.length === 0) {
            return undefined;
        }

        const firstElement = this.elements[0];

        for (let i = 0; i < this.elements.length - 1; i++) {
            this.elements[i] = this.elements[i + 1];
        }

        delete this.elements[this.elements.length - 1];
        --this.elements.length;

        return firstElement;
    };

    this.unshift = function(...args) {
        const argsLength = args.length;
        for (let i = this.elements.length - 1; i >= 0; i--) {
            this.elements[i + argsLength] = this.elements[i];
        }
        for (let i = 0; i < args.length; i++) {
            this.elements[i] = args[i];
        }
        this.elements.length += argsLength;
        return this.elements.length;
    };

    this.push(...args);
}




const arr = new MyArray(1, '2', 3,'Step');

arr.unshift('Rauf', 233); 
console.table(arr.elements);


arr.shift();
console.table(arr.elements);
