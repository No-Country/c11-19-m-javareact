package com.upCycle.repository;

import com.upCycle.entity.Ecocreador;
import com.upCycle.entity.Ecoproveedor;
import com.upCycle.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmail(String email);

    @Query("SELECT u FROM Usuario u WHERE u.id = :id")
    Optional<Ecoproveedor> buscarEcoproveedorPorId(Long id);

    @Query("SELECT u FROM Usuario u WHERE u.id = :id")
    Optional<Ecocreador> buscarEcocreadorPorId(Long id);
}
