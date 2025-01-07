import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
    
        // Menu items

        Item item1 = new Item();
        item1.setName("mocha");
        item1.setPrice(3.25);

        Item item2 = new Item();
        item2.setName("latte");
        item2.setPrice(4.5);

        Item item3 = new Item();
        item3.setName("drip coffee");
        item3.setPrice(2.15);

        Item item4 = new Item();
        item4.setName("capuccino");
        item4.setPrice(3.5) ;



        Order order1 = new Order();
        order1.setName("Cindhuri");

        Order order2 = new Order();
        order2.setName("Jimmy");

        Order order3 = new Order();
        order3.setName("Noah");

        Order order4 = new Order();
        order4.setName("Sam");


        ArrayList<Item> listItems = new ArrayList<>();
    
        listItems.add(item1);
        order2.setItems(listItems);
        order2.setTotal(order2.getTotal()+item1.getPrice());

        listItems.add(item4);
        order3.setItems(listItems);
        order3.setTotal(order3.getTotal()+item4.getPrice());

        listItems.add(item2);
        order4.setItems(listItems);
        order4.setTotal(order4.getTotal()+item2.getPrice());

        order1.setReady(true);

        listItems.add(item2);
        order4.setItems(listItems);
        order4.setTotal(order4.getTotal()+item2.getPrice()*2);

        order2.setReady(true);

        System.out.printf("Name: %s\n", order1.getName());
        System.out.printf("Total: %s\n", order1.getTotal());
        System.out.printf("Ready: %s\n", order1.getReady());

        System.out.printf("************\n");

        System.out.printf("Name: %s\n", order2.getName());
        System.out.printf("Total: %s\n", order2.getTotal());
        System.out.printf("Ready: %s\n", order2.getReady());

        System.out.printf("************\n");

        System.out.printf("Name: %s\n", order3.getName());
        System.out.printf("Total: %s\n", order3.getTotal());
        System.out.printf("Ready: %s\n", order3.getReady());

        System.out.printf("************\n");
    
        System.out.printf("Name: %s\n", order4.getName());
        System.out.printf("Total: %s\n", order4.getTotal());
        System.out.printf("Ready: %s\n", order4.getReady());
    }
}
