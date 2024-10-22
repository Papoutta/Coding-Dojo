class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance
        # don't worry about user info here; we'll involve the User class soon

    def deposit(self, amount):
        self.balance += amount
        print("Balance = ",self.balance)
        return self

    def withdraw(self, amount):
        if self.balance<amount:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= amount - 5
            print("Balance after withdraw and charge: " ,self.balance)
            return self
        else:
            self.balance -= amount
            print("Balance after withdraw : " ,self.balance)
        return self

    def display_account_info(self):
        print(self.balance)
        return self

    def yield_interest(self):
        if self.balance < 0:
            print("Insufficient funds")
            return self
        else :
            self.balance = self.balance+  self.balance*self.int_rate
            print("Balance after yield interest : " ,self.balance)
            return self

farouk = BankAccount(0.1, 1000)
farouk.deposit(250).deposit(300).deposit(600).withdraw(2000).yield_interest().display_account_info()
print("#"*40)

jhon =BankAccount(0.15, 2376)
jhon.deposit(1000).deposit(300).withdraw(600).withdraw(600).withdraw(600).withdraw(600).yield_interest().display_account_info()