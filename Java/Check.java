
import java.util.Scanner;

public class Check {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Give Input: ");
        System.out.println(scan.hasNextInt());
        scan.close();
    }
}
