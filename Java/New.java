class Library{
    String bookname;
    String author;
    String pubyear;
    int noofcopy;

    Library(String bookname, String author, String pubyear, int noofcopy){
        this.bookname = bookname;
        this.author = author;
        this.pubyear = pubyear;
        this.noofcopy = noofcopy;
    }
}

class Student extends Library {
    String name;
    String rollno;
    String sem;
    String branch;

    Student(String name, String rollno, String sem, String branch,String bookname, String author, String pubyear, int noofcopy){
        super(bookname, author, pubyear, noofcopy);
        this.name = name;
        this.rollno = rollno;
        this.sem = sem;
        this.branch = branch;
    }
}

class Professor extends Library {
    String name;
    String branch;
    String empid;

    Professor(String name,String branch, String empid, String bookname, String author, String pubyear, int noofcopy){
        super(bookname, author, pubyear, noofcopy);
        this.name = name;
        this.branch = branch;
        this.empid = empid;
    }
}


public class New {
    public static void main(String[] args) {
        Student s1 = new Student("Rudra", "63", "3", "CSE", "The power of Love", "Ranchor Das", "2007", 1);
        Professor p1 = new Professor("Asim", "CSE", "101","The Tower of Hanoi", "Arjun", "2023", 1);
        
        System.out.println("Student Details");
        System.out.println(s1.name);
        System.out.println(s1.rollno);
        System.out.println(s1.sem);
        System.out.println(s1.branch);
        System.out.println(s1.bookname);
        System.out.println(s1.author);
        System.out.println(s1.pubyear);
        System.out.println(s1.noofcopy);

        System.out.println("Professor Details");
        System.out.println(p1.name);
        System.out.println(p1.branch);
        System.out.println(p1.empid);
        System.out.println(p1.bookname);
        System.out.println(p1.author);
        System.out.println(p1.pubyear);
        System.out.println(p1.noofcopy);
    }
}