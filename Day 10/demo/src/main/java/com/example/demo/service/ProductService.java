package com.example.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.model.Product;
import com.example.demo.model.UserInfo;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.UserInfoRepository;


import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserInfoRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Product addProducts(Product product) {
        Product products = new Product();
        products.setName(product.getName());
        products.setPrice(product.getPrice());
        products.setQty(product.getQty());
        productRepository.save(products);
        return products;
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product getProduct(int id) {
        return productRepository.findById(id).get();
    }

    public String addUser(UserInfo userInfo) {
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        repository.save(userInfo);
        return "user added to system ";
    }

    public List<UserInfo> getalluUserInfos() {
        return repository.findAll();
    }
}
