package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Login;
import com.example.demo.repository.LoginRepository;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public Login create(Login login) {
        return loginRepository.save(login);
    }

    public List<Login> getAll() {
        return loginRepository.findAll();
    }

    public Login getById(int userId) {
        return loginRepository.findById(userId).orElse(null);
    }

    public boolean updateDetails(int userId, Login login) {
        if (!loginRepository.findById(userId).isPresent()) {
            return false;
        }
        try {
            loginRepository.save(login);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean deleteLogin(int userId) {
        if (!loginRepository.findById(userId).isPresent()) {
            return false;
        }
        loginRepository.deleteById(userId);
        return true;
    }

    public boolean deleteEmployee(int userId) {
        throw new UnsupportedOperationException("Unimplemented method 'deleteEmployee'");
    }
}