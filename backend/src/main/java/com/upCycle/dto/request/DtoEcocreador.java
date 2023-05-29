package com.upCycle.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DtoEcocreador {

    private String firstName;
    private String lastName;
    private String occupation;
    private String image;
    private String email;
    private String password;
    private String password2;
    private String rol;
}
