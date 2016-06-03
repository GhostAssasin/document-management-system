package com.code.subjects.domain;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by gregory on 24.05.16.
 */
@Entity
@Table(name ="subjects")
public class Subjects implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name = "SubjectsName")
    private String subjects_name;

    public Subjects(){

    }

    public Subjects(Long id,String SubjectsName){
        this.id=id;
        this.subjects_name=SubjectsName;
      }

    public void setId(Long id1){this.id=id1;}

    public void setSubjects_name(String subjects_name){
        this.subjects_name=subjects_name;
    }

    public Long getId(){return this.id;}

    public String getSubjects_name(){return subjects_name;}

}
