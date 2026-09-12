package com.aiproject.productservice.product;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public Product createProduct(ProductRequest request) {
        Product product = new Product(request.getName(), request.getDescription(), request.getPrice(), request.getStock());
        return repository.save(product);
    }

    public List<Product> listProducts() {
        return repository.findAll();
    }

    public Optional<Product> getProduct(String id) {
        return repository.findById(id);
    }

    public Optional<Product> updateProduct(String id, ProductRequest request) {
        return repository.findById(id).map(product -> {
            product.setName(request.getName());
            product.setDescription(request.getDescription());
            product.setPrice(request.getPrice());
            product.setStock(request.getStock());
            return repository.save(product);
        });
    }

    public boolean deleteProduct(String id) {
        if (!repository.existsById(id)) {
            return false;
        }
        repository.deleteById(id);
        return true;
    }
}
