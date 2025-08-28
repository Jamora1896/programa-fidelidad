package com.example.demo.controlador;

import com.example.demo.modelo.Cliente;
import com.example.demo.servicio.ClienteServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/clientes")
public class ClienteControlador {

    @Autowired
    private ClienteServicio clienteServicio;

    @GetMapping
    public List<Cliente> getAllClientes() {
        return clienteServicio.getAllClientes();
    }

    @GetMapping("/{numeroId}")
    public Optional<Cliente> getClienteById(@PathVariable String numeroId) {
        return clienteServicio.getClienteById(numeroId);
    }

    @PostMapping
    public Cliente createCliente(@RequestBody Cliente cliente) {
        return clienteServicio.saveCliente(cliente);
    }

    @PutMapping("/{numeroId}")
    public Cliente updateCliente(@PathVariable String numeroId, @RequestBody Cliente cliente) {
        return clienteServicio.updateCliente(numeroId, cliente);
    }

    @DeleteMapping("/{numeroId}")
    public void deleteCliente(@PathVariable String numeroId) {
        clienteServicio.deleteCliente(numeroId);
    }
}