package com.example.demo.repositorio;

import com.example.demo.modelo.Marca;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarcaRepositorio extends JpaRepository<Marca, Integer> {
}

