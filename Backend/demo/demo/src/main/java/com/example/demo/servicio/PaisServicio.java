package com.example.demo.servicio;

import com.example.demo.modelo.Pais;
import com.example.demo.repositorio.PaisRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PaisServicio {

    @Autowired
    private PaisRepositorio paisRepositorio;

    public List<Pais> listarPaises() {
        return paisRepositorio.findAll();
    }
}