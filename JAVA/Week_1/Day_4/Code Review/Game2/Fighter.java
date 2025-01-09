
import java.util.ArrayList;

public class Fighter{ 

    private String name;
    private int health;
    private ArrayList<Attack> attackList;
    

    //Constructor
    public Fighter(String name){
        this.name=name;
        this.health=100;
        this.attackList= new ArrayList<>();
        this.attackList.add(new Attack("Punch", 20));
        this.attackList.add(new Attack("Kick", 15));
        this.attackList.add(new Attack("Tackle", 25));
    }

    //getters
    public String getName(){
        return name;
    }

    public int getHealth(){
        return health;
    } 

    // method to display the attacks
    public void displayAttacks(){
        for ( Attack attack : attackList){
            System.out.println(attack.getName()+" - Damage : " + attack.getDamageAmount());
        }
    }

    // Method to perform an attack on the enemy
    public void attack(int index, Enemy enemy){
        if (index >+0 && index < attackList.size()){
            Attack chosenAttack = attackList.get(index);
            enemy.reduceHealth(chosenAttack.getDamageAmount());
            System.out.println("You used "+ chosenAttack.getName()+ "! Enemy health is "+ enemy.getHealth());
        }
    }

    //method to reduce the enemy's health

    public void reduceHealth(int amount){
        this.health -= amount;
        if (this.health < 0){
            this.health = 0;
        }
    }
}