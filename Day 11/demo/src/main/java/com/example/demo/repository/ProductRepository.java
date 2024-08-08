package com.example.demo.repository;



import java.util.Optional;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    // return all products
    List<Product> findAll();

    Optional<Product> findByProductId(int productId);
}