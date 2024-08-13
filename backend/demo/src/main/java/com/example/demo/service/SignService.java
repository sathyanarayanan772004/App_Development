package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Sign;
import com.example.demo.repository.SignRepository;

@Service
public class SignService {

    @Autowired
    private SignRepository signRepository;

    public Sign create(Sign sign) {
        return signRepository.save(sign);
    }

    public List<Sign> getAll() {
        return signRepository.findAll();
    }

    public Sign getById(int userId) {
        return signRepository.findById(userId).orElse(null);
    }

    public boolean updateDetails(int userId, Sign sign) {
        if (!signRepository.findById(userId).isPresent()) {
            return false;
        }
        try {
            signRepository.save(sign);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean deleteSign(int userId) {
        if (!signRepository.findById(userId).isPresent()) {
            return false;
        }
        signRepository.deleteById(userId);
        return true;
    }

    public boolean deleteEmployee(int userId) {
        throw new UnsupportedOperationException("Unimplemented method 'deleteEmployee'");
    }
}
