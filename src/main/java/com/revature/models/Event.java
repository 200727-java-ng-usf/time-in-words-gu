package com.revature.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Event {


    @Id
    @Column
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;


    @Column
    private String eventName;


    @Column
    private String location;

    @Column
    private String date;

    @Column
    private int hour;

    @Column
    private int minute;


}
