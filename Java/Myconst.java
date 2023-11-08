class Human
{
    int a;
    int b;

    public Human(){ //Default Constructor
        a=10;
        b=20;
    }

    public Human(int a, int b) { //Parametarized Constructor
        this.a = a;
        this.b = b;
    }
}

public class Myconst
{
    public static void main(String[] args) {
        Human human_1=new Human();
        Human human_2=new Human(20,30);
        System.out.println(human_1.a);
        System.out.println(human_1.b);
        System.out.println(human_2.a);
        System.out.println(human_2.b);
    }
}
