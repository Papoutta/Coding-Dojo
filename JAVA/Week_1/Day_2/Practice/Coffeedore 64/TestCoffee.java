public class TestCoffee {
        public static void main(String[] args) {
            CoffeeKiosk kiosk= new CoffeeKiosk();
        kiosk.addMenuItem("direct",2.5);
        kiosk.addMenuItem("express",1.5);
        kiosk.addMenuItem("cappucin",2);
        kiosk.addMenuItem("latte",4);
        kiosk.displayMenu();
        kiosk.newOrder();
        }
}