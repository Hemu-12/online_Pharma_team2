package com.excelR.OnlinePharmacyApplication.controller;

import com.excelR.OnlinePharmacyApplication.entity.User;
import com.excelR.OnlinePharmacyApplication.service.UserService;
import com.excelR.OnlinePharmacyApplication.config.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserService userService;
//http://localhost:8080/api/auth/register
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.registerUser(user);
    }
//http://localhost:8080/api/auth/login
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
        );
        return jwtUtil.generateToken(authentication.getName());
    }
}
