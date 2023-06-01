package com.upCycle.controller;

import com.upCycle.dto.request.DtoProducto;
import com.upCycle.dto.response.DtoEcoproveedorResponse;
import com.upCycle.dto.response.DtoProductoResponse;
import com.upCycle.entity.Producto;
import com.upCycle.entity.Usuario;
import com.upCycle.exception.UserNotExistException;
import com.upCycle.exception.UserUnauthorizedException;
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
public class ProductoController {

    private final ProductoService service;

    @Autowired
    public ProductoController(ProductoService service) {
        this.service = service;
    }

    @CrossOrigin
    @PostMapping(path = "/create")
    public ResponseEntity<DtoProductoResponse> crearProducto(@RequestBody DtoProducto dtoProducto, HttpSession session){

        try {
            Usuario logueado = (Usuario) session.getAttribute("usuarioLogueado");
            DtoProductoResponse productoResponse = service.crearProducto(dtoProducto, logueado);
            return ResponseEntity.status(HttpStatus.CREATED).body(productoResponse);

        }catch (Exception ex){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

    }

    @GetMapping(path = "/getAll")
    public ResponseEntity<List<DtoProductoResponse>> listarProductos(HttpSession session){

        try{
            List<DtoProductoResponse> dtoProductoResponse = service.listarProductos(session);
            if(!dtoProductoResponse.isEmpty()){
                return ResponseEntity.ok().body(dtoProductoResponse);
            }else {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<DtoEcoproveedorResponse> buscarEcoproveedorPorIdProdcuto(@PathVariable Long id, HttpSession session){

        try {
            DtoEcoproveedorResponse dtoEcoproveedorResponse = service.buscarEcoproveedorPorIdProdcuto(id, session);
            if(dtoEcoproveedorResponse != null){
                return ResponseEntity.ok().body(dtoEcoproveedorResponse);
            }else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping(path = "/tag/{material}")
    public ResponseEntity<List<DtoProductoResponse>> filtrarPorMaterial(@RequestParam("material") String material, HttpSession session){
        try {
            List<DtoProductoResponse> dtoProductoResponse = service.listarPorMaterial(material, session);
            return !dtoProductoResponse.isEmpty() ? ResponseEntity.ok(dtoProductoResponse) : ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ArrayList<>());
        }catch (Exception ex){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id, HttpSession session) {

        try {
            service.eliminarProducto(id, session);
            return ResponseEntity.noContent().build();

        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
