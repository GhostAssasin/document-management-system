package com.code.specialty.servise;

import com.code.specialty.domain.Specialty;

import java.util.Collection;

/**
 * Created by gregory on 11.05.16.
 */

public interface SpecialtyService {

    Collection<Specialty> getAll();

    Specialty findById(Long id);

    void save(Specialty specialty);

    void delete(Long id);
}
