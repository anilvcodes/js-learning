class SuperHero {
    superHeroName = "max";
    location = "moon";

    constructor(location) {
        console.log("inside constructor");

        if (location) {
            this.location = location;
        }
    }

    getName() {
        return this.superHeroName;
    }

    getLocation() {
        return this.location;
    }
}

const hero = new SuperHero("the vinchi");
const locationFromEarth = new SuperHero("mongalam");


console.log(hero.getLocation());
console.log(hero.getName());


//2nd 

class customer{
    constructor(name ,food){
        this.name=name ;
        this.food=food;
    }

    takeOrder(){
        console.log( this.name+"order"+this.food);
    }

    cookFood(){
        console.log(this.name +"cooked food"+this.food)
    }
     serveFood(){
        console.log(this.name +" serve food" +this.food)
     }
}
const customer1= new customer("anil","burger")
customer1.takeOrder();
customer1.cookFood();
customer1.serveFood();
const customer2= new customer("aniiil","burgggger")
customer2.takeOrder();
customer2.cookFood();
customer2.serveFood();