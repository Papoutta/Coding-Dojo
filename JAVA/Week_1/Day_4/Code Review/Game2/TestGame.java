public class TestGame{
    public static void main(String[] args) {
        System.out.println("Welcome to GameAttack!");
        // get the fighter nameand create a new instance
        System.out.print("Enter the name of your fighter: ");
        String fighterName = System.console().readLine();
        Fighter fighter = new Fighter(fighterName);

        // create an enemy and add three attacks to it
        Enemy enemy = new Enemy("Goblin");
        enemy.addAttack(new Attack("Slash", 20));
        enemy.addAttack(new Attack("Stab", 25));
        enemy.addAttack(new Attack("Punch", 15));

        //Game loop
        while (fighter.getHealth() > 0 && enemy.getHealth() > 0){
            System.out.println("\nYour Turn ! Choose an attack : ");
            fighter.displayAttacks();
            System.out.print("Enter the number of your attack : ");
            int choice = Integer.parseInt(System.console().readLine());
            fighter.attack(choice -1, enemy);

            if (enemy.getHealth() <=0){
                System.out.println("YOU WIN !");
                break;
            }

            //Enemy's turn
            enemy.randomAttack(fighter);

            if (fighter.getHealth() <=0){
                System.out.println("You lost :(");
                break;
            }
        }

        // ask the player if he want to play again
        System.out.println("Play again ?");
        String again = System.console().readLine();
        if(again.equalsIgnoreCase("yes")){

        main(args);
        }
        else{

        System.out.println("Thank You for playing");
        }


    }
}