package com.example.demo.servicio;

import com.example.demo.modelo.Departamento;
import com.example.demo.repositorio.DepartamentoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DepartamentoServicio {

    @Autowired
    private DepartamentoRepositorio departamentoRepositorio;

    public List<Departamento> listarDepartamentos() {
        return departamentoRepositorio.findAll();
    }
}