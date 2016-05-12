package com.code.specialty.controller;

import com.code.specialty.domain.Specialty;
import com.code.specialty.servise.SpecialtyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Created by gregory on 11.05.16.
 */

@RestController
@RequestMapping("/specialty")
public class SpecialtyController {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpecialtyController.class);

    // @Autowired fix this!!
    @Qualifier(value = "specialtyService")
    private SpecialtyService specialtyService;

    @RequestMapping(
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<Specialty>> getAllTasks() {
        return ResponseEntity.ok(specialtyService.getAll());
    }

    @RequestMapping(
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addSpecialty(@RequestBody Specialty specialty) {
        specialtyService.save(specialty);
        LOGGER.info("specialty '" + specialty.getSpecialty_name() + "' has been added");
        return ResponseEntity.ok().build();
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Specialty> updateSpecialty(@RequestBody Specialty specialty) {
        specialtyService.save(specialty);
        LOGGER.info("specialty has been update");
        return ResponseEntity.ok()
                .body(specialtyService.findById(specialty.getId()));
    }

    @RequestMapping(value = "/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deleteSpecialty(@PathVariable Long id) {
        Specialty specialty = specialtyService.findById(id);
        if (specialty == null) {
            LOGGER.warn("specialty id = '" + id + "' is not found");
            return ResponseEntity.badRequest()
                    .body(null);
        } else  {
            specialtyService.delete(id);
            LOGGER.info("specialty id = '" + id + "' has been deleted");
            return ResponseEntity.ok()
                    .build();
        }
    }
}

