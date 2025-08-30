package com.example.demo.controlador;

import com.example.demo.modelo.Marca;
import com.example.demo.servicio.MarcaServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/marcas")
public class MarcaControlador {

    @Autowired
    private MarcaServicio marcaServicio;

    @GetMapping
    public List<Marca> listarMarcas() {
        return marcaServicio.listarMarcas();
    }
}