package com.upCycle.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DtoEcoproveedor extends DtoUsuario{

    private String razonSocial;
    private String cuit;
}
