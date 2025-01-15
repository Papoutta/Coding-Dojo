package com.burgertracker1.services;


import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.burgertracker1.models.BurgerModel;
import com.burgertracker1.repositories.BurgerRepository;


@Service

public class BurgerServices {
	
	private final BurgerRepository burgerRepo;
	
	public BurgerServices(BurgerRepository burgerRepo) {
		this.burgerRepo=burgerRepo;
	}
	
	public List<BurgerModel> allBurgers() {
        return burgerRepo.findAll();
    }
    // creates a book
    public BurgerModel createBurger(BurgerModel b) {
        return burgerRepo.save(b);
    }
    
    public BurgerModel findBurger(Long id) {
        Optional<BurgerModel> optionalBurger = burgerRepo.findById(id);
        if(optionalBurger.isPresent()) {
            return optionalBurger.get();
        } else {
            return null;
        }
    }
    public BurgerModel updateBurger(BurgerModel b) {
        return burgerRepo.save(b);
    }
    public void deleteBurger(Long id) {
        burgerRepo.deleteById(id);
    }
    
}