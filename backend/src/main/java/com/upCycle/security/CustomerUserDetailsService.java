package com.upCycle.security;
import com.upCycle.Entity.Rol;
import com.upCycle.Entity.Usuario;
import com.upCycle.repository.IRepositoryUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerUserDetailsService implements UserDetailsService {

    private IRepositoryUsuario usuarioRepo;

    @Autowired
    public CustomerUserDetailsService(IRepositoryUsuario usuarioRepo) {
        this.usuarioRepo = usuarioRepo;
    }

    //Método para traernos una lista de Autoridades por medio de una lista de roles
    public Collection<GrantedAuthority> mapToAuthorities(List<Rol> roles){
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getNombreRol().name())).collect(Collectors.toList());
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepo.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));

        return new User(usuario.getEmail(), usuario.getPassword(), mapToAuthorities(usuario.getRoles()));
    }
}
