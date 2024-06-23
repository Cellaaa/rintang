import React, { useState, useEffect } from 'react';

const TambahDeskrip = () => {
    const [description, setDescription] = useState('');

    // Effect to save description to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('description', description);
    }, [description]);

    // Effect to load description from localStorage when component mounts
    useEffect(() => {
        const savedDescription = localStorage.getItem('description');
        if (savedDescription) {
            setDescription(savedDescription);
        }
    }, []);

    // Styles for the component
    const deskripsiStyle = {
        marginBottom: '10px',
    };
    const titleStyle = {
        color: 'black',
        fontSize: 24,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        wordWrap: 'break-word',
    };
    const containerStyle = {
        width: '980px',
        height: '150px',
        padding: 10,
        background: '#FEFAF6',
        borderRadius: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10,
        marginTop: '10px',
        display: 'inline-flex',
    };
    const descriptionStyle = {
        width: '950px',
        minHeight: 130,
        textDecoration: 'none',
        color: description ? 'black' : 'rgba(0, 0, 0, 0.50)',
        fontSize: 16,
        fontWeight: 400,
        background: 'transparent',
        border: 'none',
        outline: 'none',
    };
    const buttonStyle = {
        border: '1px solid black',
        borderRadius: '4px',
        padding: '8px 16px',
        background: '#F5DF79',
        color: 'black',
        cursor: 'pointer',
        fontWeight: 600,
        marginTop: '10px',
        marginBottom: '10px',
    };

    // Handler for saving the description
    const handleSave = () => {
        // Perform some action with the description, like sending it to a server
        console.log('Deskripsi disimpan:', description);
    };

    return (
        <div style={deskripsiStyle}>
            <div style={titleStyle}>Deskripsi</div>
            <div style={containerStyle}>
                <textarea
                    style={descriptionStyle}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Tambahkan Deskripsi"
                    spellCheck="false"
                />
            </div>
            <button style={buttonStyle} onClick={handleSave}>Simpan</button>
        </div>
    );
};

export default TambahDeskrip;
