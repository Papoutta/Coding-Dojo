package com.hoppersreceipt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HopperController {
    @RequestMapping("/")
    public String index(Model model) {
        String name = "Farouk GHEZAL";
        String itemName = "Bachkoutou";
        double price = 5.25;
        String description = "Metal strips, also an illustration of nanoseconds.";
        String vendor = "Little Things Corner Store";
    
    	// Your code here! Add values to the view model to be rendered
        model.addAttribute("name", name);
        model.addAttribute("itemName", itemName);
        model.addAttribute("description", description);
        model.addAttribute("vendor", vendor);
        model.addAttribute("price", price);
    
        return "index.jsp";
    }
    //...
    

}
