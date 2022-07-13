import  {Calculator} from "../[Thực hành] Chương trình tính tổng của hai số nguyên cho trước/app";

describe('Calculator', () => {
    test(' add two numbers', () => {
        const number1 = 1;
        const number2 = 2;
        const result = 3;
        expect (Calculator.add(number1, number2)).toBe(result);
    })
})