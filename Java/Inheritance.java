class Calc{
    public int add(int a, int b){
        return a+b;
    }
    
    public int sub(int a, int b){
        return a-b;
    }
}

class AdvCalc extends Calc{
    public int mul(int a, int b){
        return a*b;
    }

    public int div(int a, int b){
        return a/b;
    }
}

class VeryAdvCalc extends AdvCalc{
    public int increment(int a){
        return ++a;
    }

    public int decrement(int a){
        return --a;
    }
}
public class Inheritance {
    public static void main(String[] args) {
        VeryAdvCalc obj =new VeryAdvCalc();
        obj.add(25, 256);
    }
}
