package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;


import com.example.demo.model.AuthRequest;
import com.example.demo.model.Product;
import com.example.demo.model.UserInfo;
import com.example.demo.service.JwtService;
import com.example.demo.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService service;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @CrossOrigin(origins = "http://localhost:4000")
    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome this endpoint is not secure";
    }

    @CrossOrigin(origins = "http://localhost:4000")
    @PostMapping("/newuser")
    public String addNewUser(@RequestBody UserInfo userInfo) {
        return service.addUser(userInfo);
    }

    @CrossOrigin(origins = "http://localhost:4000")
    @PostMapping("/newproduct")
    public Product addProducts(Product product) {
        return service.addProducts(product);
    }

    @CrossOrigin(origins = "http://localhost:4000")
    @GetMapping("/allproducts")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public List<Product> getAllTheProducts() {
        return service.getProducts();
    }

    @CrossOrigin(origins = "http://localhost:4000")
    @GetMapping("/product/{id}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public Product getProductById(@PathVariable int id) {
        return service.getProduct(id);
    }

    @CrossOrigin(origins = "http://localhost:4000")
    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getUsername());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }

    }

    @CrossOrigin(origins = "http://localhost:4000")
    @GetMapping("/allusers")
    public List<UserInfo> getalluUserInfos() {
        return service.getalluUserInfos();
    }

}
