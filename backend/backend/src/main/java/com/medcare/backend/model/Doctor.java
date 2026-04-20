package com.medcare.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "doctors")
public class Doctor {

    @Id
    private String id;

    private String name;
    private String specialization;

    public String getId() { return id; }
    public String getName() { return name; }
    public String getSpecialization() { return specialization; }

    public void setName(String name) { this.name = name; }
    public void setSpecialization(String specialization) { this.specialization = specialization; }
}