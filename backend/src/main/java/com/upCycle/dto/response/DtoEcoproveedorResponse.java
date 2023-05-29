package com.upCycle.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DtoEcoproveedorResponse extends DtoUsuarioResponse {

    private String companyName;
    private String cuit;
    private String logoImage;
    private String password;
    private String rol;
    private List<DtoProductoResponse> listaProductos;
}
