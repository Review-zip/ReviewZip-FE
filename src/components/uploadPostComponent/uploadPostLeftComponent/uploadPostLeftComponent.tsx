import { useEffect, useState } from 'react';

import UploadImageComponent from '@/components/uploadPostComponent/uploadImageComponent/uploadImageComponent';

import styles from './style';
import ImageUploadedImage from '/images/uploadPost/ImageUploaded.png';
import ImageNotUploadedImage from '/images/uploadPost/ImageNotUploaded.png';
import ImageListComponent from '../imageListComponent/imageListComponent';

interface UploadPostLeftComponentProps {
  split: boolean;
  splitpost: () => void;
  previewImages: { id: number; url: string }[];
  setPreviewPostImages: React.Dispatch<
    React.SetStateAction<{ id: number; url: string }[]>
  >;
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const UploadPostLeftComponent: React.FC<UploadPostLeftComponentProps> = ({
  split,
  splitpost,
  previewImages,
  setPreviewPostImages,
  setFiles,
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
        setFiles={setFiles}
      />

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
    </styles.Container>
  );
};

export default UploadPostLeftComponent;
