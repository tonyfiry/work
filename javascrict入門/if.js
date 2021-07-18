var num1;
var num2;
var num3;
// if(num1>=num2 && num1>=num3){
//     document.write(num1);
// }
// else if(num2>=num1 && num2>=num3){
//     document.write(num2);
// }
// else{
//     document.write(num3);
// }

function max_num(num1,num2,num3){
    if(num1>=num2 && num1>=num3){
         return num1;
 }
    else if(num2>=num1 && num2>=num3){
        return num2;
 }
    else{
        return num3;
    }
}
document.write(max_num(20,80,70)); 