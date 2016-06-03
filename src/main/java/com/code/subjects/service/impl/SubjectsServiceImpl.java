package com.code.subjects.service.impl;

import com.code.subjects.domain.Subjects;
import com.code.subjects.repository.SubjectsRepository;
import com.code.subjects.service.SubjectsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;

/**
 * Created by gregory on 24.05.16.
 */
@Component("subjectsService")
public class SubjectsServiceImpl implements SubjectsService{
    @Autowired
    public SubjectsRepository repository;

    @Override
    public Collection<Subjects> getAll() {
        return repository.findAll();
    }

    @Override
    public Subjects findById(Long id) {
        return repository.findOne(id);
    }

    @Override
    public void save(Subjects subjects) {
        repository.save(subjects);
    }

    @Override
    public void delete(Long id) {
        repository.delete(id);
    }

}
