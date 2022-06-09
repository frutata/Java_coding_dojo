import java.util.ArrayList;

public class TestOrders {
    public static void main(String[] args) {
    
        //menu items
        Item item1 = new Item("Cappucino", 4.0);
        Item item2 = new Item("Mocha", 7.0);
        Item item3 = new Item("Latte", 6.5);
        Item item4 = new Item("Drip Coffee", 5.0);

        //orders for unspecified guests
        Order order1 = new Order();
        Order order2 = new Order();

        //orders for specific guests
        Order order3 = new Order("JP");
        Order order4 = new Order("Kelly");
        Order order5 = new Order("Tyler");

        //adding items to orders
        order1.addItems(item1);
        order1.addItems(item3);

        order2.addItems(item2);
        order2.addItems(item3);

        order3.addItems(item4);
        order3.addItems(item1);

        order4.addItems(item3);
        order4.addItems(item4);

        order5.addItems(item1);
        order5.addItems(item2);

        //setting order 1 ready to true
        order3.setReady(true);

        //checking the status of the first two orders
        System.out.println(order1.getStatusMessage());
        System.out.println(order3.getStatusMessage());
        
        //testing the getOrderTotal method
        System.out.println(order3.getOrderTotal());

        //testing the display method
        order3.display();
    }
}
