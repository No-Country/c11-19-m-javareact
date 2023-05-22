package com.upCycle.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtGenerador {

    //Método para crear un token por medio de la authentication
    public String generarToke(Authentication authentication){
        String username = authentication.getName();
        Date tiempoActual = new Date();
        Date expiracionToken= new Date(tiempoActual.getTime() + ConstantesSeguridad.JWT_EXPIRATION_TOKEN);

        //Linea para generar el token
        String token = Jwts.builder() //Construir un token JWT llamando token
                .setSubject(username) //Aca establecemos el nombre de usuario que esta iniciando sesión
                .setIssuedAt(new Date()) //Establecemos la fecha de emisión del token en el momento actual
                .setExpiration(expiracionToken) //Establecemos la fecha de caducidad del token
                .signWith(SignatureAlgorithm.ES512, ConstantesSeguridad.JWT_FIRMA) //Utilizamos este método de encriptación
                .compact();//Este método finaliza la construccion del token y la convierte en una cadena
        return token;
    }

    //Método para extraer un user name a partir de un token
    public String obtenerUsernameDeJwt(String token){
        Claims claims = Jwts.parser()//El método parser se utiliza con el fin de analizar el token
                .setSigningKey(ConstantesSeguridad.JWT_FIRMA)//Establece la clase de firma, que se utilizara para desencriptar el token
                .parseClaimsJws(token)//Se utiliza para verificar la firma del token, a partir del string "Token"
                .getBody();//Obtenemos el claims(cuerpo) ya verificado del token el cual contendrá la información del usuario, fecha de expiración y firma del token
        return claims.getSubject();//Devuelve el nombre de usuario
    }

    //Método para validar el token
    public Boolean validarToken(String token){
        try{
            //Validación del token por medio de la firma que contiene el string token(token)
            //Si son idénticas validará el token a caso contrario saltara la excepción de abajo
            Jwts.parser().setSigningKey(ConstantesSeguridad.JWT_FIRMA).parseClaimsJws(token);
            return true;
        }catch (Exception ex){
            throw new AuthenticationCredentialsNotFoundException("JWT expiró o esta incorrecto");
        }
    }

}
