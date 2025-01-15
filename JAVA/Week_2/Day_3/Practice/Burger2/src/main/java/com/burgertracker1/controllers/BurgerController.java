package com.burgertracker1.controllers;



import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.burgertracker1.models.BurgerModel;
import com.burgertracker1.services.BurgerServices;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/burger")
public class BurgerController {
	private final BurgerServices burgerService;

    public BurgerController(BurgerServices burgerService){
        this.burgerService = burgerService;
    }
    
    @GetMapping("")
	public String getAllBurgers(@ModelAttribute("burger") BurgerModel burger,Model model){

		List<BurgerModel> burgerList = burgerService.allBurgers();
		model.addAttribute("allBurgers",burgerList);

		return "index.jsp";
	}
 // Process Burger
 	@PostMapping("/processBurger")
 	public String createBurger(@Valid @ModelAttribute("burger") BurgerModel burger,
 			BindingResult result,
 			Model model) {
 		if (result.hasErrors()) {
 			// retrieve all books from db
 			List<BurgerModel> allBurgers = burgerService.allBurgers();
 			model.addAttribute("allBurgers",allBurgers);
 			return "index.jsp";
 		}else {
 			BurgerModel newBurger = burgerService.createBurger(burger);
 			return "redirect:/burger";
 		}
 	}
 	
 	@GetMapping("/edit/{id}")
	public String getAllBurgers(Model model,@PathVariable("id") Long id){

 		BurgerModel burgerToEdit = burgerService.findBurger(id);
		model.addAttribute("burger",burgerToEdit);

		return "edit.jsp";}
 	
 	@PutMapping("/update/{id}")
 	public String editBurger(@Valid @ModelAttribute("burger") BurgerModel burger,
 			BindingResult result) {
 		if (result.hasErrors()) {
 			return "edit.jsp";
 		}else {
 			burgerService.updateBurger(burger);
 		
 			return "redirect:/burger";
 		}
 		
 	}
 	
 	@DeleteMapping("/delete/{id}")
 	public String delete(@PathVariable("id") Long id) {
 		burgerService.deleteBurger(id);
 		return "redirect:/burger";
 	}
 	
}
