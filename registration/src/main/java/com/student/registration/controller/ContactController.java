package com.student.registration.controller;

import com.student.registration.model.Contact;
import com.student.registration.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contact")
@CrossOrigin
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/add")
    public String add(@RequestBody Contact contact){
        contactService.saveContact(contact);
        return "Thanks for contact us !";
    }

    @GetMapping("/getAll")
    public List<Contact> getAllContacts(){
        return contactService.getAllContacts();
    }

}

