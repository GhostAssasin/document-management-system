package com.code.subjects.service;


import com.code.subjects.domain.Subjects;

import java.util.Collection;

/**
 * Created by gregory on 24.05.16.
 */
public interface SubjectsService{

        Collection<Subjects> getAll();

        public Subjects findById(Long id);

        public void save(Subjects subjects);

        public void delete(Long id);


}
