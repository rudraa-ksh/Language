class Human
{
    private String name;
    private int age;
    
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

}
public class Encasulation
{
    public static void main(String[] args) {
        Human human1 = new Human();
        human1.setAge(19);;
    System.out.println(human1.getAge());
    }

}
