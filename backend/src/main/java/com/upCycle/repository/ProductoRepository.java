package com.upCycle.repository;

import com.upCycle.entity.Producto;
import com.upCycle.enums.TipoMaterial;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {

    List<Producto> findByMaterial(TipoMaterial material);
}
