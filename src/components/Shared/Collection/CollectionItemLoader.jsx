import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const LoaderLi = styled.li`
    padding-left: 0px !important;
`;


const Loader = (props) => {
  // eslint-disable-next-line react/prop-types
  const { screen } = props;
  let height; let
    width;
  switch (screen) {
    case 'mobile': {
      height = '100';
      width = '400';
      break;
    }
    case 'desktop': {
      height = '100';
      width = '1060';
      break;
    }
    case 'large-screen': {
      height = '150';
      width = '1920';
      break;
    }
    default: {
      height = '100';
      width = '1060';
      break;
    }
  }
  return (
    <LoaderLi className="collection-item">
      <ContentLoader
        height={height}
        width={width}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        {...props}
      >
        <circle cx="60" cy="45" r="30" />
        <rect x="105" y="20" rx="5" ry="5" width="250" height="12" />
        <rect x="105" y="40" rx="5" ry="5" width="180" height="12" />
        <rect x="105" y="60" rx="5" ry="5" width="125" height="12" />
      </ContentLoader>
    </LoaderLi>
  );
};

const ImageList = () => (
  <React.Fragment>
    {Array(2)
      .fill('')
      .map((e, i) => (
        <Loader
          screen="desktop"
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          style={{ opacity: Number(2 / i).toFixed(1) }}
        />
      ))}
  </React.Fragment>
);

export default ImageList;
