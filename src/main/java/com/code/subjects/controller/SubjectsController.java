package com.code.subjects.controller;

import com.code.subjects.domain.Subjects;
import com.code.subjects.service.SubjectsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Created by gregory on 24.05.16.
 */

@RestController
@RequestMapping("/subjects")
public class SubjectsController {


    @Autowired
    @Qualifier(value = "subjectsService")
    private SubjectsService subjectsService;

    @RequestMapping(
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<Subjects>> getAllSpecialty() {
        return ResponseEntity.ok(subjectsService.getAll());
    }

    @RequestMapping(
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addSpecialty(@RequestBody Subjects subjects) {
        subjectsService.save(subjects);
        return ResponseEntity.ok().build();
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Subjects> updateSpecialty(@RequestBody Subjects subjects) {
        subjectsService.save(subjects);
        return ResponseEntity.ok()
                .body(subjectsService.findById(subjects.getId()));
    }

    @RequestMapping(value = "/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deleteSpecialty(@PathVariable Long id) {
        Subjects specialty = subjectsService.findById(id);
        if (specialty == null) {
            return ResponseEntity.badRequest()
                    .body(null);
        } else  {
            subjectsService.delete(id);
            return ResponseEntity.ok()
                    .build();
        }
    }
}