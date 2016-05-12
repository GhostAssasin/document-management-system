package com.code.teachers.controller;

import com.code.teachers.domain.Teachers;
import com.code.teachers.service.TeachersService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


/**
 * Created by gregory on 08.05.2016.
 */
@RestController
@RequestMapping("/teacher")
public class TeachersController {

    private static final Logger LOGGER = LoggerFactory.getLogger(TeachersController.class);

    @Autowired
    @Qualifier(value = "teachersService")
    private TeachersService teachersService;

    @RequestMapping(
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<Teachers>> getAllTasks() {
        return ResponseEntity.ok(teachersService.getAll());

    }

    @RequestMapping(value = "/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Teachers> getTaskById(@PathVariable Long id) {
        Teachers task = teachersService.findById(id);
        if (task != null) {
            LOGGER.warn("teacher id = '" + task.getId() + "' is not found");
            return new ResponseEntity<>(task, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addTeachers(@RequestBody Teachers task) {
        if (teachersService.findByTaskTitle(task.getFirst_name()) != null) {
            LOGGER.warn("Teacher" + task.getFirst_name() + "' already in use!");
            return ResponseEntity.badRequest()
                    .body(null);
        } else {
            teachersService.save(task);
            LOGGER.info("Teacher '" + task.getFirst_name() + "' has been added");
            return ResponseEntity.ok().build();
        }
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Teachers> updateTeachers(@RequestBody Teachers teacher) {
        teachersService.save(teacher);
        LOGGER.info("teacher id = '" + teacher.getId() + "' has been update");
        return ResponseEntity.ok()
                .body(teachersService.findById(teacher.getId()));
    }

    @RequestMapping(value = "/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deleteTeacher(@PathVariable Long id) {
        Teachers teacher = teachersService.findById(id);
        if (teacher == null) {
            LOGGER.warn("teacher id = '" + id + "' is not found");
            return ResponseEntity.badRequest()
                    .body(null);
        } else  {
            teachersService.delete(id);
            LOGGER.info("teacher id = '" + id + "' has been deleted");
            return ResponseEntity.ok()
                    .build();
        }
    }
}
