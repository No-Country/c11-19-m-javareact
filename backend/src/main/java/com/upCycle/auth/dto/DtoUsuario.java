package com.upCycle.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DtoUsuario {

    private String nombre;
    private String apellido;

    private String foto;
    private String email;
    private String password;

    private String rol;
}
