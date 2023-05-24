package com.upCycle.service;

import com.upCycle.Entity.Usuario;
import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface IUsuarioService {

    //ResponseEntity<String> signup(Map<String, String> requestMap);

    void guardarUsuario(Usuario usuario);

    Usuario getUsuarioByEmail(String email);

    Boolean validarExistenciaByEmail(String email);

    Usuario getUsuarioById(Long id);

}