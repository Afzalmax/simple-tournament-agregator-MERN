import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Card.css';

function Card() {
    const [students, setStudents] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5001/users")
            .then(response => setStudents(response.data))
            .catch(err => console.log(err));
    }, []);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <div className="head">
                <h2>Tournaments List</h2>
            </div>

            <div>
                {students.map((stu, index) => (
                    <div className='page' key={index}>
                        <div className='template'>
                            <div className='left'>
                                <h2>ORGANIZER NAME:{stu.name}</h2>
                                <h2>NAME OF SPORT:{stu.sport}</h2>
                                <p>CONTACT:{stu.mobile}</p>
                                <p>CLICK ON IMAGE FOR FULL SIZE</p>
                            </div>
                            <div className='right'>
                                <img 
                                    src={stu.image} 
                                    className="image" 
                                    alt="" 
                                    onClick={() => handleImageClick(stu.image)}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal" onClick={handleCloseModal}>
                    <span className="close">&times;</span>
                    <img className="modal-content" src={selectedImage} alt="Full Size" />
                </div>
            )}
        </>
    );
}

export default Card;
