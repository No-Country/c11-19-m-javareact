package com.upCycle.dto;

import com.upCycle.exception.MiExcepcion;
import lombok.Data;

@Data
public class dtoRegistroEcoproveedor {

    private String nombre;
    private String apellido;
    private String razonSocial;
    private String cuit;
    private String email;
    private String password;
    private String password2;
    private String rol;

    public void validarPassword() throws MiExcepcion {
        if(!this.password.equals(this.password2)){
            throw new MiExcepcion("Las contraseñas no coinciden");
        }
    }
}
