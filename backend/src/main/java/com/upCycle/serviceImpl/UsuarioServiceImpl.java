package com.upCycle.serviceImpl;

import com.upCycle.Entity.EcoCreador;
import com.upCycle.Entity.EcoProveedor;
import com.upCycle.Entity.Rol;
import com.upCycle.Entity.Usuario;
import com.upCycle.constants.upCycleConstant;
import com.upCycle.enums.TipoRol;
import com.upCycle.exception.MiExcepcion;
import com.upCycle.repository.IRepositoryUsuario;
import com.upCycle.service.IUsuarioService;
import com.upCycle.utils.upCycleUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UsuarioServiceImpl  {

    private IRepositoryUsuario usuarioRepo;

    @Autowired
    public UsuarioServiceImpl(IRepositoryUsuario usuarioRepo) {
        this.usuarioRepo = usuarioRepo;
    }

    public ResponseEntity<String> signup(Map<String, String> requestMap) {

        try{
            if(validateSignUpMap(requestMap)){

                Optional<Usuario> oUser = usuarioRepo.findByEmail(requestMap.get("email"));

                if(oUser.isEmpty()){

                    if(requestMap.get("rol").equals("ecocreador")){
                        usuarioRepo.save(getEcoCreador(requestMap, new EcoCreador()));

                    }else if(requestMap.get("rol").equals("ecoproveedor")){
                        usuarioRepo.save(getEcoProveedor(requestMap, new EcoProveedor()));
                    }
                    return upCycleUtils.getResponseEntity("El registro se realizo con exito", HttpStatus.OK);

                }else {
                    return upCycleUtils.getResponseEntity("El email ya se encuentra registrado", HttpStatus.BAD_REQUEST);
                }
            }else {
                return upCycleUtils.getResponseEntity(upCycleConstant.INVALID_DATA, HttpStatus.BAD_REQUEST);
            }

        }catch (Exception ex){
            ex.printStackTrace();
        }

        return upCycleUtils.getResponseEntity(upCycleConstant.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }


    private boolean validateSignUpMap(Map<String, String> requestMap) throws MiExcepcion{

        if(requestMap.containsKey("email") && requestMap.containsKey("password") && requestMap.containsKey("password2") && requestMap.containsKey("rol")){

            validar(requestMap.get("email"), requestMap.get("password"), requestMap.get("password2"));
            return true;
        }else if(requestMap.containsKey("name") && requestMap.containsKey("email") && requestMap.containsKey("id") && requestMap.containsKey("rol")){
            return true;
        }
        return false;
    }

    private void validar(String email, String password, String password2) throws MiExcepcion {

        if (email.isEmpty() || email == null) {
            throw new MiExcepcion("El email no puede ser nulo o estar vacio");
        }

        if (password.isEmpty() || password == null || password.length()<6) {
            throw new MiExcepcion("El email no puede ser nulo y debe tener mas de 5 digitos");
        }

        if (!password.equals(password2)) {
            throw new MiExcepcion("Las contraseñas ingresadas deben ser iguales");
        }
    }

    private Usuario getEcoCreador(Map<String, String> requestMap, Usuario ecoCreador){

        List<Rol> listaRoles = new ArrayList<>();

        if(requestMap.get("rol").equals("ecocreador")){
            ecoCreador.setEmail(requestMap.get("email"));

            Rol rol = new Rol();
            rol.setNombreRol(TipoRol.ECOCREADOR);

            listaRoles.add(rol);

            ecoCreador.setRoles(listaRoles);

            if(requestMap.containsKey("name")){
                ecoCreador.setNombre(requestMap.get("name"));
            }

            if(requestMap.containsKey("password")){
                ecoCreador.setPassword(requestMap.get("password"));
            }

        }
        return ecoCreador;
    }

    private Usuario getEcoProveedor(Map<String, String> requestMap, Usuario ecoProveedor){

        List<Rol> listaRoles = new ArrayList<>();

        if(requestMap.get("rol").equals("ecoproveedor")){
            ecoProveedor.setEmail(requestMap.get("email"));

            Rol rol = new Rol();
            rol.setNombreRol(TipoRol.ECOPROVEEDOR);

            listaRoles.add(rol);

            ecoProveedor.setRoles(listaRoles);

            if(requestMap.containsKey("name")){
                ecoProveedor.setNombre(requestMap.get("name"));
            }

            if(requestMap.containsKey("password")){
                ecoProveedor.setPassword(requestMap.get("password"));
            }

        }
        return ecoProveedor;
    }
}
