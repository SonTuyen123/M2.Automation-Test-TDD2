import {FizzBuzz} from "../[Bài tập] chương trình tính kết quả FizzBuzz/FizzBuzz";

test('Case 01:',()=>{
    let a :number = 3;
    let message = 'xuất ra một chuỗi'
   let fizzbuzz =new FizzBuzz();
    expect(fizzbuzz.check(a)).toEqual(message)
});
test('Case 02:',()=>{
    let a :number = 3;
    let message = "Fizz"
    let fizzbuzz =new FizzBuzz();
    expect(fizzbuzz.check(a)).toEqual(message)
});