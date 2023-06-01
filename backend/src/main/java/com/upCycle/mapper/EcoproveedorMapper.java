package com.upCycle.mapper;

import com.upCycle.dto.request.DtoEcoproveedor;
import com.upCycle.dto.response.DtoEcoproveedorResponse;
import com.upCycle.dto.response.DtoProductoResponse;
import com.upCycle.entity.Ecoproveedor;
import com.upCycle.entity.Producto;
import com.upCycle.enums.Rol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class EcoproveedorMapper {

    private final ProductoMapper publicacionMapper;

    @Autowired
    public EcoproveedorMapper(ProductoMapper publicacionMapper) {
        this.publicacionMapper = publicacionMapper;
    }

    public Ecoproveedor dtoEcoproveedorAEntidad(DtoEcoproveedor dtoEcoproveedor){

        Ecoproveedor ecoproveedor = new Ecoproveedor();
        ecoproveedor.setNombre(dtoEcoproveedor.getFirstName());
        ecoproveedor.setApellido(dtoEcoproveedor.getLastName());
        ecoproveedor.setCuit(dtoEcoproveedor.getCuit());
        ecoproveedor.setLogo(dtoEcoproveedor.getLogoImage());
        ecoproveedor.setEmail(dtoEcoproveedor.getEmail());
        ecoproveedor.setRol(Rol.ECOPROVEEDOR);
        ecoproveedor.setRazonSocial(dtoEcoproveedor.getCompanyName());
        ecoproveedor.setPassword(dtoEcoproveedor.getPassword());
        List<Producto> productos = new ArrayList<>();
        ecoproveedor.setListaProductos(productos);

        return ecoproveedor;
    }

    public DtoEcoproveedorResponse entidadADtoEcoproveedor(Ecoproveedor ecoproveedor){

        DtoEcoproveedorResponse dtoEcoproveedor = new DtoEcoproveedorResponse();
        dtoEcoproveedor.setId(ecoproveedor.getId());
        dtoEcoproveedor.setFirstName(ecoproveedor.getNombre());
        dtoEcoproveedor.setLastName(ecoproveedor.getApellido());
        dtoEcoproveedor.setLogoImage(ecoproveedor.getLogo());
        dtoEcoproveedor.setCuit(ecoproveedor.getCuit());
        dtoEcoproveedor.setPoints(ecoproveedor.getPuntos());
        dtoEcoproveedor.setEmail(ecoproveedor.getEmail());
        dtoEcoproveedor.setCompanyName(ecoproveedor.getRazonSocial());
        dtoEcoproveedor.setRol(ecoproveedor.getRol().name());

        List<DtoProductoResponse> productos = publicacionMapper.entidadProductoListADtoList(ecoproveedor.getListaProductos());

        dtoEcoproveedor.setListaProductos(productos);
        return dtoEcoproveedor;

    }
}
