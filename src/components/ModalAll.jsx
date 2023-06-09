import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const initialModalState = {
    allContact: false,
    usContact: false,
    singleContact: false,
    contactId: null,
};

export default function ModalAll({ modalStates, setModalStates }) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("https://contact.mediusware.com/api/contacts/")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setContacts(data.results);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <Modal modalStates={modalStates} setModalStates={setModalStates}>
            <div>
                <h1>All Contacts</h1>
                <div>
                    {contacts &&
                        contacts.map((contact) => {
                            return (
                                <div
                                    className="link"
                                    key={contact.id}
                                    onClick={() => {
                                        setModalStates({
                                            ...initialModalState,
                                            singleContact: true,
                                            contactInfo: { ...contact },
                                        });
                                    }}
                                >
                                    {contact.phone}
                                </div>
                            );
                        })}
                </div>
            </div>
        </Modal>
    );
}
