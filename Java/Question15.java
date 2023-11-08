class Animal {
    int legs = 2;

    public Animal(int legs){
        this.legs = legs;
    }

    public void walk() {
        System.out.println("Animal is walking");
    }

    public void eat() {
        System.out.println("Animal is eating his food");
    }
}


interface Pet {
    public abstract String getName();
    public abstract void setName(String name);
    public abstract void play();
}


class Spider extends Animal {

    public Spider() {
        super(4);
    }

    @Override
    public void eat() {
        System.out.println("Spider is eating an insect");
    }

}


class Cat extends Animal implements Pet {
    
    String name = "Cat";
    
    public Cat(String name) {
        super(4);
        this.name = name;
    } 

    public Cat() {
        super(4);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void play() {
        System.out.println(this.name + " is playing");
    }

    @Override 
    public void eat() {
        System.out.println(this.name+ " is eating a mouse");
    }
}

class Fish extends Animal implements Pet {

    String name = "Fish";

    public Fish() {
        super(0);
    }

    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name = name;
    }

    public void play() {
        System.out.println(this.name + " is playing in water");
    }

    @Override
    public void walk() {
        System.out.println(this.name + " is swimming in water");
    }

    @Override
    public void eat() {
        System.out.println(this.name + " is eating her food");
    }
}


public class Question15 {
    public static void main(String[] args) {
        Animal a = new Animal(4);
        Spider s = new Spider();
        Cat c = new Cat("Luna");
        Fish f = new Fish();

        System.out.println("\nAnimal :- ");
        a.walk();
        a.eat();

        System.out.println("\nSpider :- ");
        s.walk();
        s.eat();

        System.out.println("\nCat:- ");
        c.setName("ellie");
        System.out.println("Name of the Cat is " + c.getName());
        c.play();
        c.eat();

        System.out.println("\nFish");
        f.setName("JellyFish");
        System.out.println("the fish name is " + f.getName());
        f.play();
        f.walk();
        f.eat();
    }
}
