package com.upCycle.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@DiscriminatorColumn(name="tipo_rol", discriminatorType = DiscriminatorType.STRING)
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Entity
@Table(name = "usuario")
public abstract class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Long idUsuario;

    private String nombreCompleto;
    private String apellido;
    private String email;
    private String password;

    @Column(name = "tipo_rol", insertable = false, updatable = false)
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "usuario_rol", joinColumns = @JoinColumn(name = "usuario_id", referencedColumnName = "id_usuario")
                                    , inverseJoinColumns = @JoinColumn(name = "rol_id", referencedColumnName = "id_rol"))
    private List<Rol> roles;
}
