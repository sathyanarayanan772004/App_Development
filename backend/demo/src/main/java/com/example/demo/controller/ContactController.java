package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.ContactModel;
import com.example.demo.service.ContactService;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/submit")
    public ContactModel submitMessage(@RequestBody ContactModel contactModel) {
        return contactService.saveMessage(contactModel);
    }

    @GetMapping("/getall")
    public List<ContactModel> getAllMessages() {
        return contactService.getAllMessages();
    }

    @GetMapping("/message/{id}")
    public ContactModel getMessageById(@PathVariable Long id) {
        return contactService.getMessageById(id);
    }

    @PutMapping("/message/{id}")
    public ContactModel updateMessage(@PathVariable Long id, @RequestBody ContactModel contactModelDetails) {
        return contactService.updateMessage(id, contactModelDetails);
    }

    @DeleteMapping("/message/{id}")
    public void deleteMessage(@PathVariable Long id) {
        contactService.deleteMessage(id);
    }
}