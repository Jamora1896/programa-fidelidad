package com.example.demo.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Marca {

    @Id
    private Integer codMarca;

    private String nombreMarca;

    public Integer getCodMarca() {
        return codMarca;
    }

    public void setCodMarca(Integer codMarca) {
        this.codMarca = codMarca;
    }

    public String getNombreMarca() {
        return nombreMarca;
    }

    public void setNombreMarca(String nombreMarca) {
        this.nombreMarca = nombreMarca;
    }
}
