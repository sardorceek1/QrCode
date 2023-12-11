import React, {useState} from 'react';
import './styles.css';

const QrCode = () => {
    const [qrText, setQrText] = useState('');
    const [imgBoxVisible, setImgBoxVisible] = useState(false);
    const [qrTextError, setQrTextError] = useState(false);

    const generateQr = () => {
        if (qrText.length > 0) {
            setImgBoxVisible(true);
        } else {
            setQrTextError(true);
            setTimeout(() => {
                setQrTextError(false);
            }, 1000);
        }
    };

    const downloadQrCode = () => {
        const link = document.createElement('a');
        link.href = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`;
        link.download = 'qrcode.png';
        link.click();
    };

    return (
        <div className="container">
            <p>Enter text to generate QR code:</p>
            <input
                type="text"
                id="qrText"
                value={qrText}
                onChange={(e) => setQrText(e.target.value)}
                className={`inputField ${qrTextError ? 'error' : ''}`}
            />
            <button className="btn" onClick={generateQr}>
                Generate QR Code
            </button>

            <div
                className={`imgBox ${imgBoxVisible ? 'show-img' : ''}`}
                onClick={downloadQrCode}
                style={{cursor: 'pointer'}}
            >
                <img
                    className="qrCode"
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`}
                    alt="QR Code"
                />
            </div>
        </div>
    );
};

export default QrCode;