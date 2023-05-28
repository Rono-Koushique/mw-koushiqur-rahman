import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const initialModalState = {
    allContact: false,
    usContact: false,
    singleContact: false,
    contactId: null,
};

export default function ModalUSA({ modalStates, setModalStates }) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch(
            "https://contact.mediusware.com/api/country-contacts/united%20states/"
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
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
                                <p
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
                                </p>
                            );
                        })}
                </div>
            </div>
        </Modal>
    );
}
