package com.example.demo.repositorio;

import com.example.demo.modelo.Pais;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaisRepositorio extends JpaRepository<Pais, Integer> {
}