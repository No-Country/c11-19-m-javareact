package com.upCycle.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DtoProducto {

    private String description;

    private String material;

    private Double kilograms;

    private String location;

    private String image;
}
