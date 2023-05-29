package com.upCycle.controller;

import com.upCycle.dto.request.DtoProducto;
import com.upCycle.dto.response.DtoProductoResponse;
import com.upCycle.exception.UserUnauthorizedException;
import com.upCycle.service.ProductoService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/ecoproveedor")
public class ProductoController {

    private final ProductoService service;

    @Autowired
    public ProductoController(ProductoService service) {
        this.service = service;
    }

    @PostMapping("/product/create")
    public ResponseEntity<DtoProductoResponse> crearProducto(@RequestBody DtoProducto dtoProducto, HttpSession session) throws UserUnauthorizedException {

        DtoProductoResponse productoResponse = service.crearProducto(dtoProducto, session);
        return ResponseEntity.status(HttpStatus.CREATED).body(productoResponse);

    }
}
