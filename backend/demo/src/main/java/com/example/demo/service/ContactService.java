package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.ContactModel;
import com.example.demo.repository.ContactRepository;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public ContactModel saveMessage(ContactModel contactModel) {
        return contactRepository.save(contactModel);
    }

    public List<ContactModel> getAllMessages() {
        return contactRepository.findAll();
    }

    public ContactModel getMessageById(Long id) {
        return contactRepository.findById(id).orElse(null);
    }

    public ContactModel updateMessage(Long id, ContactModel contactModelDetails) {
        ContactModel contactModel = contactRepository.findById(id).orElse(null);
        if (contactModel != null) {
            contactModel.setName(contactModelDetails.getName());
            contactModel.setEmail(contactModelDetails.getEmail());
            contactModel.setMessage(contactModelDetails.getMessage());
            contactModel.setPhoneNumber(contactModelDetails.getPhoneNumber()); // Update phone number
            return contactRepository.save(contactModel);
        }
        return null;
    }

    public void deleteMessage(Long id) {
        contactRepository.deleteById(id);
    }
}