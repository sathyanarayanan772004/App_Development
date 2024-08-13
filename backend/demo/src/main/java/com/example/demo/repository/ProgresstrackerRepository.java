package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Progresstracker;

public interface ProgresstrackerRepository extends JpaRepository<Progresstracker, Long> {
}