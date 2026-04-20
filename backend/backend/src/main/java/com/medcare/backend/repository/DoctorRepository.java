package com.medcare.backend.repository;

import com.medcare.backend.model.Doctor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DoctorRepository extends MongoRepository<Doctor, String> {
}