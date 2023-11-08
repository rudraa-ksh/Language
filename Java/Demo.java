class Calculator 
{
    public int add(int a, int b){  //methode
        int result = a + b;
        return result;
    }
}

public class Demo {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        int result=calc.add(4,5);
        System.out.println(result);
    }
}