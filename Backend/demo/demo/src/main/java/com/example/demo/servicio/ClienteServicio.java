package com.example.demo.servicio;

import com.example.demo.modelo.Cliente;
import com.example.demo.repositorio.ClienteRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteServicio {

    @Autowired
    private ClienteRepositorio clienteRepositorio;

    public List<Cliente> getAllClientes() {
        return clienteRepositorio.findAll();
    }

    public Optional<Cliente> getClienteById(String numeroId) {
        return clienteRepositorio.findById(numeroId);
    }

    public Cliente saveCliente(Cliente cliente) {
        return clienteRepositorio.save(cliente);
    }

    public Cliente updateCliente(String numeroId, Cliente datosCliente) {
        return clienteRepositorio.findById(numeroId).map(cliente -> {
            cliente.setPrimerNombre(datosCliente.getPrimerNombre());
            cliente.setSegundoNombre(datosCliente.getSegundoNombre());
            cliente.setPrimerApellido(datosCliente.getPrimerApellido());
            cliente.setSegundoApellido(datosCliente.getSegundoApellido());
            cliente.setFechaNacimiento(datosCliente.getFechaNacimiento());
            cliente.setDireccion(datosCliente.getDireccion());
            cliente.setTipoIdentificacion(datosCliente.getTipoIdentificacion());
            cliente.setCiudad(datosCliente.getCiudad());
            cliente.setDepartamento(datosCliente.getDepartamento());
            cliente.setPais(datosCliente.getPais());
            cliente.setMarca(datosCliente.getMarca());
            return clienteRepositorio.save(cliente);
        }).orElseGet(() -> {
            datosCliente.setNumeroIdentificacion(numeroId);
            return clienteRepositorio.save(datosCliente);
        });
    }

    public void deleteCliente(String numeroId) {
        clienteRepositorio.deleteById(numeroId);
    }
}