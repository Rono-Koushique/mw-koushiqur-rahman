import React, { useEffect, useState } from "react";
import Modal from "./Modal";

export default function ModalSingle({ modalStates, setModalStates }) {
    const contact = modalStates.contactInfo;
    return (
        <Modal modalStates={modalStates} setModalStates={setModalStates}>
            {
                <div>
                    <h1>Contacts Id :{contact.id}</h1>
                    <h4>{contact.phone}</h4>
                    <p>{contact.country.name}</p>
                </div>
            }
        </Modal>
    );
}
