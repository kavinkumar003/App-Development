
package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Login;
import com.example.demo.repository.LoginRepository;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public Login saveLogin(Login login) {
        login.setPassword(login.getPassword());
        return loginRepository.save(login);
    }

    public Login getLogin(int id) {
        return loginRepository.findById(id).orElse(null);
    }

    public Login forgotLogin(String username, Login login) {
        Login existingLogin = loginRepository.findByUsername(username);
        if (existingLogin != null) {
            existingLogin.setPassword(login.getPassword());
            loginRepository.save(existingLogin);
            return existingLogin;
        }
        return null;
    }
}
