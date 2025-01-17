package com.loginandregistration.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.loginandregistration.models.LoginUser;
import com.loginandregistration.models.UserModel;
import com.loginandregistration.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired 
	UserRepository userRepo;
	
	// get all users 
	public List<UserModel> getAllUsers(){
		return userRepo.findAll();
	}
	
	// get user by email
	public UserModel getUserByEmail(String email) {
		Optional<UserModel> user=userRepo.findByEmail(email);
		if(user.isPresent()) {
			return user.get();
		}
		return null;
	}
	
	// registration process 
	public UserModel register(UserModel newUser,BindingResult result) {
		// check if the email is already in use 
		if(getUserByEmail(newUser.getEmail())!=null) {
			// adding error to result
			result.rejectValue("email", "unique", "email already in use !");
		}
		
		//we will check the password and confirm 
		if(!newUser.getPassword().equals(newUser.getConfirm())) {
			result.rejectValue("confirm", "not matching", "password does not match !");
		}
		
		//we will check the other validation 
		System.out.println(result.getAllErrors());
		if(result.hasErrors()) {
			return null;
		}
		
		//we will hash our password 
		String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
		// we will set the hashed password 
		newUser.setPassword(hashed);
		
		//persist the data
		return userRepo.save(newUser);
		
		
	}
	
	// Login Process 
	public UserModel login (LoginUser newLogin,BindingResult result) {
		// check the email existence 
		UserModel user = getUserByEmail(newLogin.getEmail());
		if(user==null) {
			result.rejectValue("email", "WrongCredentials", "User does not exist with this email !");
		}
		
		if(result.hasErrors()) {
			return null;
		}
		if(!BCrypt.checkpw(newLogin.getPassword(),user.getPassword())) {
			result.rejectValue("password", "WrongCredentials", "Wrong Password !");
		}
		return user;
		
		
	}
	
	public UserModel getUserById(Long id) {
		Optional<UserModel> u = userRepo.findById(id);
		if(u.isPresent()) {
			return u.get();
		}
		return null;
	}

}