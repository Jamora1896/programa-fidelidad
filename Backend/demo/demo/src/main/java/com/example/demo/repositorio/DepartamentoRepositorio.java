package com.example.demo.repositorio;

import com.example.demo.modelo.Departamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartamentoRepositorio extends JpaRepository<Departamento, Integer> {
}
