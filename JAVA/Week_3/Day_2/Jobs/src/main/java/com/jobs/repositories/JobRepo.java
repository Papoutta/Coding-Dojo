package com.jobs.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jobs.models.Job;

@Repository
public interface JobRepo extends CrudRepository<Job,Long> {
	List<Job> findAll();
	List<Job> findByTitleContains(String query);
}
