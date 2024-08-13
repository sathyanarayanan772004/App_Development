package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Progresstracker;
import com.example.demo.repository.ProgresstrackerRepository;

@Service
public class ProgresstrackerService {

    @Autowired
    private ProgresstrackerRepository progresstrackerRepository;

    public Progresstracker saveProgress(Progresstracker progresstracker) {
        return progresstrackerRepository.save(progresstracker);
    }

    public List<Progresstracker> getAllProgresses() {
        return progresstrackerRepository.findAll();
    }

    public Progresstracker getProgressById(Long id) {
        return progresstrackerRepository.findById(id).orElse(null);
    }

    public Progresstracker updateProgress(Long id, Progresstracker progresstracker) {
        if (progresstrackerRepository.existsById(id)) {
            progresstracker.setId(id); // Make sure to set the ID for the update
            return progresstrackerRepository.save(progresstracker);
        }
        return null; // Or throw an exception if the record doesn't exist
    }

    public void deleteProgress(Long id) {
        if (progresstrackerRepository.existsById(id)) {
            progresstrackerRepository.deleteById(id);
        }
        // Optionally, handle the case where the record doesn't exist
    }
}