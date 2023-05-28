import React from "react";
import { useNavigate } from "react-router-dom";

const initialModalState = {
    allContact: false,
    usContact: false,
    singleContact: false,
    contactId: null,
};

export default function Modal({ children, modalStates, setModalStates }) {
    const navigate = useNavigate();
    function showAllContactModal() {
        navigate("/problem-2/all-contacts");
        setModalStates({ ...initialModalState, allContact: true });
    }

    function showUSContactModal() {
        navigate("/problem-2/us-contacts");
        setModalStates({ ...initialModalState, usContact: true });
    }

    function closeModal() {
        setModalStates(initialModalState);
    }

    return (
        <>
            <div
                style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.6)",
                }}
                onClick={closeModal}
            />
            <div
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translateX(-50%) translateY(-50%)",
                    maxWidth: "100%",
                    maxHeight: "calc(100% - 4rem)",
                    overflowY: "scroll",
                    zIndex: "10",
                    background: "white",
                    padding: "2rem",
                    borderRadius: "0.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "center",
                    gap: "1rem",
                }}
            >
                {children}
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
                    <button
                        className="btn btn-lg"
                        style={{
                            border: "1px solid #46139f",
                            background: "white",
                            color: "#46139f",
                        }}
                        type="button"
                        onClick={closeModal}
                    >
                        close
                    </button>
                </div>
            </div>
        </>
    );
}
