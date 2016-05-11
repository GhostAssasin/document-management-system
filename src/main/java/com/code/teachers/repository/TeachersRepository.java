package com.code.teachers.repository;

import com.code.teachers.domain.Teachers;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by gregory on 10.05.2016.
 */
public interface TeachersRepository extends JpaRepository<Teachers, Long> {

}
