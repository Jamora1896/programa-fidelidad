package com.example.demo.controlador;

import com.example.demo.modelo.Ciudad;
import com.example.demo.servicio.CiudadServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/ciudades")
public class CiudadControlador {

    @Autowired
    private CiudadServicio ciudadServicio;

    @GetMapping
    public List<Ciudad> listarCiudades() {
        return ciudadServicio.listarCiudades();
    }
}
