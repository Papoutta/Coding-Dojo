package com.jobs.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobs.models.Job;
import com.jobs.models.User;
import com.jobs.repositories.JobRepo;

@Service
public class JobService {
	
	@Autowired
	JobRepo jobRepo;
	@Autowired
	UserService userServices;
	
	public List<Job> getAllJobs(){
		return jobRepo.findAll();
	}
	
	public Job createJob(Job job) {
		return jobRepo.save(job);
	}
	
	public Job findById(Long id) {
		Optional<Job> j=jobRepo.findById(id);
		if(j.isEmpty()) {
			return null;
		}
		return j.get();
	}
	
	public void DeleteJob(Long id) {
		Job jobToDelete=findById(id);
		jobToDelete.setCreator(null);
		jobToDelete.setAddToTheirFavourite(null);
		
		jobRepo.deleteById(id);
	}
	
	public List<Job> searchByTitle(String query){
		return jobRepo.findByTitleContains(query);
	}
	
	public Job updateJob(Job job,Long id,User creator) {
		job.setId(id);
		job.setCreator(creator);
		return jobRepo.save(job);
	}
	
	public void addToFavorites(Long user_id,Long job_id) {
		User user=userServices.getById(user_id);
		Job job=findById(job_id);
		if(user!=null&&job!=null) {
			job.getAddToTheirFavourite().add(user);
			jobRepo.save(job);
		}
	}
		
	public void removeFromFavorites(Long user_id,Long job_id) {
		User user=userServices.getById(user_id);
		Job job=findById(job_id);
		if(user!=null&&job!=null) {
			job.getAddToTheirFavourite().remove(user);
			jobRepo.save(job);
		}
	}
	
}
