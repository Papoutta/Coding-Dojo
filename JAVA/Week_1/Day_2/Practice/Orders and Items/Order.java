import java.util.ArrayList;

public class Order {
        private String name;
        private ArrayList<Item> items = new ArrayList<>();
        private double total;
        private boolean ready;

        public Order(){};

    public String getName(){
        return this.name;
    }

    public Double getTotal(){
        return this.total;
    }

    public ArrayList<Item> getItems(){
        return this.items;
    }

    public boolean getReady(){
        return this.ready;
    }

    public void setName(String name){
        this.name = name;
    }

    public void setTotal(Double total){
        this.total = total;
    }

    public void setItems(ArrayList<Item> items){
        this.items = items;
    }

    public void setReady(boolean ready){
        this.ready = ready;
    }
}