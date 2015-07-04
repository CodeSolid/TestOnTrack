package com.codesolid.testontrack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.cassandra.repository.config.EnableCassandraRepositories;

@SpringBootApplication
@EnableCassandraRepositories
public class TestOnTrackConfiguration {

    public static void main(String[] args) {
        SpringApplication.run(TestOnTrackConfiguration.class, args);
    }

}