package com.loginandregistration.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.loginandregistration.models.UserModel;


@Repository
public interface UserRepository extends CrudRepository<UserModel,Long> {
//get all users
	List<UserModel> findAll();

// find User by email
Optional<UserModel> findByEmail(String email);

}