package com.student.registration.service;

import com.student.registration.model.Student;

import java.util.List;

public interface StudentService {
   public Student saveStudent (Student student);
   public List<Student> getAllStudents();
}
