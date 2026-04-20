package com.medcare.backend.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.medcare.backend.model.Appointment;
import com.medcare.backend.repository.AppointmentRepository;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController {

    @Autowired
    private AppointmentRepository repo;

    @PostMapping("/appointments")
    public String save(@RequestBody Appointment a) {
        repo.save(a);
        return "Saved";
    }

    @GetMapping("/appointments")
    public List<Appointment> getAll() {
        return repo.findAll();
    }
}