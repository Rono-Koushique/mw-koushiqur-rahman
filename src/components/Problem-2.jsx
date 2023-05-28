import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalAll from "./ModalAll";
import ModalUSA from "./ModalUSA";
import ModalSingle from "./ModalSingle";
// import Modal from "react-modal";

const initialModalState = {
    allContact: false,
    usContact: false,
    singleContact: false,
    contactId: null,
};

const Problem2 = () => {
    const navigate = useNavigate();
    const [modalStates, setModalStates] = useState(initialModalState);

    function showAllContactModal() {
        navigate("/problem-2/all-contacts");
        setModalStates({ ...initialModalState, allContact: true });
    }

    function showUSContactModal() {
        navigate("/problem-2/us-contacts");
        setModalStates({ ...initialModalState, usContact: true });
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button
                        className="btn btn-lg"
                        style={{
                            background: "#46139f",
                            color: "white",
                        }}
                        type="button"
                        onClick={showAllContactModal}
                    >
                        All Contacts
                    </button>
                    <button
                        className="btn btn-lg"
                        style={{
                            background: "#ff7f50",
                            color: "white",
                        }}
                        type="button"
                        onClick={showUSContactModal}
                    >
                        US Contacts
                    </button>
                </div>
            </div>
            {modalStates.allContact && (
                <ModalAll
                    modalStates={modalStates}
                    setModalStates={setModalStates}
                />
            )}
            {modalStates.usContact && (
                <ModalUSA
                    modalStates={modalStates}
                    setModalStates={setModalStates}
                />
            )}
            {modalStates.singleContact && (
                <ModalSingle
                    modalStates={modalStates}
                    setModalStates={setModalStates}
                />
            )}
        </div>
    );
};

export default Problem2;
