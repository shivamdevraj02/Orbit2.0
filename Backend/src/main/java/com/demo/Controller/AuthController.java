package com.demo.Controller;

import com.demo.Model.Users;
import com.demo.Repository.Users_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // Adjust for your React frontend URL
public class AuthController {

    @Autowired
    private Users_Repo usersRepo;

    // Simple in-memory token store for demonstration (Use Redis or JWT in production)
    public static final Map<String, String> activeSessions = new HashMap<>();

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        Optional<Users> userOpt = usersRepo.findByUsername(username);

        if (userOpt.isPresent() && userOpt.get().getPassword().equals(password)) {
            // Generate a simple token to replace the sessionStorage '1' value in React
            String token = UUID.randomUUID().toString();
            activeSessions.put(token, "ADMIN"); 
            
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }
}