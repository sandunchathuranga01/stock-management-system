package com.example.spring_backend;

import com.example.stockmanagement.StockManagementApplication;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = StockManagementApplication.class) // Reference the main application class
class SpringBackendApplicationTests {

	@Test
	void contextLoads() {
		// Ensure the application context loads without issues
	}
}
