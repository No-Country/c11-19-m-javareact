package com.upCycle.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@DiscriminatorValue("ECOPROVEEDOR")
@Entity
public class Ecoproveedor extends Usuario{

    @Column(name = "company_neme")
    private String razonSocial;

    private String cuit;

    @Column(name = "logo_image")
    private String logo;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "ecoproveedor")
    private List<Producto> listaProductos;
}
