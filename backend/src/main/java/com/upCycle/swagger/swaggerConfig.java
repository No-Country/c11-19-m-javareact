package com.upCycle.swagger;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.models.OpenAPI;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition
public class swaggerConfig {

    public OpenAPI api(){
        return new OpenAPI();
    }
}
