import React, { useContext, useState } from "react";
import '../pages/Footer.css';
import { Navigate } from "react-router-dom";
import Display from "./Display";

function Footer(props) {

    const [openModal, setOpenModal] = useState(false)
    return (
        <div>
            {openModal && <Display closeModal={setOpenModal} />}
            <div className="footer">
                <button
                    className="footer-button"
                    disabled={props.headerlen === 0}
                    onClick={() => { setOpenModal(true) }}
                    id="openModalBtn"
                >
                    Finish
                </button>
            </div>
        </div>
    );
}

export default Footer;