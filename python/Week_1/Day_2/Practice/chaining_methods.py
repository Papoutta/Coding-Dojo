class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0 


    def display_info(self):
        print("")
        print(f"First name: {self.first_name}")
        print(f"Last name: {self.last_name}")
        print(f"Email: {self.email}")
        print(f"Age: {self.age}")
        print(f"Member: {self.is_rewards_member}")
        print(f"Current Points: {self.gold_card_points}")
        print("")
        return self

    def enroll(self):
        self.is_rewards_member = True
        self.gold_card_points = 200
        return self

    def spend_points(self, amount):
        if (self.gold_card_points>amount):
            print(f"Successfully spent {amount} points. Remaining points: {self.gold_card_points - amount}")
            self.gold_card_points -= amount
            return self
        else :
            print("not enough points")

farouk=User("farouk", "ghezal", "fghezal@gmail.com", 24)
farouk.enroll().spend_points(50).display_info()

jhon=User("jhon", "smith", "jhon@gmail.com", 40)
jhon.enroll().spend_points(80).display_info()
