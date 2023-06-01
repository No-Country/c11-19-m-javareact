package com.upCycle.service;

import com.upCycle.dto.request.DtoProducto;
import com.upCycle.dto.response.DtoEcoproveedorResponse;
import com.upCycle.dto.response.DtoProductoResponse;
import com.upCycle.entity.Ecoproveedor;
import com.upCycle.entity.Producto;
import com.upCycle.entity.Ubicacion;
import com.upCycle.entity.Usuario;
import com.upCycle.enums.Rol;
import com.upCycle.exception.UserNotExistException;
import com.upCycle.exception.UserUnauthorizedException;
import com.upCycle.mapper.EcoproveedorMapper;
import com.upCycle.mapper.ProductoMapper;
import com.upCycle.repository.ProductoRepository;
import com.upCycle.repository.UsuarioRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ProductoService {

    private final ProductoRepository repository;
    private final ProductoMapper mapper;

    private final EcoproveedorMapper EcoproveedorMapper;
    private final UsuarioRepository usuarioRepository;
    private final UbicacionService ubicacionService;
    private final EcoproveedorService ecoproveedorService;

    @Autowired
    public ProductoService(ProductoRepository repository, ProductoMapper mapper, com.upCycle.mapper.EcoproveedorMapper ecoproveedorMapper,
                           UsuarioRepository usuarioRepository, UbicacionService ubicacionService, EcoproveedorService ecoproveedorService) {
        this.repository = repository;
        this.mapper = mapper;
        EcoproveedorMapper = ecoproveedorMapper;
        this.usuarioRepository = usuarioRepository;
        this.ubicacionService = ubicacionService;
        this.ecoproveedorService = ecoproveedorService;
    }

    public DtoProductoResponse crearProducto(DtoProducto dtoProducto, Usuario logueado) throws UserUnauthorizedException {

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

    public void eliminarProducto(Long id, HttpSession session) throws UserUnauthorizedException, UserNotExistException {

        Usuario logueado = (Usuario) session.getAttribute("usuarioLogueado");
        if(Objects.isNull(logueado)){
            throw new UserNotExistException("Usuario inexistente");
        }
        if(logueado.getRol().equals(Rol.ECOCREADOR)){
            throw new UserUnauthorizedException("Usuario no autorizado");
        }
        Producto producto = repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "El producto con id: "+id+", no existe"));
        repository.delete(producto);
    }

    public List<DtoProductoResponse> listarProductos(HttpSession session) throws UserNotExistException {

        Usuario logueado = (Usuario) session.getAttribute("usuarioLogueado");
        if(Objects.isNull(logueado)){
            throw new UserNotExistException("Usuario inexistente");
        }
        List<Producto> listEntidadProductos = repository.findAll();
        return mapper.entidadProductoListADtoList(listEntidadProductos);

    }

    public DtoEcoproveedorResponse buscarEcoproveedorPorIdProdcuto(Long id, HttpSession session) throws UserNotExistException {

        Usuario logueado = (Usuario) session.getAttribute("usuarioLogueado");
        if(Objects.isNull(logueado)){
            throw new UserNotExistException("Usuario inexistente");
        }

        Optional<Producto> oProducto = repository.findById(id);
        if(oProducto.isPresent()){
            Producto producto = oProducto.get();
            Optional<Ecoproveedor> oEcoproveedor = usuarioRepository.buscarEcoproveedorPorId(producto.getEcoproveedor().getId());

            Ecoproveedor ecoproveedor = oEcoproveedor.orElse(null);
            assert ecoproveedor != null;
            return EcoproveedorMapper.entidadADtoEcoproveedor(ecoproveedor);
        }
        return null;
    }

    public List<DtoProductoResponse> listarPorMaterial(String material, HttpSession session) throws UserNotExistException {

        Usuario logueado = (Usuario) session.getAttribute("usuarioLogueado");
        if(Objects.isNull(logueado)){
            throw new UserNotExistException("Usuario inexistente");
        }
        List<Producto> listEntidadProductos = repository.findByMaterial(material);
        return mapper.entidadProductoListADtoList(listEntidadProductos);
    }
}
