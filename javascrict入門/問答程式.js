var problem =[
    {
        prompt:"請問奇異果是怎麼顏色的?(a)白色\n(b)綠色(c)藍色\n(d)黑色",
        answer:"b"
    },
    {
        prompt:"請問草莓是怎麼顏色的?(a)白色\n(b)綠色(c)藍色\n(d)紅色",
        answer:"d"
    },
    {
        prompt:"請問巧克力是怎麼顏色的?(a)白色\n(b)黃色(c)藍色\n(d)咖啡色",
        answer:"d"
    }
]
var score = 0;
for(var i =0;i<problem.length;i++){
    var input = prompt(problem[i].prompt);
    if(input == problem[i].answer){
        score++;
        alert("恭喜答對了");
    }
    else{
        alert("答錯了");
    }
}
alert("總共答對"+score+"題");



