package com.upCycle.entity;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@DiscriminatorValue("ECOCREADOR")
@Entity
public class Ecocreador extends Usuario{

    @Column(name = "occupation")
    private String ocupacion;

    @Column(name = "photo_profile")
    private String foto;
}
