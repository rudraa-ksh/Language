
import java.sql.*;

public class SQL{
    public static void main(String[] args) {
        try{
            String url="jdbc:mysql://localhost:3306/opju";
            String username="root";
            String password="rudraxcode";
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection(url,username,password);
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("Select * from sales");
        
            while(rs.next()){
                System.out.println(rs.getString(2));
            }
            con.close();
        }
        catch(Exception e){
            System.out.println(e);
        }
        
    }
}