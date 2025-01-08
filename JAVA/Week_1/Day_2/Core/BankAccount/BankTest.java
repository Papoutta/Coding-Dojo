public class BankTest {
    public static void main(String[] args) {
        // Create 3 bank accounts
        BankAccount account1 = new BankAccount();
        BankAccount account2 = new BankAccount();
        BankAccount account3 = new BankAccount();

        // Deposit
        account1.deposit(100.0, "checking");
        account1.deposit(100.0, "savings");
        // account2.deposit(200.0, "savings");
        // account3.deposit(50.0, "checking");
        // Withdrawal
        account1.withdraw(30.0, "checking");
        account1.withdraw(50.0, "savings");
        // account2.withdraw(50.0, "savings");
        // account3.withdraw(80.0, "savings");
        // Static
        System.out.println("\nNumber of bank accounts: " + BankAccount.getAccounts());
        System.out.println("\nTotal money across all accounts: $" + BankAccount.getTotalMoney());
        System.out.println("\nGet account1 number: " + account1.getAccountNumber());
        System.out.println("\nGet new Account number : " + new BankAccount().generateAccountNumber());
    }
}