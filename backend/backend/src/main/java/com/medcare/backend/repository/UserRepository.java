package com.medcare.backend.repository;

import com.medcare.backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

    User findByEmail(String email); // ✅ IMPORTANT
}