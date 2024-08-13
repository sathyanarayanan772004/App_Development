package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.AdminProfile;

@Repository
public interface AdminProfileRepository extends JpaRepository<AdminProfile, Long> {
    @Override
    void deleteById(@SuppressWarnings("null") Long id);
}