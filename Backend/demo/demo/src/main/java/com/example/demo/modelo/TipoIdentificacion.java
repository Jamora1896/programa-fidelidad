package com.example.demo.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class TipoIdentificacion {

    @Id
    private Integer codIdentificacion;

    private String tipo;

    public Integer getCodIdentificacion() {
        return codIdentificacion;
    }

    public void setCodIdentificacion(Integer codIdentificacion) {
        this.codIdentificacion = codIdentificacion;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}

