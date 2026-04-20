package com.medcare.backend.controller;

import com.medcare.backend.model.Doctor;
import com.medcare.backend.repository.DoctorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "http://localhost:3000")
public class DoctorController {

    @Autowired
    private DoctorRepository repo;

    // ✅ GET ALL DOCTORS
    @GetMapping
    public List<Doctor> getDoctors() {
        return repo.findAll();
    }

    // ✅ ADD DOCTOR (ADMIN)
    @PostMapping
    public Doctor addDoctor(@RequestBody Doctor doctor) {
        return repo.save(doctor);
    }

    // ✅ DELETE DOCTOR (ADMIN)
    @DeleteMapping("/{id}")
    public String deleteDoctor(@PathVariable String id) {
        repo.deleteById(id);
        return "Deleted";
    }
}