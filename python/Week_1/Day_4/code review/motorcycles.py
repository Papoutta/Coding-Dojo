from vehicles import Vehicle

class Motorcycle(Vehicle):
    def __init__(self, make, model, year, type_of_handlebar):
        super().__init__(make, model, year)
        self.type_of_handlebar = type_of_handlebar

    def display_info(self):
        super().display_info()
        print(f"Type of handlebar: {self.type_of_handlebar}")