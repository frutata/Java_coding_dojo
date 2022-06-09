public class TestBank{
    public static void main(String[] args){
        
        BankAccount account1=new BankAccount();
        BankAccount account2=new BankAccount(100.23D,4000.0D);

        account1.Deposit(400.0D, false);
        System.out.printf("Checking account1: "+ account1.getChecking() +" | ");
        System.out.printf("Savings account1: "+ account1.getSavings() +" | ");
        
        account2.Deposit(123.456, true);
        System.out.printf("Checking account2: "+ account2.getChecking() +" | ");
        System.out.printf("Savings account2: "+ account2.getSavings() +" | ");

        account1.Withdraw(200.0D, false);
        System.out.printf("Checking account1: "+ account1.getChecking() +" | ");
        System.out.printf("Savings account1: "+ account1.getSavings() +" | ");

        account2.Withdraw(10000.0D, true);
        System.out.printf("Checking account2: "+ account2.getChecking() +" | ");
        System.out.printf("Savings account2: "+ account2.getSavings() +" | ");

    }
}