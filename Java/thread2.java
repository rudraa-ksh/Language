// class A implements Runnable{
//     public void run(){
//         for (int i = 1; i <5; i++) {
//             System.out.println("Hii");
//             try {
//                 Thread.sleep(10);
//             } catch (Exception e) {
//                 System.out.println(e);
//             }
//         }
//     }
// }

class B implements Runnable{
    public void run(){
        for (int i = 1; i <5; i++) {
            System.out.println("Byee");
            try {
                Thread.sleep(10);
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }
}

public class thread2 {
    public static void main(String[] args) {
        Runnable a = new Runnable() {
            public void run(){
                for (int i = 1; i <5; i++) {
                    System.out.println("Hii");
                    try {
                        Thread.sleep(10);
                    } catch (Exception e) {
                        System.out.println(e);
                    }
                }
            }
        };
        Runnable b = new B();

        Thread T1 = new Thread(a);
        Thread T2 = new Thread(b);

        T1.start();
        T2.start();
    }
}
