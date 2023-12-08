class A extends Thread{
    public void run(){
        for(int i=1;i<100;i++){
            System.out.println("hii");
            try {
                Thread.sleep(10);
            } catch (Exception e) {
                System.out.println(e);
                
            }
            
        }
    }
}

class B extends Thread{
    public void run(){
        for(int i=1;i<100;i++){
            System.out.println("Bye");
            try {
                Thread.sleep(10);
            } catch (Exception e) {
                System.out.println(e);
                
            }
        }
    }
}

public class thread {
    public static void main(String[] args) {
        A a =new A();
        B b =new B();
        a.setPriority(Thread.MAX_PRIORITY-1);
        a.start();
        b.start();
    }
}
