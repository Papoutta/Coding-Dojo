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

    def enroll(self):
        self.is_rewards_member = True
        self.gold_card_points = 200

    def spend_points(self, amount):
        if (self.gold_card_points>amount):
            print(f"Successfully spent {amount} points. Remaining points: {self.gold_card_points}")
            self.gold_card_points -= amount
        else :
            print("not enough points")

farouk=User("farouk", "ghezal", "fghezal@gmail.com", 24)
farouk.display_info()
farouk.enroll()
farouk.display_info()
farouk.spend_points(100)
farouk.spend_points(50)
farouk.display_info()

jhon=User("jhon", "smith", "jhon@gmail.com", 40)
jhon.display_info()
jhon.enroll()
jhon.display_info()
jhon.spend_points(100)
jhon.spend_points(80)
jhon.display_info()
