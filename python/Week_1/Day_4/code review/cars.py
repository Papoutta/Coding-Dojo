from vehicles import Vehicle

# child class of the parent class vehicle 
class Car(Vehicle):
    #constructor of the class Car
    def __init__(self, make, model, year, number_of_doors):
        #instance attributes of the parent class
        super().__init__(make, model, year) #call the constructor of the parent class
        #instance attributes
        self.number_of_doors = number_of_doors

    # instance method
    # override the parent method display(info)
    def display_info(self):
        super().display_info()
        print(f"Number of doors : {self.number_of_doors}")