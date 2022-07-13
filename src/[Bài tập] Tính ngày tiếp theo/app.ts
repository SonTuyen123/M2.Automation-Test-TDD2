export class calculatorByDate {

   private _day: number;
   private _month: number;
   private _year: number;
    constructor(day: number, month: number, year: number) {
        this._day = day;
        this._month = month;
        this._year = year;
    }
    get day(): number {
        return this._day;
    }

    set day(value: number) {
        this._day = value;
    }

    get month(): number {
        return this._month;
    }

    set month(value: number) {
        this._month = value;
    }

    get year(): number {
        return this._year;
    }

    set year(value: number) {
        this._year = value;
    }
    checkLeapYear(year: number) {
        if(year % 4 == 0){
            if(year % 100 == 0){
                return  false;
            }if(year % 400 == 0){
                return  true;
            }
        }
    }
    checkMonth() {
        return this.month < 13 && this.month > 0;
    }
    checkMonth31Day() {
      let month = this.month
        return month === 1||
            month === 12 ||
            month === 3 ||
            month === 5 ||
            month === 7 ||
            month === 8 ||
            month === 10;
    }
    checkMonth29Day() {
        let month = this.month
        return month === 4 ||
            month === 6 ||
            month === 9 ||
            month === 11;
    }
    check2(){

    }
    checkFebruaryLeapYear() {
        let year = this.year
        let day = this.day;
        if(day > 29 && this.month === 2 && !this.checkLeapYear(year)) {
            return false;
        }else if(day < 29 && this.month == 2 && !this.checkLeapYear(year)){
            return false;
        }else if(day === 29 && this.month == 2 && this.checkLeapYear(year)){
            return true;
        }


    }


}