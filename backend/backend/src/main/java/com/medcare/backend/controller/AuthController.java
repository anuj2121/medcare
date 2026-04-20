package com.medcare.backend.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.medcare.backend.model.User;
import com.medcare.backend.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserRepository userRepo;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        userRepo.save(user);
        return "Registered";
    }

   @PostMapping("/login") 
   public String login(@RequestBody User user) {
    System.out.println("EMAIL RECEIVED: " + user.getEmail());
    System.out.println("PASSWORD RECEIVED: " + user.getPassword());

    User u = userRepo.findByEmail(user.getEmail());

    if (u == null) {
        return "User not found";
    }

    System.out.println("DB USER EMAIL: " + u.getEmail());
    System.out.println("DB PASSWORD: " + u.getPassword());

    if (!u.getPassword().equals(user.getPassword())) {
        return "Wrong password";
    }

    return "Login success";
}
@PostMapping
public Doctor addDoctor(@RequestBody Doctor doctor) {

    System.out.println("NAME: " + doctor.getName());
    System.out.println("SPEC: " + doctor.getSpecialization());

    return repo.save(doctor);
}
}