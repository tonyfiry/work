// var num1 = prompt("請輸入數字:");//num1 輸入數字;
// while(num1<=30){
//     num1++;//一直重複跑;
//     document.write(num1);//跑到30;
//     document.write("<br/>");//換行;   
// }

//密碼檢測模式;
// var possword = 1234;//possword設定成1234;
// while(possword != input){
//    var input = prompt("請輸入數字:");
//    //如果輸入錯誤，他就一直跑說請輸入數字:;
// }
// alert("登入成功");//成立的話，他就跟你說登入成功;


var possword = 32324;//possword設定成32324;
var input;
Original_count = 0;//原本設定是0;
Limit_count = 3;//讓它限制設3次;
out_of_limit = false;//預設沒開啟;

while(possword != input && !out_of_limit){
    Original_count++;
    if(Original_count<=Limit_count){
        input = prompt("請輸入數字:");
        //機會有3次;
    }
    else{
        out_of_limit = true;
        //答對就讓它執行
    }
}
if(out_of_limit){
    alert("抱歉，登入失敗");//超過3次就告訴你說"抱歉，登入失敗";
}
else{
    alert("恭喜，登入成功");//沒超過就告訴你說"恭喜，登入成功";
}

