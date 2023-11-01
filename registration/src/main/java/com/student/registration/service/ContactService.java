package com.student.registration.service;


import com.student.registration.model.Contact;

import java.util.List;

public interface ContactService {
    public Contact saveContact (Contact contact);

    public List<Contact> getAllContacts();
}
