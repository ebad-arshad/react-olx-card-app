import React, { useEffect, useState } from 'react';
import { Modal, Input } from 'antd';
import './ModalForCard.css';
import UploadFile from '../UploadFile/UploadFile';
import { collection, addDoc, db, storage, ref, uploadBytesResumable, getDownloadURL } from "../../Firebase/Firebase";
import { Switch } from 'antd';

const ModalForCard = ({ opened, togglingOpen }) => {

    const [opening, setOpening] = useState(opened);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [fileName, setFileName] = useState([]);
    const [feature, setFeature] = useState(false);
    const [value, setValue] = useState({});

    useEffect(() => {
        setOpening(opened)
    }, [opened])

    const handleOk = async () => {
        setConfirmLoading(true);
        let imageUrl = await gettingUrl(fileName);
        await addingDoc(imageUrl)
        setValue({});
        setOpening(false);
        setConfirmLoading(false);
        setFeature(false);
        togglingOpen();
        setFileName();
    };

    const handleCancel = () => {
        setValue({});
        setFeature(false);
        setFileName();
        setOpening(false);
        togglingOpen();
    };

    const gettingFile = (e) => {
        setFileName(e)
    }

    const addingDoc = async (pic) => {
        await addDoc(collection(db, "cards"), {
            title: value.title,
            price: value.price,
            location: value.location,
            image: pic,
            feature: feature,
        });
    }

    const gettingUrl = (file) => {
        return new Promise((resolve, reject) => {
            const storageRef = ref(storage, `images/${file.name.slice(0, file.name.lastIndexOf('.'))}.png`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                },
                (error) => {
                    reject(error.message)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL)
                    });
                }
            );
        })
    }

    return (
        <>
            <Modal
                title="Add Card"
                open={opening}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <div className="inputs">
                    <div className="addCardTitle">
                        <Input value={value.title} onChange={e => setValue((prevValue) => { return { ...prevValue, title: e.target.value } })} size='large' placeholder="Title" allowClear />
                    </div>
                    <div className="addCardPrice">
                        <Input value={value.price} onChange={e => setValue((prevValue) => { return { ...prevValue, price: e.target.value } })} size='large' placeholder="Price" allowClear />
                    </div>
                    <div className="addCardLocation">
                        <Input value={value.location} onChange={e => setValue((prevValue) => { return { ...prevValue, location: e.target.value } })} size='large' placeholder="Location" allowClear />
                    </div>
                    <div style={{ display: 'flex', gap: '5px', fontSize: '14px', fontWeight: 'bold' }} className="switch">
                        <span>Feature</span><span><Switch checked={feature} size="small" onChange={(checked) => setFeature(checked)} /></span>
                    </div>
                    <div className="uploadFile"><UploadFile gettingFiles={gettingFile} /></div>
                </div>
            </Modal>
        </>
    );
}

export default ModalForCard;