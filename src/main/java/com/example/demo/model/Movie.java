package com.example.demo.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Movie {
    //Model til vores film

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String movieTitle;
    private int releaseYear;
    private String genre;
    private String image;
    private String hall;
    private String timeslot;

    public Movie() {
    }

    public Movie(Long id, String movieTitle, int releaseYear, String genre, String image, String hall, String timeslot) {
        this.id = id;
        this.movieTitle = movieTitle;
        this.releaseYear = releaseYear;
        this.genre = genre;
        this.image = image;
        this.hall = hall;
        this.timeslot = timeslot;
    }

    public String getTimeslot() {
        return timeslot;
    }

    public void setTimeslot(String timeslot) {
        this.timeslot = timeslot;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Movie that = (Movie) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }



    public String getHall() {
        return hall;
    }

    public void setHall(String hall) {
        this.hall = hall;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    public int getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(int releaseYear) {
        this.releaseYear = releaseYear;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }
    //tjene
}
