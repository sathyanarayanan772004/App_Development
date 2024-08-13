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

import com.example.demo.model.Sign;
import com.example.demo.service.SignService;
@RestController
@RequestMapping("/Signin")
public class SignController {
    @Autowired
    SignService ss;

    @PostMapping("/details/add")
    public ResponseEntity<Sign> addData(@RequestBody Sign s) {
        Sign obj = ss.create(s);
        return new ResponseEntity<>(obj, HttpStatus.CREATED);
    }

    @GetMapping("details/getall")
    public ResponseEntity<List<Sign>> getAll() {
        try {
            List<Sign> obj = ss.getAll();
            return new ResponseEntity<>(obj, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/api/Sign/{userId}")
    public ResponseEntity<Sign> getById(@PathVariable("userId") int userId) {
        Sign sign = ss.getById(userId);
        if (sign != null) {
            return new ResponseEntity<>(sign, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/api/Sign/{userId}")
    public ResponseEntity<Sign> update(@PathVariable("userId") int userId, @RequestBody Sign s) {
        if (ss.updateDetails(userId, s)) {
            return new ResponseEntity<>(s, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/api/Sign/{userId}")
    public ResponseEntity<Void> delete(@PathVariable("userId") int userId) {
        if (ss.deleteEmployee(userId)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    
}
