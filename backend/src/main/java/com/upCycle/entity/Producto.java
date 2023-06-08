package com.upCycle.entity;

import com.upCycle.enums.TipoMaterial;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Arrays;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "product")
public class Producto implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "description")
    private String descripcion;

    @Column(name = "type_material")
    @Enumerated(EnumType.STRING)
    private TipoMaterial material;

    @Column(name = "kilograms")
    private Double peso;

    @OneToOne
    @JoinColumn(name = "location_id", referencedColumnName = "ubicacionId")
    private Ubicacion ubicacion;

    @Column(name = "image")
    private String imagen;

    @ManyToOne
    @JoinColumn(name = "id_ecoproveedor", nullable = false, updatable = false)
    private Ecoproveedor ecoproveedor;

    public TipoMaterial materialMapper(String material) {
        return Arrays.stream(TipoMaterial.values())
                .filter(value -> value.name().equalsIgnoreCase(material))
                .findFirst()
                .orElse(null);
    }
}
