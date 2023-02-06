import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { AddIcon } from '@chakra-ui/icons';
import styled from 'styled-components';
import axios from 'axios';

const FileUploadContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FileUpload = ({ updateImages }) => {
  const [Images, setImages] = useState([]);

  const { CLOUDINARY_KEY } = process.env;

  const dropHandler = async (files) => {
    let formData = new FormData();
    formData.append('api_key', CLOUDINARY_KEY);
    formData.append('upload_preset', 'zrca24zt');
    formData.append('timestamp', (Date.now() / 1000) | 0);
    formData.append('file', files[0]);

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    await axios
      .post(
        'https://api.cloudinary.com/v1_1/notiimg/image/upload',
        formData,
        config,
      )
      .then((response) => {
        setImages([...Images, response.data.url]);
        updateImages([...Images, response.data.url]);
      });
  };

  const deleteHandler = (image) => {
    const currentIndex = Images.indexOf(image);
    let newImages = [...Images];
    newImages.splice(currentIndex, 1);
    setImages(newImages);
    updateImages(newImages);
  };

  return (
    <FileUploadContainer>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              style={{
                width: 300,
                height: 240,
                border: '0.5px solid gainsboro',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <AddIcon boxSize={6} color="gray" />
            </div>
          </section>
        )}
      </Dropzone>

      <div
        style={{
          display: 'flex',
          width: '350px',
          height: '240px',
          overflowX: 'scroll',
        }}
      >
        {Images.map((image, index) => (
          <div onClick={() => deleteHandler(image)} key={index}>
            <img
              style={{ minWidth: '300px', width: '300px', height: '240px' }}
              src={image}
              alt="product"
            />
          </div>
        ))}
      </div>
    </FileUploadContainer>
  );
};

export default FileUpload;
