package com.example.demo.repositorio;

import com.example.demo.modelo.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CiudadRepositorio extends JpaRepository<Ciudad, Integer> {
}