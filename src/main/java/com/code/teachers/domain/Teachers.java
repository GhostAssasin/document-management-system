package com.code.teachers.domain;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table(name = "teachers")
public class Teachers implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

    @Column(name = "subject")
    private String[] subject=new String[10];

    @Column(name = "last_activity")
    private String last_activity;

    @Column(name = "groups")
    private String[] groups;



    public Teachers() {
    }

    public Teachers(String first_name, String last_name, String[] subject, String last_activity, String[] groups) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.subject = subject;
        this.last_activity = last_activity;
        this.groups = groups;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "teacherId=" + id +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", subject='" + subject + '\'' +
                ", last_activity='" + last_activity + '\'' +
                ", groups=" + groups +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String[] getSubject() {
        return this.subject;
    }

    public void setSubject(String[] subject) {
        this.subject = subject;
    }

    public String getLast_activity() {
        return this.last_activity;
    }

    public void setLast_activity(String last_activity) {
        this.last_activity = last_activity;
    }

    public String[] getGroups() {
        return groups;
    }

    public void setGroups(String[] groups) {
        this.groups = groups;
    }



}