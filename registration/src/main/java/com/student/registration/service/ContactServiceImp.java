package com.student.registration.service;

import com.student.registration.model.Contact;
import com.student.registration.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactServiceImp implements ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Override
    public Contact saveContact(Contact contact){
        return contactRepository.save(contact);
    }

    @Override
    public List<Contact> getAllContacts(){
        return contactRepository.findAll();
    }
}
