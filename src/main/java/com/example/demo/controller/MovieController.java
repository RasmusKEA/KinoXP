package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MovieController {

    @GetMapping("/movies")
    public String getMovies(){
        return "movies";
    }

    @GetMapping("/booking")
    public String getBooking(){
        return "booking";
    }
}
