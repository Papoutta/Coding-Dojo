import java.util.ArrayList;
import java.util.Random;

public class Enemy{
    private String name;
    private int health;
    private ArrayList<Attack> attackList;

    //constructor
    public Enemy(String name){
        this.name = name;
        this.health = 100;
        this.attackList = new ArrayList<>(); // initialise attackList
    }

    //getters
    public String getName(){
        return name;
    }

    public int getHealth(){
        return health;
    } 

    // method to perform a random attack on a fighter
    public void randomAttack(Fighter fighter){
        if(!attackList.isEmpty()){
            Random random = new Random();
            int index = random.nextInt(attackList.size());
            Attack chosenAttack = attackList.get(index);
            fighter.reduceHealth(chosenAttack.getDamageAmount());
            System.out.println("Enemy used "+ chosenAttack.getName()+"! Your health is "+ fighter.getHealth());
        }
    }


    //method to reduce the enemy's health

    public void reduceHealth(int amount){
        this.health -= amount;
        if (this.health < 0){
            this.health = 0;
        }
    }

    public void addAttack(Attack attack){
        attackList.add(attack);
    }
}