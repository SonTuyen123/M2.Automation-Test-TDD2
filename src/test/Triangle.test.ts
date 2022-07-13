import {Triangle} from "../[Bài tập] Phân loại tam giác/Triangle";

test('Case 01: Is not Triangle ',()=>{
    let a :number = 0;
    let b :number = 1;
    let c :number = 2;
    let message = 'Is not Triangle'
    let expected = new Triangle();
    expect(expected.check(a,b,c)).toEqual(message)
});
test('Case 02: Is not Triangle ',()=>{
    let a :number = 1;
    let b :number = 0;
    let c :number = 2;
    let message = 'Is not Triangle'
    let expected = new Triangle();
    expect(expected.check(a,b,c)).toEqual(message)
});
test('Case 03: Is not Triangle ',()=>{
    let a :number = 1;
    let b :number = 2;
    let c :number = 0;
    let message = 'Is not Triangle'
    let expected = new Triangle();
    expect(expected.check(a,b,c)).toEqual(message)
});
test('Case 04: Is Triangle ',()=>{
    let a :number = 2;
    let b :number = 3;
    let c :number = 4;
    let message = 'Is Triangle'
    let expected = new Triangle();
    expect(expected.check(a,b,c)).toEqual(message)
});
test('Case 05: Is Triangle đều ',()=>{
    let a :number = 3;
    let b :number = 3;
    let c :number = 3;
    let message = 'Is Triangle đều'
    let expected = new Triangle();
    expect(expected.check(a,b,c)).toEqual(message)
});
test('Case 06: Is Triangle cân ',()=>{
    let a :number = 2;
    let b :number = 2;
    let c :number = 3;
    let message = 'Is Triangle cân'
    let expected = new Triangle();
    expect(expected.check(a,b,c)).toEqual(message)
});
test('Case 07: Is Triangle vuông ',()=>{
    let a :number = 3;
    let b :number = 4;
    let c :number = 5;
    let message = 'Is Triangle vuông'
    let expected = new Triangle();
    expect(expected.check(a,b,c)).toEqual(message)
});
test('Case 07: Is Triangle vuông cân ',()=>{
    let a :number = 1;
    let b :number = 1;
    let c :number = Math.sqrt(Math.pow(b, 2) + Math.pow(a, 2));
    let message = 'Is Triangle vuông cân'
    let expected = new Triangle();
    expect(expected.check(a,b,c)).toEqual(message)
});




