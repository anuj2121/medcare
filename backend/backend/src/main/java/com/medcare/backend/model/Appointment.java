package com.medcare.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "appointments")
public class Appointment {

    @Id
    private String id;

    private String name;
    private String doctor;
    private String date;

    public String getName() { return name; }
    public String getDoctor() { return doctor; }
    public String getDate() { return date; }

    public void setName(String name) { this.name = name; }
    public void setDoctor(String doctor) { this.doctor = doctor; }
    public void setDate(String date) { this.date = date; }
}