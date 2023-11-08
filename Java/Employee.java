class Emp{
    int salary;
    private String name;

    public void setName(String name) {
        this.name = name;
    }
    public int getSalary() {
        return salary;
    }
    public String getName() {
        return name;
    }
}
public class Employee {
    public static void main(String[] args) {
        Emp Emp1 = new Emp();
        Emp1.setName("Rudra");
        Emp1.salary=250000;
        System.out.println(Emp1.getName());
        System.out.println(Emp1.getSalary());
    }
}
