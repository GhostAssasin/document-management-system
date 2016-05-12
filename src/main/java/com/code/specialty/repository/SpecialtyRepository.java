package com.code.specialty.repository;

import com.code.specialty.domain.Specialty;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by gregory on 11.05.16.
 */
public interface SpecialtyRepository extends JpaRepository<Specialty, Long> {
}
