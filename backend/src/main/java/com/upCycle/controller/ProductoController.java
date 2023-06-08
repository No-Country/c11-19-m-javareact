package com.upCycle.controller;

import com.upCycle.dto.request.DtoProducto;
import com.upCycle.dto.response.DtoEcoproveedorResponse;
import com.upCycle.dto.response.DtoProductoResponse;
import com.upCycle.entity.Producto;
import com.upCycle.entity.Usuario;
import com.upCycle.exception.UserNotExistException;
import com.upCycle.exception.UserUnauthorizedException;
import com.upCycle.service.EcoproveedorService;
import com.upCycle.service.ProductoService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping(path = "/api/product")
@CrossOrigin(origins = "*")
public class ProductoController {

    private final ProductoService service;
    private final EcoproveedorService ecoproveedorService;

    @Autowired
    public ProductoController(ProductoService service, EcoproveedorService ecoproveedorService) {
        this.service = service;
        this.ecoproveedorService = ecoproveedorService;
    }

    @PostMapping(path = "/create")
    public ResponseEntity<DtoProductoResponse> crearProducto(@RequestBody DtoProducto dtoProducto, HttpSession session) throws UserNotExistException, UserUnauthorizedException {

            Usuario logueado = (Usuario) session.getAttribute("usuarioLogueado");
            DtoProductoResponse productoResponse = service.crearProducto(dtoProducto, session);
            return ResponseEntity.status(HttpStatus.CREATED).body(productoResponse);

    }

    @GetMapping(path = "/getAll")
    public ResponseEntity<List<DtoProductoResponse>> listarProductos() {

        List<DtoProductoResponse> dtoProductoResponse = service.listarProductos();
        return !dtoProductoResponse.isEmpty() ? ResponseEntity.ok(dtoProductoResponse) : ResponseEntity.ok(new ArrayList<>());

    }

    @GetMapping(path = "/productInfo/{id}")
    public ResponseEntity<DtoEcoproveedorResponse> buscarEcoproveedorPorIdProducto(@PathVariable Long id){

        try {
            DtoEcoproveedorResponse dtoEcoproveedorResponse = service.buscarEcoproveedorPorIdProdcuto(id);
            if(dtoEcoproveedorResponse != null){
                return ResponseEntity.ok().body(dtoEcoproveedorResponse);
            }else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping(path = "/filterTag/{material}")
    public ResponseEntity<List<DtoProductoResponse>> filtrarPorMaterial(@PathVariable String material){
        try {
            List<DtoProductoResponse> dtoProductoResponse = service.listarPorMaterial(material);
            return !dtoProductoResponse.isEmpty() ? ResponseEntity.ok(dtoProductoResponse) : ResponseEntity.ok(new ArrayList<>());
        }catch (Exception ex){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping(path = "/find/{cadena}")
    public ResponseEntity<List<DtoProductoResponse>> filtrarBarraDeBusqueda(@PathVariable String cadena){
        try {
            List<DtoProductoResponse> dtoProductoResponse = service.listarPorBarraBusqueda(cadena);
            return !dtoProductoResponse.isEmpty() ? ResponseEntity.ok(dtoProductoResponse) : ResponseEntity.ok(new ArrayList<>());
        }catch (Exception ex){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping(path = "/getPoints")
    public ResponseEntity<Integer> getEcopuntos(HttpSession session){
        try {
            return ResponseEntity.ok(ecoproveedorService.getEcopuntos(session));
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(0);
        }
    }
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id, HttpSession session) {

        try {
            service.eliminarProducto(id, session);
            return ResponseEntity.ok().build();

        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
