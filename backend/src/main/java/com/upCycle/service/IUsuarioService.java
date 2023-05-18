package com.upCycle.service;

import com.upCycle.Entity.Usuario;
import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface IUsuarioService {

    ResponseEntity<String> signup(Map<String, String> requestMap);

}
