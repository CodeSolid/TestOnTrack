package com.codesolid.testontrack.model.dao

import org.springframework.data.cassandra.mapping.Column
import org.springframework.data.cassandra.mapping.PrimaryKey
import org.springframework.data.cassandra.mapping.Table

@Table(value ="users")
public class User {

    @PrimaryKey
    @Column("email")
    String email

    @Column("password")
    String password

    @Column("name")
    String name

    @Column("account")
    String account

    @Column("session_token")
    String sessionToken
}