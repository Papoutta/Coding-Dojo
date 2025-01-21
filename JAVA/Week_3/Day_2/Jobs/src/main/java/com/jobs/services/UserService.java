package com.jobs.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.jobs.models.LoginUser;
import com.jobs.models.User;
import com.jobs.repositories.UserRepo;

@Service
public class UserService {
	
	@Autowired
	UserRepo userRepo;
	
	public List<User> getAll(){
		return userRepo.findAll();
	}
	
	public User getById(Long id) {
		Optional<User> u=userRepo.findById(id);
		if(u.isEmpty()) {
			return null;
		}
		return u.get();
	}
	
	public User getUserByEmail(String email) {
		Optional<User> u=userRepo.findByEmail(email);
		if(u.isEmpty()) {
			return null;
		}
		return u.get();
	}
	
	public User register (User newUser,BindingResult result) {
		if(getUserByEmail(newUser.getEmail())!=null) {
			result.rejectValue("email", "unique", "email already in use !");
		}
		if(!newUser.getPassword().equals(newUser.getConfirm())) {
			result.rejectValue("confirm", "not matching", "password does not match !");
		}
		if(result.hasErrors()) {
			return null;
		}
		String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
		newUser.setPassword(hashed);
		return userRepo.save(newUser);
	}
	
	public User login(LoginUser newLogin,BindingResult result) {
		User user = getUserByEmail(newLogin.getEmail());
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
}
