package com.upCycle.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@DiscriminatorValue(value="EcoProveedor")
public class EcoProveedor extends Usuario{

    @Column(name = "razon_social")
    private String razonSocial;

    @Column(name = "CUIT")
    private String cuit;
    private String direccion;

    @Column(name = "tipo_industria")
    private String tipoIndustria;

}
