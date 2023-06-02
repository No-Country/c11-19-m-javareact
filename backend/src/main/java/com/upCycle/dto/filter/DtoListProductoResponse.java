package com.upCycle.dto.filter;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DtoListProductoResponse {

    private Long id;

    private String description;

    private String material;

    private Double kilograms;

    private String location;

    private String image;

    private String companyName;
}
