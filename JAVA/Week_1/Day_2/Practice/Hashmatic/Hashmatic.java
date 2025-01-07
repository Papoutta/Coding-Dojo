import java.util.HashMap;
import java.util.Set;

public class Hashmatic {
    public static void main(String[] args){
        HashMap<String, String> trackList = new HashMap<>();
        trackList.put("Song 1", "LAAAA LAAA LAAA 1");
        trackList.put("Song 2", "LAAAA LAAA LAAA 2");
        trackList.put("Song 3", "LAAAA LAAA LAAA 3");
        trackList.put("Song 4", "LAAAA LAAA LAAA 4");
        System.out.println(trackList.get("Song 4"));

        Set<String> keys = trackList.keySet();
        for(String key:keys){
            System.out.format(key +":"+ trackList.get(key)+"\n"); 
        }
    }
}