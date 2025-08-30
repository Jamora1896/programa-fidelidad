package com.example.demo.servicio;

import com.example.demo.modelo.Ciudad;
import com.example.demo.repositorio.CiudadRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CiudadServicio {

    @Autowired
    private CiudadRepositorio ciudadRepositorio;

    public List<Ciudad> listarCiudades() {
        return ciudadRepositorio.findAll();
    }
}
