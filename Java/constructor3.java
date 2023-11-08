class constructor3
 {
    String name;
    int ram;
    String core;
    String model;
    int storage;
    int battery;
    int camera;
    
    constructor3() 
    {
        name = "Samsung";
        ram = 8;
        core = "Dual core";
        model = "A23";
        storage = 128;
        battery = 6000;
        camera = 1;
    }
    constructor3 (String name,int ram,String model,int storage,int battery)
    {
        this.name=name;
        this.ram=ram;
        this.model=model;
        this.storage=storage;
        this.battery=battery;
    }
    constructor3 (String name,int ram,String model,int storage,int battery,int camera)
    {
        this.name=name;
        this.ram=ram;
        this.model=model;
        this.storage=storage;
        this.battery=battery;
        this.camera=camera;
    }
    constructor3 (constructor3 m)
    {
        this.name=m.name;
        this.ram=m.ram;
        this.model=m.model;
        this.storage=m.storage;
        this.battery=m.battery;
        this.camera=m.camera;
    }
    public static void main(String args[])
    {
        constructor3 m1=new constructor3();
        System.out.println("Values Initialized by Default constructor");
        System.out.println("name:"+m1.name);
        System.out.println("RAM:"+m1.ram); 
        System.out.println("model:"+m1.model);
        System.out.println("storage:"+m1.storage); 
        System.out.println("battery:"+m1.battery); 
        System.out.println("----------------------");
        constructor3 m2=new constructor3("Nokia",16,"f12",256,5000);
        System.out.println("Values Initialized by Parameterized constructor");
        System.out.println("name:"+m2.name);
        System.out.println("RAM:"+m2.ram); 
        System.out.println("model:"+m2.model);
        System.out.println("storage:"+m2.storage); 
        System.out.println("battery:"+m2.battery); 
        System.out.println("----------------------");
        constructor3 m3=new constructor3("Motorola",32,"sd45",128,6000,64);
        System.out.println("Values Initialized by 2nd Parameterized constructor");
        System.out.println("name:"+m3.name);
        System.out.println("RAM:"+m3.ram); 
        System.out.println("model:"+m3.model);
        System.out.println("storage:"+m3.storage); 
        System.out.println("battery:"+m3.battery); 
        System.out.println("camera:"+m3.camera); 
        System.out.println("----------------------");
        constructor3 m4=new constructor3(m2);
        System.out.println("Values Initialized by Copy constructor");
        System.out.println("name:"+m4.name);
        System.out.println("RAM:"+m4.ram); 
        System.out.println("model:"+m4.model);
        System.out.println("storage:"+m4.storage); 
        System.out.println("battery:"+m4.battery); 
        System.out.println("----------------------");
    }
}