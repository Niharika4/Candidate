import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { render } from "react-dom";

const FileUpload = () => {
    const [state, setState] = useState({ warningMsg: '' })

    const [baseImage, setBaseImage] = useState("")

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        console.log(base64);
        setBaseImage(base64)
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    ondragover = (accepted, rejected) => {
        if (Object.keys(rejected).length !== 0) {
            const message = "Please submit valid file type";
            setState({ warningMsg: message });
        } else {
            this.props.addFile(accepted);
            setState({ warningMsg: "" });
            console.log(accepted[0].preview);

            var blobPromise = new Promise((resolve, reject) => {
                const reader = new window.FileReader();
                reader.readAsDataURL(accepted[0]);
                reader.onloadend = () => {
                    const base64data = reader.result;
                    resolve(base64data);
                };
            });
            blobPromise.then((value) => {
                console.log(value);
            });
        }
    };


    render(); {
        const { files } = this.props;
        const render =
            Object.keys(files).length !== 0 ? (
                files.map((file) => <p key={file.name}>{file.name}</p>)
            ) : (
                <p className="hello">Please drop only .PDF, .DOC or .DOCX files</p>
            );
        return (

            <div>
                <p>{state.warningMsg}</p>
                <Dropzone
                    multiple={false}
                    accept="application/msword, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}
                >
                    {({ isDragAccept, isDragReject, acceptedFiles, rejectedFiles }) => {
                        if (isDragReject) return "Please submit a valid file";
                        return render;
                    }}
                </Dropzone>
            </div>
        );
    }
}

export default FileUpload;