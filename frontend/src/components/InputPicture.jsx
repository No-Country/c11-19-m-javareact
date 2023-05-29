import React, { useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faTimes } from '@fortawesome/free-solid-svg-icons';

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FileInput = styled.input`
  display: none;
`;

const SelectButton = styled.button`
  display: flex;
  margin-top: 10px;
  margin-right: 15px;
  padding: 4px 6px;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  background-color: transparent;
  transition: background-color 0.3s;

  &:hover {
    background-color: #C7D1D1;
  }
`;

const UploadButton = styled.button`
  margin-top: 10px;
  padding: 4px 6px;
  cursor: pointer;
  border: 1px solid #C7D1D1;
  border-radius: 20px;
  font-size: 10px;
  background-color: transparent;
  transition: background-color 0.3s;

  &:hover {
    background-color: #C7D1D1;
  }
`;

const Icon = styled(FontAwesomeIcon)`
margin-top: 15px;
  font-size: 18px;
  color: #99c2a2;
`;

const Text = styled.span`
  color: #374444;
  font-size: 14px;
`;

const Miniature = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5%;
  object-fit: cover;
`;

const DeleteButton = styled.button`
  margin-left: 2px;
  padding: 5px;
  cursor: pointer;
`;

const FilePreview = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const ProfilePictureUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/drc41imav/image/upload";
  const CLOUDINARY_UPLOAD_PRESET = "UpCircle";
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      try {
        const response = await axios.post(CLOUDINARY_URL, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        console.log(response);
        setSelectedFile(null);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <UploadContainer>
      <label htmlFor="profile-picture-input">
        <SelectButton onClick={() => fileInputRef.current.click()}>
          <FileInput
            type="file"
            accept="image/*"
            id="profile-picture-input"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          <Icon icon={faArrowUpFromBracket} />
          <Text>Agregar imagen</Text>

        </SelectButton>
      </label>

      {selectedFile && (
        <FilePreview>
          <Miniature src={URL.createObjectURL(selectedFile)} alt="Selected file" />
          <DeleteButton onClick={() => setSelectedFile(null)}>
            <Icon icon={faTimes} />
          </DeleteButton>
        </FilePreview>
      )}
      <UploadButton onClick={handleUpload}>Cargar</UploadButton>
    </UploadContainer>
  );
};

export default ProfilePictureUpload;
