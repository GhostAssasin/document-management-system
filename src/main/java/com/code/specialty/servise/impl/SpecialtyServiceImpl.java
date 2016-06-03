package com.code.specialty.servise.impl;

import com.code.specialty.domain.Specialty;
import com.code.specialty.repository.SpecialtyRepository;
import com.code.specialty.servise.SpecialtyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;

/**
 * Created by gregory on 11.05.16.
 */
@Component("specialtyService")
public class SpecialtyServiceImpl implements SpecialtyService {

    @Autowired
    public SpecialtyRepository repository;

    @Override
    public Collection<Specialty> getAll() {
        return repository.findAll();
    }

    @Override
    public Specialty findById(Long id) {
        return repository.findOne(id);
    }

    @Override
    public void save(Specialty specialty) {
        repository.save(specialty);

    }

    @Override
    public void delete(Long id) {
        repository.delete(id);
    }
}
