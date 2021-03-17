package com.example.demo.controller;

import com.example.demo.model.Movie;
import com.example.demo.model.User;
import com.example.demo.repository.MovieRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;

@org.springframework.web.bind.annotation.RestController
public class RestController {
    private MovieRepository movieRepository;
    private UserRepository userRepository;
    //Klassen her er tiltænkt at være vores RestController. Altså indeholde de metoder der skal returnere et html svar og laves om til JSON


    public RestController(MovieRepository movieRepository, UserRepository userRepository) {
        this.movieRepository = movieRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/getAllMovies")
    public List<Movie> findAllMovies(){
        List<Movie> movies = movieRepository.findAll();
        return movies;
    }

    @PostMapping(value = "/createUser", consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user){
        return userRepository.save(user);
    }

}
