
const MyMath = require('../../modules/math.js');

const testDatas = [
    [
        [],
        0
    ],
    [
        [1],
        1
    ],
    [
        [1, 0],
        1
    ],
    [
        [1, 2, 3, 4],
        10
    ],
    [
        ['1', '2', '3', '4'],
        10
    ],
    [
        ['1acvx', '2aads', '3a', '4awqeq'],
        10
    ],
    [
        ['acvx1', 'aads2', 'a3', 'awqeq4'],
        10
    ],
    [
        ['acvx1asdasd', 'aads2sdfsdf', 'a3sdfsd', 'awqeq4wqeqwe'],
        10
    ],
    [
        ['q1w2', '3e4r', 't5y6', 'u7i8'],
        16 // If first number,
    ],
    [
        ['q10w20', '30e40r', 't50y60', 'u70i80'],
        160
    ],
    [
        ['q10.45w20.43', '30.56e40.65r', 't50.89y60.02', 'u70.05i80.78'],
        161.95
    ],
    [
        ['q10..45w20.43', '30..56e40.65r', 't50..89y60.02', 'u70..05i80.78'],
        160
    ],
    [
        ['a', 'b', 'c', 'd'],
        NaN
    ],

    [
        [-1,-2,3],
        0
    ],
    [
        [-1, 2, -3],
        -2
    ],


    [
        ['q10..45w20.43', '-30..56e40.65r', 't50..89y60.02', 'u70..05i80.78'],
        100
    ],

];

describe('TESTING METHOD SUM', () => {
    for (const testData of testDatas) {
        test(`Sum of ${testData[0]}`, () => {
            const sum = MyMath.sum(...testData[0]);

            const checkMethod = Number.isNaN(testData[1]) ? 'toBe' : 'toBeCloseTo';

            expect(sum)[checkMethod](testData[1]);
        })
    }
})