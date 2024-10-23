class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance
        # don't worry about user info here; we'll involve the User class soon

    def deposit(self, amount):
        self.balance += amount
        print("Balance after deposit = ",self.balance)
        return self

    def withdrawl(self, amount):
        if self.balance<amount:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= amount - 5
            print("Balance after withdrawl and charge: " ,self.balance)
            return self
        else:
            self.balance -= amount
            print("Balance after withdrawl : " ,self.balance)
        return self

    def display_account_info(self):
        print( "Your current balance : " ,self.balance)
        return self

    def yield_interest(self):
        if self.balance < 0:
            print("Insufficient funds")
            return self
        else :
            self.balance = self.balance+  self.balance*self.int_rate
            print("Balance after yield interest : " ,self.balance)
            return self


class User:
    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.account=BankAccount(0.05,1000)

    def user_account(self, name):
        if name = "farouk":
            self.name = 
        self.name = name 
        return self.name

    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self

    def make_withdrawl(self, amount):
        self.account.withdrawl(amount)
        return self

    def display_user_balance(self):
        self.account.display_account_info()
        return self


farouk = User("farouk", "ghezal", 24)
malek = User("malek", "lazreg", 18)
user_account(farouk).make_deposit(250).make_withdrawl(250).display_user_balance()