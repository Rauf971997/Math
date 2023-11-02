
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
