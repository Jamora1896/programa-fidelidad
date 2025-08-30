package com.example.demo.controlador;

import com.example.demo.modelo.Departamento;
import com.example.demo.servicio.DepartamentoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/departamentos")
public class DepartamentoControlador {

    @Autowired
    private DepartamentoServicio servicio;

    @GetMapping
    public List<Departamento> getAllDepartamentos() {
        return servicio.listarDepartamentos();
    }
}