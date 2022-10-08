import React from "react";
import { useNavigate } from "react-router-dom";
import '../pages/Display.css';

function Display({ closeModal }) {
    const navigate = useNavigate();

    const navigateToCandidate = () => {
        navigate('/candidate');
    }
    return (
        <div className="display-background">
            <div className="display-container">
                <div className="display-title">Are you want to see candidate details?</div>
                <div className="display-footer">
                    <button id="cancelBtn" onClick={() => closeModal(false)}>
                        No
                    </button>
                    <button onClick={navigateToCandidate}>Yes</button>
                </div>
            </div>
        </div>
    );
}

export default Display;