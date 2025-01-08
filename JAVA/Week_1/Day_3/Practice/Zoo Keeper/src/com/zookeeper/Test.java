package com.zookeeper;

public class Test {

    public static void main (String[] args){
        Gorilla gorilla =new Gorilla();
        Bat bat =new Bat();
        gorilla.displayEnergy();
        gorilla.throwSomething();
        gorilla.displayEnergy();
        gorilla.climb();
        gorilla.displayEnergy();
        gorilla.eatBananas();
        gorilla.displayEnergy();
        
        System.out.println("\n*****************************");

        bat.displayEnergy();
        bat.fly();
        bat.displayEnergy();
        bat.eatHumans();
        bat.displayEnergy();
        bat.attackTown();
        bat.displayEnergy();

}
}