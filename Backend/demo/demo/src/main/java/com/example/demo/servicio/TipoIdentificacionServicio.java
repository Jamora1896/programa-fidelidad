package com.example.demo.servicio;

// Importaciones necesarias
import com.example.demo.modelo.TipoIdentificacion;
import com.example.demo.repositorio.TipoIdentificacionRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TipoIdentificacionServicio {

    @Autowired
    private TipoIdentificacionRepositorio tipoIdentificacionRepositorio;

    public List<TipoIdentificacion> listarTipos() {
        return tipoIdentificacionRepositorio.findAll();
    }
}