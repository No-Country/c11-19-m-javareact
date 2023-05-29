package com.upCycle.entity;

import com.upCycle.enums.Rol;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="role", discriminatorType = DiscriminatorType.STRING)
@Entity
@Table(name = "user")
public class Usuario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String nombre;

    @Column(name = "last_name")
    private String apellido;

    private String email;
    private String password;

    @Column(name = "role", insertable = false, updatable = false)
    @Enumerated(EnumType.STRING)
    private Rol rol;

    public boolean isEcoproveedor(Rol role){
        return role.equals(Rol.ECOPROVEEDOR);
    }

}
