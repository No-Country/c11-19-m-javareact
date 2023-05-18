package com.upCycle.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@DiscriminatorValue(value="EcoCreador")
@Entity
public class EcoCreador extends Usuario{

    private String ocupacion;

    @Column(name = "año_experiencia")
    private int anhoExperiencia;

}
