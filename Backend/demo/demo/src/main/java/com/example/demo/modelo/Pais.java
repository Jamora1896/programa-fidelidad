package com.example.demo.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Pais {

    @Id
    private Integer codPais;

    private String nombrePais;

    public Integer getCodPais() {
        return codPais;
    }

    public void setCodPais(Integer codPais) {
        this.codPais = codPais;
    }

    public String getNombrePais() {
        return nombrePais;
    }

    public void setNombrePais(String nombrePais) {
        this.nombrePais = nombrePais;
    }
}

