import java.util.ArrayList;
import java.util.Scanner;
public class CafeUtil{

    public Integer getStreakGoal(){
        int sum = 0;
        for(int i=1; i<11; i++){
            sum += i;
        }
        return sum;
    }

    public double getOrderTotal(double[] prices){
        //sum needs to be double otherwise decimals won't show
        double sum = 0;
        for(int i=0; i < prices.length; i++){
            sum += prices[i];
            // System.out.println(sum);
        }
        return sum;
    }

    public void displayMenu(ArrayList<String> menuItems){
        for (int i = 0; i < menuItems.size(); i++){
            System.out.println(i + " " + menuItems.get(i));
        }
    }

    public void addCustomer(ArrayList<String> customers, Scanner scan){
        System.out.println("Please enter your name:");
        String userName = scan.nextLine();
        System.out.println("Hello, " + userName + "!");
        System.out.println("There are " + customers.size() + " people in fron of you");
        customers.add(userName);
    }
}