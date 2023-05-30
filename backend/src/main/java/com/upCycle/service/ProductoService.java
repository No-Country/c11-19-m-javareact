package com.upCycle.service;

import com.upCycle.dto.request.DtoProducto;
import com.upCycle.dto.response.DtoProductoResponse;
import com.upCycle.entity.Ecoproveedor;
import com.upCycle.entity.Producto;
import com.upCycle.entity.Ubicacion;
import com.upCycle.entity.Usuario;
import com.upCycle.enums.Rol;
import com.upCycle.exception.UserUnauthorizedException;
import com.upCycle.mapper.ProductoMapper;
import com.upCycle.repository.ProductoRepository;
import com.upCycle.repository.UsuarioRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class ProductoService {

    private final ProductoRepository repository;
    private final ProductoMapper mapper;
    private final UsuarioRepository usuarioRepository;
    private final UbicacionService ubicacionService;
    private final EcoproveedorService ecoproveedorService;
    @Autowired
    public ProductoService(ProductoRepository repository, ProductoMapper mapper, UsuarioRepository usuarioRepository, UbicacionService ubicacionService, EcoproveedorService ecoproveedorService) {
        this.repository = repository;
        this.mapper = mapper;
        this.usuarioRepository = usuarioRepository;
        this.ubicacionService = ubicacionService;
        this.ecoproveedorService = ecoproveedorService;
    }

    public DtoProductoResponse crearProducto(DtoProducto dtoProducto, Usuario logueado) throws UserUnauthorizedException {

        //Usuario logueado = (Usuario) session.getAttribute("usuarioLogueado");

        if(!logueado.getRol().equals(Rol.ECOPROVEEDOR)){
            throw new UserUnauthorizedException("Usuario no autorizado");
        }

        Ecoproveedor ecoproveedor = usuarioRepository.buscarEcoproveedorPorId(logueado.getId()).get();

        Producto producto = mapper.DtoAentidadProducto(dtoProducto);

        Ubicacion ubicacion = ubicacionService.buscarPorNombre(dtoProducto.getLocation());
        producto.setEcoproveedor(ecoproveedor);
        producto.setUbicacion(ubicacion);
        ecoproveedorService.guardarProducto(ecoproveedor, producto);
        mapper.entidadADtoProducto(repository.save(producto));
        return mapper.entidadADtoProducto(producto);
    }
}
