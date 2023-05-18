package com.upCycle.restImpl;

import com.upCycle.Entity.Usuario;
import com.upCycle.constants.upCycleConstant;
import com.upCycle.rest.IUsuarioRest;
import com.upCycle.service.IUsuarioService;
import com.upCycle.utils.upCycleUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UsuarioRestImpl implements IUsuarioRest {

    private IUsuarioService usuarioService;

    @Autowired
    public UsuarioRestImpl(IUsuarioService usuarioService){
        this.usuarioService = usuarioService;
    }

    @Override
    public ResponseEntity<String> signup(Map<String, String> requestMap) {

        try {
            return usuarioService.signup(requestMap);

        }catch(Exception ex){
            ex.printStackTrace();
        }
        return upCycleUtils.getResponseEntity(upCycleConstant.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
