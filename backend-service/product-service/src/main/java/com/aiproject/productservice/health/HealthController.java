package com.aiproject.productservice.health;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("${service.name:product-service}")
public class HealthController {

    @Value("${service.name:product-service}")
    private String serviceName;

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "ok", "service", serviceName);
    }
}
