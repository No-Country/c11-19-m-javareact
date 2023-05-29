package com.upCycle.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DtoEcoproveedor {

    private String firstName;
    private String lastName;
    private String companyName;
    private String cuit;
    private String logoImage;
    private String email;
    private String password;
    private String password2;
    private String rol;
    private List<DtoProducto> products;
}
