package com.example.demo.servicio;

import com.example.demo.modelo.Marca;
import com.example.demo.repositorio.MarcaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MarcaServicio {

    @Autowired
    private MarcaRepositorio marcaRepositorio;

    public List<Marca> listarMarcas() {
        return marcaRepositorio.findAll();
    }
}
