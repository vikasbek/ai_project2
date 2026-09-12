package com.aiproject.productservice.product;

import jakarta.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product-service/products")
public class ProductController {

    private Logger logger = LoggerFactory.getLogger(getClass());
    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@Valid @RequestBody ProductRequest request) {
        logger.info("In create product");
        return ResponseEntity.status(HttpStatus.CREATED).body(service.createProduct(request));
    }

    @GetMapping
    public List<Product> listProducts() {
        logger.info("In get product list");
        return service.listProducts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable String id) {
        logger.info("In get product by id");
        return service.getProduct(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable String id, @Valid @RequestBody ProductRequest request) {
        return service.updateProduct(id, request)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable String id) {
        return service.deleteProduct(id)
                ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }
}
