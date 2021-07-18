//函式用法
function num(num1,num2){
    //用函式定義出來
    var num1;
    var num2;
    num1 = parseInt(num1);//轉換成整數
    num2 = parseInt(num2);//轉換成整數
     document.write(num1+num2);//然後兩個相加
     document.write("<br>");//換行
    return 10;
}
document.write(num(5,2));//並呼叫它數字是7,10