package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer userid;
    private Integer movieid;
    private String date;

    private String movieTitle, movieHall, movieTimeslot;

    public Booking() {
    }

    public Booking(Long id, Integer userid, Integer movieid, String date, String movieTitle, String movieHall, String movieTimeslot) {
        this.id = id;
        this.userid = userid;
        this.movieid = movieid;
        this.date = date;
        this.movieTitle = movieTitle;
        this.movieHall = movieHall;
        this.movieTimeslot = movieTimeslot;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    public String getMovieHall() {
        return movieHall;
    }

    public void setMovieHall(String movieHall) {
        this.movieHall = movieHall;
    }

    public String getMovieTimeslot() {
        return movieTimeslot;
    }

    public void setMovieTimeslot(String movieTimeslot) {
        this.movieTimeslot = movieTimeslot;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Booking booking = (Booking) o;
        return Objects.equals(id, booking.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Integer getMovieid() {
        return movieid;
    }

    public void setMovieid(Integer movieid) {
        this.movieid = movieid;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
