package com.upCycle.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DtoProductoResponse {

    private Long id;

    private String description;

    private String material;

    private Double kilograms;

    private String location;

    private String image;
}
