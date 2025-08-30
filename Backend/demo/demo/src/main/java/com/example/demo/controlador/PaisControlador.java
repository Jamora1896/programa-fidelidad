package com.example.demo.controlador;

import com.example.demo.modelo.Pais;
import com.example.demo.servicio.PaisServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/paises")
public class PaisControlador {

    @Autowired
    private PaisServicio servicio;

    @GetMapping
    public List<Pais> getAllPaises() {
        return servicio.listarPaises();
    }
}
