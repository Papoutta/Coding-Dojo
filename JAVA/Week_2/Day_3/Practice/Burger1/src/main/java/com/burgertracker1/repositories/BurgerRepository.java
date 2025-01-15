package com.burgertracker1.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.burgertracker1.models.BurgerModel;


@Repository
public interface BurgerRepository extends CrudRepository<BurgerModel, Long> {
	List<BurgerModel>findAll();
}