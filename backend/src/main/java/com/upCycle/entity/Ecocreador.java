package com.upCycle.entity;

import com.upCycle.auth.entity.Usuario;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Ecocreador extends Usuario {

    private String ocupacion;
}
