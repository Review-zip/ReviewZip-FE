import React, { useEffect, useState } from 'react';

import UploadImageComponent from '@/components/uploadPostComponent/uploadImageComponent/uploadImageComponent';
import ImageListComponent from '../imageListComponent/imageListComponent';

import styles from './style';
import ImageUploadedImage from '/images/uploadPost/ImageUploaded.png';
import ImageNotUploadedImage from '/images/uploadPost/ImageNotUploaded.png';
import MapButtonImage from '/images/uploadPost/MapButton.png';

interface UploadPostLeftComponentProps {
  split: boolean;
  splitpost: () => void;
  previewImages: { id: number; url: string }[];
  setPreviewPostImages: React.Dispatch<
    React.SetStateAction<{ id: number; url: string }[]>
  >;
  files: { id: number; file: File }[];
  setFiles: React.Dispatch<React.SetStateAction<{ id: number; file: File }[]>>;
  openMapModal: () => void;
}

const UploadPostLeftComponent: React.FC<UploadPostLeftComponentProps> = ({
  split,
  splitpost,
  previewImages,
  setPreviewPostImages,
  files,
  setFiles,
  openMapModal,
}) => {
  const [clickedImage, setClickedImage] = useState<string>('');

  const [imageListOpen, setImageListOpen] = useState<boolean>(false);

  useEffect(() => {}, [clickedImage]);

  const toggleImageList = () => {
    setImageListOpen(!imageListOpen);
  };

  return (
    <styles.Container splitPost={split}>
      {/* 윗부분 뒤로가기, 텍스트 */}
      <styles.TopContainer>
        <styles.ToNextText onClick={splitpost}>다음</styles.ToNextText>
      </styles.TopContainer>

      {/* 윗 부분 선 */}
      <styles.Line />

      {/* image slider */}
      {previewImages.length > 0 ? (
        <styles.ImageContainer>
          <styles.Image src={clickedImage} />
        </styles.ImageContainer>
      ) : (
        <UploadImageComponent
          postImages={previewImages}
          setPostImages={setPreviewPostImages}
          setClickedImage={setClickedImage}
          setFiles={setFiles}
        />
      )}

      {/* 업로드한 이미지들 작게 보이는 component */}
      <ImageListComponent
        postImages={previewImages}
        setPostImages={setPreviewPostImages}
        imageListOpen={imageListOpen}
        setClickedImage={setClickedImage}
        files={files}
        setFiles={setFiles}
      />

      <styles.ButtonsContainer>
        <styles.MapButtonContainer onClick={openMapModal}>
          <styles.MapButton src={MapButtonImage} />
        </styles.MapButtonContainer>

        {/* 이미지 업로드 여부 이미지 */}
        {previewImages.length > 0 ? (
          <styles.ImageUploadedContainer>
            <styles.ImageUploaded
              src={ImageUploadedImage}
              onClick={toggleImageList}
            />
          </styles.ImageUploadedContainer>
        ) : (
          <styles.ImageUploadedContainer>
            <styles.ImageUploaded
              src={ImageNotUploadedImage}
              onClick={toggleImageList}
            />
          </styles.ImageUploadedContainer>
        )}
      </styles.ButtonsContainer>
    </styles.Container>
  );
};

export default UploadPostLeftComponent;
