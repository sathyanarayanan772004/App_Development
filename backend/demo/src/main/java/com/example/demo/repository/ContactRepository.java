package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.ContactModel;

public interface ContactRepository extends JpaRepository<ContactModel, Long> {
}