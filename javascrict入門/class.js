// class Coke{
//     constructor (kcal,year,location){
           // 需要constructor的定義出來
//         this.kcal = kcal;
//         this.year = year;
//         this.location = location;
//     }
//     Coke_age(){
            //並呼叫出來;
//         return 2021 - this.year;
//     }
// }

// var Coke1 = new Coke(37,2000,"USA");
// document.write(Coke1.year);

class Actor{
    constructor (name,debut_time,Masterpiece){
            this.name = name;
            this.debut_time = debut_time;
            this.Masterpiece = Masterpiece;
    }
    Actor_debut_time(){
        return 2021 - this.debut_time;
    }
}

var Actor1 = new Actor("daft punk",1997,"《家庭作業》");
document.write(Actor1.Actor_debut_time());