public class Table {
    static void table(){
        for(int i=1;i<11;i++){
            for(int j=1;j<11;j++){
                System.out.println(i+"x"+j+"="+i*j);
            }
        System.out.println(" ");
        }
    }
    static void pattern(){
        for (int i=0; i<4; i++){
            for (int j=0; j<=i; j++){
                System.out.print("*");
            }
            System.out.println("");
        }
    }

    static int recursive(int n){
        if(n==1){
            return 1;
        }
        return n + recursive(n-1);
    }

    static void r_pattern(int  n){
        if (n!=0){
            r_pattern(n-1);
            for (int j=1; j<=n; j++){
                System.out.print("*");
            }
            System.out.println("");
        }
    }
    public static void main(String[] args) {
        //table();
        //pattern();
        //System.out.println(recursive(10));
        r_pattern(5);
    }
}
