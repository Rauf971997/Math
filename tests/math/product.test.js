// import MyMath from '../../modules/math.js';
const MyMath = require('../../modules/math.js');

const testDatas = [
    [
        [],
        1
    ],
    [
        [1],
        1
    ],
    [
        [1, 0],
        0
    ],
    [
        [1, 2, 3, 4],
        24
    ],
    [
        ['1', '2', '3', '4'],
        24
    ],
    [
        ['1acvx', '2aads', '3a', '4awqeq'],
        24
    ],
    [
        ['acvx1', 'aads2', 'a3', 'awqeq4'],
        24
    ],
    [
        ['acvx1asdasd', 'aads2sdfsdf', 'a3sdfsd', 'awqeq4wqeqwe'],
        24
    ],
    [
        ['q1w2', '3e4r', 't5y6', 'u7i8'],
        105 
    ],
    [
        ['q10w20', '30e40r', 't50y60', 'u70i80'],
        1050000
    ],
    [
        ['q10.45w20.43', '30.56e40.65r', 't50.89y60.02', 'u70.05i80.78'],
        1138440.22
    ],
    [
        ['q10..45w20.43', '30..56e40.65r', 't50..89y60.02', 'u70..05i80.78'],
        1050000
    ],
    [
        ['a', 'b', 'c', 'd'],
        NaN
    ],

    [
        [-1, -2, -3, -4],
        24,
    ],
    [
        ['-1', '-2', '-3', '-4'],
        24,
    ],


    [
        ['q10..45w20.43', '-30..56e40.65r', 't50..89y60.02', 'u70..05i80.78'],
        -1050000
    ],

    [
        ['q1w2', '-3e4r', 't5y6', 'u7i8'],
        -105 
    ]


];

describe('TESTING METHOD PRODUCT', () => {
    for (const testData of testDatas) {
        test(`Product of ${testData[0]}`, () => {
            const product = MyMath.product(...testData[0]);

            const checkMethod = Number.isNaN(testData[1]) ? 'toBe' : 'toBeCloseTo';

            expect(product)[checkMethod](testData[1]);
        })
    }
})
