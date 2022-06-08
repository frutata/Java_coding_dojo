import java.util.ArrayList;

public class Order {
    public String name;
    public Double total;
    public Boolean ready;
    public ArrayList<Item> items;
    public Order(){
        items = new ArrayList<Item>();
        total = 0.0;
        ready = false;
    }
}
