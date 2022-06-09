public class BankAccount {

    private static int numAccounts=0; //doesn't need to be put in constructor
    private static double totalMoney=0.0D; //total money owned between all accounts

    private double checking;
    private double savings;
    private Long id;

    //default
    public BankAccount(){
        this.checking=0;
        this.savings=0;
        //wants to increase numAccounts everytime an account is created
        BankAccount.numAccounts++;
        this.id=genId();
    }

    public BankAccount(double checking, double savings){
        this.checking = checking;
        this.savings = savings;
        BankAccount.numAccounts++;
        BankAccount.totalMoney += checking+savings;
        this.id=genId();
    }

    public Long genId(){
        //this is another way to do what the string version does below:
        // double rnd = Math.random();
        // Long _id = (long) (100000000.0D + (rnd*999999999-100000000.0D));
        // return _id;
        //string version
        String _id="";
        for(int i=0;i<9;i++){
            long num= (long) Math.floor(Math.random()*9);
            _id+=num+"";
        }
        return Long.parseLong(_id);
    }

    public void Deposit(Double amount, Boolean accountType){
        if(accountType){
            savings+=amount;
        }
        else{
            checking+=amount;
        }
        totalMoney+=amount;
    }

    public double Withdraw(Double amount, Boolean accountType){
        if(accountType){
            if(savings-amount<0){
                System.out.println("Insufficient funds!");
                return 0;
            }
            savings-=amount;
        }
        else{
            if(checking-amount<0){
                System.out.println("Insufficient funds!");
                return 0;
            }
            checking-=amount;
        }
        return amount;
    }

    public double getTotal(){
        return checking+savings;
    }

    public double getChecking(){
        return checking;
    }

    public void setChecking(double checking){
        this.checking = checking;
    }

    public double getSavings(){
        return savings;
    }
    
    public void setSavings(double savings){
        this.savings = savings;
    }

    public static int getNumAccounts(){
        return numAccounts;
    }

    public static double getTotalMoney(){
        return totalMoney;
    }

}