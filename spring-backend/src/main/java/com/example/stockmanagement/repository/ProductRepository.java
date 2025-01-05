package com.example.stockmanagement.repository;

import com.example.stockmanagement.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
