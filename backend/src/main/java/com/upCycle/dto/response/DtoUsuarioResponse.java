package com.upCycle.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DtoUsuarioResponse {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String rol;
}
