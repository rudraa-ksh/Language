import java.io.InputStreamReader;
import java.io.FileOutputStream;
import java.io.IOException;

public class Streams {
    public static void main(String[] args) {

        // Using try-with-resources to automatically close the streams
        try (InputStreamReader fis = new InputStreamReader(System.in);
            FileOutputStream fos = new FileOutputStream("Person.txt")) {
            int bytesRead;
            // Read from the input file and write to the output file
            while ((bytesRead = fis.read()) != -1) {
                fos.write(bytesRead);
            }
            System.out.println("File copied successfully!");
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}
