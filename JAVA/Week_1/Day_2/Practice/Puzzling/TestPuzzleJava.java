import java.util.ArrayList;
import java.util.Random;
public class TestPuzzleJava {
    
	public static void main(String[] args) {
		Puzzling generator = new Puzzling();
		ArrayList<Integer> randomRolls = generator.getTenRolls();
		System.out.println(randomRolls);
		
    	String randdomLetter = generator.getRandomLetter();
        System.out.println(randdomLetter);

        String randomPassword = generator.generateRandomPassword();
        System.out.println(randomPassword);

        ArrayList<String> passwordList = generator.getNewPasswordSet(2);
		System.out.println(passwordList);
	}
}
