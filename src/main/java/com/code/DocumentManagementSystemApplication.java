package com.code;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.WebMvcAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@Configuration
@ComponentScan
@EnableAutoConfiguration
public class DocumentManagementSystemApplication extends WebMvcAutoConfiguration.WebMvcAutoConfigurationAdapter {

	public static void main(String[] args) {
		SpringApplication.run(DocumentManagementSystemApplication.class, args);

	}

}

