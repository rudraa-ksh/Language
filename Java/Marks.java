
import java.util.Scanner;
import java.lang.Math;

public class Marks {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter your marks:");
        System.out.print("Subject 1: ");
        float sub1= input.nextFloat();
        System.out.print("Subject 2: ");
        float sub2=input.nextFloat();
        System.out.print("Subject 3: ");
        float sub3= input.nextFloat();
        System.out.print("Subject 4: ");
        float sub4= input.nextFloat();
        System.out.print("Subject 5: ");
        float sub5= input.nextFloat();
        input.close();
        System.out.print("Percentage: "+Math.round(((sub1+sub2+sub3+sub4+sub5)/500)*100));
    }
}
