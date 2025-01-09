public class Attack{
    private String name;
    private int damageAmount;

    // Constructors
    public Attack(String name, int damageAmount){   
        if (damageAmount< 5 || damageAmount > 25){
            throw new IllegalArgumentException("Damage amout must be between 5 and 25");
        }
        this.name = name;
        this.damageAmount = damageAmount;

    }

    //getter for name
    public String getName(){
        return name;
    }

    //getter for damage
    public int getDamageAmount(){
        return damageAmount;
    }






}