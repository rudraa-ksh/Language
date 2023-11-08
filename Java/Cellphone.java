class Phone{
    public String ring(){
        return "Ringing......";
    }

    public String vibrate(){
        return "Vibrating......";
    }
}

public class Cellphone {
    public static void main(String[] args) {
        Phone Mobile = new Phone();
        System.out.println(Mobile.ring());
        System.out.println(Mobile.vibrate());
    }
}
