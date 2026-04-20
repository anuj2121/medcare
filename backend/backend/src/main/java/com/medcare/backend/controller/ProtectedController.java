package com.medcare.backend.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.medcare.backend.util.JwtUtil;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ProtectedController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/profile")
    public String getProfile(@RequestHeader("Authorization") String header) {

        if (header == null || !header.startsWith("Bearer ")) {
            throw new RuntimeException("No token ❌");
        }

        String token = header.substring(7);

        String email = jwtUtil.extractUsername(token);

        return "Welcome " + email + " 👋";
    }
}