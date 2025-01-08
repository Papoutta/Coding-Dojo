import java.util.Random;

public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;
    private static int accounts = 0;
    private static double totalMoney = 0;
    private final String accountNumber;

    // CONSTRUCTOR
    public BankAccount() {
        this.checkingBalance = 0;
        this.savingsBalance = 0;
        this.accountNumber = generateAccountNumber();
        accounts++;
    }
    // GETTERS
    public double getCheckingBalance() {
        return checkingBalance;
    }
    public double getSavingsBalance() {
        return savingsBalance;
    }
    public static int getAccounts() {
        return accounts;
    }
    public static double getTotalMoney() {
        return totalMoney;
    }
    // METHODS
    public void deposit(double amount, String accountType) {
        if ("checking".equalsIgnoreCase(accountType)) {
            checkingBalance += amount;
        } else if ("savings".equalsIgnoreCase(accountType)) {
            savingsBalance += amount;
        }
        totalMoney += amount;
        displayBalance();
    }
    public void withdraw(double amount, String accountType) {
        if ("checking".equalsIgnoreCase(accountType) && checkingBalance >= amount) {
            checkingBalance -= amount;
        } else if ("savings".equalsIgnoreCase(accountType) && savingsBalance >= amount) {
            savingsBalance -= amount;
        } else {
            System.out.println("Insufficient funds for withdrawal.");
            return;
        }
        totalMoney -= amount;
        displayBalance();
    }
    public void displayBalance() {
        System.out.println("Checking Balance: $" + checkingBalance);
        System.out.println("Savings Balance: $" + savingsBalance);
        System.out.println("Total Balance: $" + (checkingBalance + savingsBalance));
    }
    // Ninja Bonus 1: Add account number
    public String getAccountNumber() {
        return accountNumber;
    }
    // Ninja Bonus 2: Create a private method for generating a random ten-digit account number
    public String generateAccountNumber() {
        Random random = new Random();
        StringBuilder accountNumber = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            accountNumber.append(random.nextInt(10));
        }
        return accountNumber.toString();
    }
}