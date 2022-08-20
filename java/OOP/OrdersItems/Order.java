import java.util.ArrayList;

public class Order {
    private String name;
    private boolean ready;
    private ArrayList<Item> items;

    public Order(){
        this.name = "guest";
        this.ready = false;
        items = new ArrayList<Item>();
    }

    public Order(String name){
        this.name = name;
        this.ready = false;
        items = new ArrayList<Item>();
    }

    public String getName(){
        return this.name;
    }

    public boolean getReady(){
        return this.ready;
    }

    public ArrayList<Item> getItems(){
        return items;
    }

    public void setName(String name){
        this.name = name;
    }

    public void setReady(boolean ready){
        this.ready = ready;
    }

    public void setItems(ArrayList<Item> items){
        this.items = items;
    }

    public void addItems(Item item){
        this.items.add(item);
    }

    public String getStatusMessage(){
        if(this.ready == true){
            return "Your order is ready.";
        }
        else{
            return "Thank you for waiting. Your order will be ready soon";
        }
    }
    public double getOrderTotal(){
        double total = 0.0;
        for(Item i: this.items){
            total += i.getPrice();
        }
        return total;
    }

    public void display(){
        System.out.printf("Order Name: " + this.name + " ");
        for(Item i: this.items){
            System.out.println(i.getName() + " - Price: $" + i.getPrice());
        }
        System.out.println("Total: $" + this.getOrderTotal());
    }
}
