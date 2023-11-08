public class constructor2
{
    String name;
    int empid;
    String dept;
    int salary;
    String post;
    String shift;
    String mobile;
    String addr;
    String gender;
    String Religion;
    String country;

    constructor2()
    {
        name="Shreeya";
        empid=77;
        dept="CSE";
        salary=50000;
        post="Student";
        shift="Morning";
        mobile="8602470239";
        addr="Raigarh";
        gender="Female";
        Religion="Hindu";
        country="India";
    }
    public static void main(String a[])
    {
        constructor2 c1=new constructor2();
        System.out.println("Name:"+c1.name);
        System.out.println("Employee ID::"+c1.empid);
        System.out.println("Department:"+c1.dept);
        System.out.println("Salary:"+c1.salary);
        System.out.println("post:"+c1.post);
        System.out.println("shift:"+c1.shift);
        System.out.println("Mobile number:"+c1.mobile);
        System.out.println("Address:"+c1.addr);
        System.out.println("Gender:"+c1.gender);
        System.out.println("Religion:"+c1.Religion);
        System.out.println("Country:"+c1.country);
    }
}
