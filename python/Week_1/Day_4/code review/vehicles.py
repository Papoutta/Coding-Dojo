# parent class
class Vehicle :
    # constructor
    def __init__(self, make, model, year):
        # instance attributes
        self.make = make
        self.model = model
        self.year = year
    
    # instance method
    def display_info(self):
        print (f"vehicule info : {self.make} {self.model} {self.year}")