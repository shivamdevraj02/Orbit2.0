package com.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.Model.Users;

@Repository 
public interface Users_Repo extends JpaRepository<Users, Integer> {
	Optional<Users> findByUsername(String username);
	Optional<Users> findByEmail(String email);
}