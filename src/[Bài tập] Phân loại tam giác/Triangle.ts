export  class Triangle{

    check(a: number, b: number, c:number){
       if(this.isTriangle(a, b, c) ){
           if(this.isTriangleDeu(a, b, c)){
               return "Is Triangle đều"
           }
           if(this.isTriangleCan(a, b, c)){
               if(this.isTriangleVuong(a, b, c)){
                   return "Is Triangle vuông cân"
               }
               return "Is Triangle cân"
           }

           if(this.isTriangleVuong(a, b, c)){
               return "Is Triangle vuông"
           }
           return "Is Triangle"
       }
        if(this.isNotTriangle(a, b, c)){
        return "Is not Triangle"
      }
    }

    private isTriangleVuong(a: number, b: number, c: number) {
        return a == Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2)) ||
               b == Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2)) ||
               c == Math.sqrt(Math.pow(b, 2) + Math.pow(a, 2));
    }

    private isTriangleCan(a: number, c: number, b: number) {
        return a == c || b == c || a == b;
    }

    private isTriangleDeu(a: number, b: number, c: number) {
        return a == b && b == c;
    }

    private isTriangle(a: number, b: number, c: number) {
        return a + b > c && b + c > a && c + a > b;
    }

    private isNotTriangle(a: number, b: number, c: number) {
        return a == 0 || b == 0 || c == 0;
    }
}