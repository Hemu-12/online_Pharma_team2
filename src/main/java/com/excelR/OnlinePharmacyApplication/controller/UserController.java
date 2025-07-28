package com.excelR.OnlinePharmacyApplication.controller;

import com.excelR.OnlinePharmacyApplication.entity.User;
import com.excelR.OnlinePharmacyApplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PutMapping("/update")
    public User updateProfile(@RequestBody User user) {
        return userService.registerUser(user); // reuse register for update
    }
}
