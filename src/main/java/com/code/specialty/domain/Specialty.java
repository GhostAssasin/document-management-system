package com.code.specialty.domain;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by gregory on 11.05.16.
 */

@Entity
@Table(name ="specialty")
public class Specialty implements Serializable {


        @Id
        @Column(name = "id")
        @GeneratedValue
        private Long id;

        @Column(name = "SpecialtyName")
        private String specialty_name;

        @Column(name = "SpecialtyAbbreviation")
        private String specialty_abbreviation;

        public Specialty() {
        }

        public Specialty(Long id,String SpecialtyName,String SpecialtyAbbreviation){
                this.id=id;
                this.specialty_name=SpecialtyName;
                this.specialty_abbreviation=SpecialtyAbbreviation;
        }

        public void setId(Long id1){this.id=id1;}
        public void setSpecialty_abbreviation(String specialty_abbreviation) {
                this.specialty_abbreviation = specialty_abbreviation;
        }

        public void setSpecialty_name(String specialty_name) {
                this.specialty_name = specialty_name;
        }

        public Long getId(){return id;}
        public String getSpecialty_name(){return specialty_name;}
        public String getSpecialty_abbreviation(){return specialty_abbreviation;}
};