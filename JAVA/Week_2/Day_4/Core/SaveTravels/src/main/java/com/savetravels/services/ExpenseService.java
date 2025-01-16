package com.savetravels.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.savetravels.models.Expense;
import com.savetravels.repositories.ExpenseRepository;

@Service
public class ExpenseService {
	@Autowired
	private ExpenseRepository ExpRepo;
	
	public List<Expense> allExpenses(){
		return ExpRepo.findAll();
	}
	
	// Create expense
	public Expense createExpense(Expense e) {
		return ExpRepo.save(e);
	}
	
	//Read One Expense
	public Expense findExpById(Long id) {
		Optional<Expense> Exp = ExpRepo.findById(id);
		if (Exp.isPresent()) {
			return Exp.get();
		}
		return null;
	}
	
	//Update One Expense
	public Expense updateExpById(Expense e) {
		return ExpRepo.save(e);
	}
	
	//Delete One Expense
	public void deleteExp(Long id) {
		ExpRepo.deleteById(id);
	}
}
