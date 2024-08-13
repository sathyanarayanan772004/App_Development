package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Login;
import com.example.demo.service.LoginService;

@RestController
@RequestMapping("/Logins")
public class LoginController {

    @Autowired
    LoginService ls;

    @PostMapping("/details/add")
    public ResponseEntity<Login> addData(@RequestBody Login l) {
        Login obj = ls.create(l);
        return new ResponseEntity<>(obj, HttpStatus.CREATED);
    }

    @GetMapping("details/getall")
    public ResponseEntity<List<Login>> getAll() {
        try {
            List<Login> obj = ls.getAll();
            return new ResponseEntity<>(obj, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("details/{userId}")
    public ResponseEntity<Login> getById(@PathVariable("userId") int userId) {
        Login login = ls.getById(userId);
        if (login != null) {
            return new ResponseEntity<>(login, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("details/{userId}")
    public ResponseEntity<Login> update(@PathVariable("userId") int userId, @RequestBody Login l) {
        if (ls.updateDetails(userId, l)) {
            return new ResponseEntity<>(l, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("details/{userId}")
    public ResponseEntity<Void> delete(@PathVariable("userId") int userId) {
        if (ls.deleteEmployee(userId)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}