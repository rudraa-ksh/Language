class overload
{
    void area(int a,int b)
    {
        System.out.println("area of rectangle:"+a*b);

    }
    int area(int a)
    {
        return a*a;

    }
    double area(double r)
    {
    return 3.14*r*r;
    }
    double area(double b,double h)
    {
        return 0.5*b*h;
    }
    public static void main(String args[])
    {
        
        overload ol=new overload();
        ol.area(3,4);
        ol.area(5);
        System.out.println("Area of square:"+ol.area(5));
        ol.area(10.1);
        System.out.println("area of circle :"+ol.area(10.1));
        ol.area(10.1,30.1);
        System.out.println("area of triangle  :"+ol.area(10.1,30.1));
    }
}


