package com.upCycle.mapper;

import com.upCycle.dto.request.DtoEcocreador;
import com.upCycle.dto.response.DtoEcocreadorResponse;
import com.upCycle.entity.Ecocreador;
import com.upCycle.enums.Rol;
import org.springframework.stereotype.Component;

@Component
public class EcocreadorMapper {

    public Ecocreador dtoEcocreadorAEntidad(DtoEcocreador dtoEcocreador) {

        Ecocreador entidadEcocreador = new Ecocreador();
        entidadEcocreador.setNombre(dtoEcocreador.getFirstName());
        entidadEcocreador.setApellido(dtoEcocreador.getLastName());
        entidadEcocreador.setEmail(dtoEcocreador.getEmail());
        entidadEcocreador.setFoto(dtoEcocreador.getImage());
        entidadEcocreador.setOcupacion(dtoEcocreador.getOccupation());
        entidadEcocreador.setPassword(dtoEcocreador.getPassword());
        entidadEcocreador.setRol(Rol.ECOCREADOR);
        return entidadEcocreador;
    }

    public DtoEcocreadorResponse entidadADtoEcocreador(Ecocreador entidadEcocreador) {

        DtoEcocreadorResponse dtoEcocreadorResponse = new DtoEcocreadorResponse();
        dtoEcocreadorResponse.setId(entidadEcocreador.getId());
        dtoEcocreadorResponse.setFirstName(entidadEcocreador.getNombre());
        dtoEcocreadorResponse.setLastName(entidadEcocreador.getApellido());
        dtoEcocreadorResponse.setImage(entidadEcocreador.getFoto());
        dtoEcocreadorResponse.setOccupation(entidadEcocreador.getOcupacion());
        dtoEcocreadorResponse.setEmail(entidadEcocreador.getEmail());
        dtoEcocreadorResponse.setRol(entidadEcocreador.getRol().name());
        return dtoEcocreadorResponse;
    }
}
