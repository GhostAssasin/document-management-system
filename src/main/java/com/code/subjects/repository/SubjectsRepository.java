package com.code.subjects.repository;

import com.code.subjects.domain.Subjects;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by gregory on 24.05.16.
 */
public interface SubjectsRepository extends JpaRepository <Subjects, Long> {
}
