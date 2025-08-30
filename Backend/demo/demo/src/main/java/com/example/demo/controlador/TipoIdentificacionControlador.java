package com.example.demo.controlador;

import com.example.demo.modelo.TipoIdentificacion;
import com.example.demo.servicio.TipoIdentificacionServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*") // Permite llamadas desde cualquier origen (tu HTML)
@RestController
@RequestMapping("/api/tiposidentificacion")
public class TipoIdentificacionControlador {

    @Autowired
    private TipoIdentificacionServicio servicio;

    @GetMapping
    public List<TipoIdentificacion> getAllTipos() {
        return servicio.listarTipos();
    }
}