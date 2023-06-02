package com.upCycle.service;

import com.upCycle.dto.request.DtoEcoproveedor;
import com.upCycle.dto.response.DtoEcoproveedorResponse;
import com.upCycle.entity.Ecoproveedor;
import com.upCycle.entity.Producto;
import com.upCycle.entity.Usuario;
import com.upCycle.exception.UserAlreadyExistException;
import com.upCycle.mapper.EcoproveedorMapper;
import com.upCycle.repository.UsuarioRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EcoproveedorService {

    private final UsuarioRepository repository;
    private final EcoproveedorMapper ecoproveedorMapper;

    @Autowired
    public EcoproveedorService(UsuarioRepository repository, EcoproveedorMapper ecoproveedorMapper) {
        this.repository = repository;
        this.ecoproveedorMapper = ecoproveedorMapper;
    }

    public DtoEcoproveedorResponse registrarEcoproveedor(DtoEcoproveedor dtoEcoproveedor) throws UserAlreadyExistException {

        Optional<Usuario> usuario = repository.findByEmail(dtoEcoproveedor.getEmail());

        if(usuario.isPresent()){
            throw new UserAlreadyExistException("El usuario ya existe");
        }

        Ecoproveedor user = repository.save(ecoproveedorMapper.dtoEcoproveedorAEntidad(dtoEcoproveedor));
        //session.setAttribute("usuarioLogueado", user);
        return ecoproveedorMapper.entidadADtoEcoproveedor(user);
    }

    public void guardarProducto(Ecoproveedor ecoproveedor, Producto producto){

        ecoproveedor.getListaProductos().add(producto);
        int puntos = ecoproveedor.calcularPuntosTotales();
        ecoproveedor.setPuntos(puntos);
        //repository.save(ecoproveedor);
    }
}
