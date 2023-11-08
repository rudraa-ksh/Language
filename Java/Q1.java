// A class that represents a person
class Person {
    private String name;
    private int age;

  // A constructor that takes name and age as parameters
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

  // A constructor that takes another person as a parameter and copies its values
    public Person(Person p) {
        this.name = p.name;
        this.age = p.age;
    }

  // A getter method for name
    public String getName() {
        return name;
    }

  // A getter method for age
    public int getAge() {
        return age;
    }
}

// A class that tests the copy constructor
class Q1 {
    public static void main(String[] args) {
        // Create a person object with name Alice and age 20
        Person p1 = new Person("Alice", 20);

        // Print the values of p1
        System.out.println("Name: " + p1.getName());
        System.out.println("Age: " + p1.getAge());

        // Create another person object by copying the values of p1
        Person p2 = new Person(p1);

        // Print the values of p2
        System.out.println("Name: " + p2.getName());
        System.out.println("Age: " + p2.getAge());
    }
}

