public class threadlambda {
    public static void main(String[] args) {
        Runnable a = () ->
        {
            for (int i = 1; i <5; i++) {
                System.out.println("Hii");
                try {Thread.sleep(10);} catch (Exception e) {System.out.println(e);}
            }
        };
        Runnable b = () ->{
            for (int i = 1; i <5; i++) {
                System.out.println("Byee");
                try {Thread.sleep(10);} catch (Exception e) {System.out.println(e);}
            }
        };

        Thread T1 = new Thread(a);
        Thread T2 = new Thread(b);

        T1.start();
        T2.start();
    }
}
