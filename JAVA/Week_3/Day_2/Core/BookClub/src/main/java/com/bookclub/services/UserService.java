package com.bookclub.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.bookclub.models.LoginUser;
import com.bookclub.models.User;
import com.bookclub.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;
	// Write Login and Register Methods
	
	 public User register(User newUser, BindingResult result) {
	    	Optional<User> potentialUser = userRepo.findByEmail(newUser.getEmail());
	        // TO-DO: Additional validations!
	    	if(potentialUser.isPresent()) {
	    		result.rejectValue("email", "emailError", "Email already taken!");
	    	}
	    	if(!newUser.getPassword().equals(newUser.getConfirm())) {
	    	    result.rejectValue("confirm", "Matches", "The Confirm Password must match Password!");
	    	}
	    	if(result.hasErrors()) {
	    		return null;
	    	}else {
	    		String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
	    		newUser.setPassword(hashed);
	    		return userRepo.save(newUser);
	    	}
	    	
	    }
	    
	    public User login(LoginUser newLoginObject, BindingResult result) {
	        // TO-DO: Additional validations!
	    	Optional<User> potentialUser = userRepo.findByEmail(newLoginObject.getEmail());
	        // TO-DO: Additional validations!
	    	if(!potentialUser.isPresent()) {
	    		result.rejectValue("email", "emailError", "Email doesn't Exist!");
	    	}else {
	    		User user = potentialUser.get();
	    		// check the password
	    		if(!BCrypt.checkpw(newLoginObject.getPassword(), user.getPassword())) {
	    		    result.rejectValue("password", "loginErrors", "Invalid Password!");
	    		}
	    		if(result.hasErrors()) {
	    			return null;
	    		}else {
	    			return user;
	    		}
	    	}
	        return null;
	    }
	    
	    public User findUserById(Long id) {
	    	Optional<User> maybeUser = userRepo.findById(id);
	    	if(maybeUser.isPresent()) {
	    		return maybeUser.get();
	    	}else {
	    		return null;
	    	}
	    }
	    
	    
	    
}
