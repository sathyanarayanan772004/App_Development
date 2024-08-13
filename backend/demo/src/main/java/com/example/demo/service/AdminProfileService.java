package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.AdminProfile;
import com.example.demo.repository.AdminProfileRepository;

@Service
public class AdminProfileService {

    @Autowired
    private AdminProfileRepository adminProfileRepository;

    public List<AdminProfile> getAllAdminProfiles() {
        return adminProfileRepository.findAll();
    }

    public Optional<AdminProfile> getAdminProfileById(Long id) {
        return adminProfileRepository.findById(id);
    }

    public AdminProfile createAdminProfile(AdminProfile adminProfile) {
        return adminProfileRepository.save(adminProfile);
    }

    public AdminProfile updateAdminProfile(Long id, AdminProfile adminProfileDetails) {
        AdminProfile adminProfile = adminProfileRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("AdminProfile not found"));

        adminProfile.setFirstName(adminProfileDetails.getFirstName());
        adminProfile.setLastName(adminProfileDetails.getLastName());
        adminProfile.setEmail(adminProfileDetails.getEmail());
        adminProfile.setRole(adminProfileDetails.getRole());

        return adminProfileRepository.save(adminProfile);
    }

    public void deleteProfileById(Long id) {
        adminProfileRepository.deleteById(id);
    }
}
