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

    @Column(name = "points")
    private int puntos;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "ecoproveedor")
    private List<Producto> listaProductos;

    public int calcularPuntosTotales() {
        int puntosTotales = 0;
        if (listaProductos != null) {
            for (Producto producto : listaProductos) {
                if (producto.getPeso() != null) {
                    double pesoEnKg = producto.getPeso();
                    int puntosPorProducto = (int) (pesoEnKg * 10);
                    puntosTotales += puntosPorProducto;
                }
            }
        }
        return puntosTotales;
    }
}
