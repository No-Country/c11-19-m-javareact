package com.upCycle.service;

import com.upCycle.Entity.Rol;
import com.upCycle.enums.TipoRol;

public interface IRolService {

    Rol getRol(TipoRol nombreRol);
    Boolean validarExistenciaRol(TipoRol nombreRol);
}
