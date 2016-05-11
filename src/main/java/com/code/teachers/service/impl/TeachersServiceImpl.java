package com.code.teachers.service.impl;

import com.code.teachers.domain.Teachers;
import com.code.teachers.repository.TeachersRepository;
import com.code.teachers.service.TeachersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;

/**
 * Created by gregory on 08.05.2016.
 */
@Component("teachersService")
public class TeachersServiceImpl implements TeachersService {

    @Autowired
    private TeachersRepository repository;


    @Override
    public Collection<Teachers> getAll() {
       return repository.findAll();
    }

    @Override
    public Teachers findById(Long id) {
        return null;
    }

    @Override
    public Teachers findByTaskTitle(String title) {
        return null;
    }

    @Override
    public Long getCountRow() {
        return null;
    }

    @Override
    public void save(Teachers task) {
        repository.save(task);
    }

    @Override
    public void delete(Long id) { repository.delete(id);}
}
