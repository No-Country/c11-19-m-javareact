package com.upCycle.mapper;

import com.upCycle.dto.request.DtoProducto;
import com.upCycle.dto.response.DtoProductoResponse;
import com.upCycle.entity.Producto;
import com.upCycle.service.UbicacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class ProductoMapper {


    public Producto DtoAentidadProducto(DtoProducto dtoProducto){

        Producto entidadProducto = new Producto();
        entidadProducto.setDescripcion(dtoProducto.getDescription());
        entidadProducto.setPeso(dtoProducto.getKilograms());
        entidadProducto.setImagen(dtoProducto.getImage());
        entidadProducto.setEcoproveedor(null);
        entidadProducto.setMaterial(entidadProducto.materialMapper(dtoProducto.getMaterial()));
        entidadProducto.setUbicacion(null);
        return entidadProducto;
    }
    public DtoProductoResponse entidadADtoProducto(Producto entidadProduto){

        DtoProductoResponse dtoProducto = new DtoProductoResponse();
        dtoProducto.setId(entidadProduto.getId());
        dtoProducto.setDescription(entidadProduto.getDescripcion());
        dtoProducto.setKilograms(entidadProduto.getPeso());
        dtoProducto.setImage(entidadProduto.getImagen());
        dtoProducto.setMaterial(entidadProduto.getMaterial().name());
        dtoProducto.setLocation(entidadProduto.getUbicacion().getNombre());
        return dtoProducto;
    }

    public List<DtoProductoResponse> entidadProductoListADtoList(List<Producto> entidadListProductos) {
        List<DtoProductoResponse> listaDtoProductos = new ArrayList<>();

        if(entidadListProductos.size() == 0){
            return listaDtoProductos;
        }
        for (Producto entidad: entidadListProductos) {
            listaDtoProductos.add(entidadADtoProducto(entidad));
        }
        return listaDtoProductos;
    }
}
