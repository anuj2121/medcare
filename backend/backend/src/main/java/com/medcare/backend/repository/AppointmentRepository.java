package com.medcare.backend.repository;

import com.medcare.backend.model.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AppointmentRepository extends MongoRepository<Appointment, String> {
}