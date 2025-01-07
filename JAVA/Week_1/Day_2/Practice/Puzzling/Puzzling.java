import java.util.ArrayList;
import java.util.Random;

public class Puzzling {
    public ArrayList<Integer> getTenRolls() {
        ArrayList<Integer> random10 = new ArrayList<Integer>();
        Random rand = new Random();

        for (int i = 1; i <=10; i++) {
            random10.add(rand.nextInt(20) + 1);
        }

        return random10;
    }

    public String getRandomLetter() {
        Random rand = new Random();
        String allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String[] letter = new String[26];
        for (int i = 0; i < 26; i++) {
            letter[i] = String.valueOf(allLetters.charAt(i));
        }
        return letter[rand.nextInt(26)];
    }

    public String generateRandomPassword() {
        String password = "";
        for (int i = 0; i < 8; i++){
            password = password + getRandomLetter();
        }
        return password;
    }

    public ArrayList<String> getNewPasswordSet(int num){
        ArrayList<String> passwordList = new ArrayList<String>();
        for (int i = 0; i < num; i++){
            passwordList.add(generateRandomPassword());
        }
        return passwordList;
    }
}