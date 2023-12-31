class MyMath {
    static #parseNumber(str) {
        if (typeof str === 'number') return str;
    
        const parsedNumber = Number(str);
    
        if (!Number.isNaN(parsedNumber)) return parsedNumber;
    
        const numsAsStrs = str.match(/-?\d+(\.\d+)?/g); 
    
        return Number(numsAsStrs?.[0]);
      }

    static sum(...nums) {
        let sum = 0;

        for (let i = 0; i < nums.length; ++i) {
            const num = MyMath.#parseNumber(nums[i]);

            sum += num;
        }

        return sum;
    }

    static product(...nums) {
        let product = 1;

        for (let i = 0; i < nums.length; ++i) {
            const num = MyMath.#parseNumber(nums[i]);

            product *= num;
        }

        return product;
    }
}

module.exports = MyMath;