import React from 'react';
import Masonry from 'react-masonry-css'
import styles from './Grid.module.css';
import { Card } from '../Card';

const Grid = ({ items }) => {
  const sourceType = 'fixed_height';
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.myMasonryGrid}
    >
      {items.map((item) => (
      <div className={styles.myMasonryGrid_column}>
          <Card
          key={item.id}
          url={item.url}
          previewUrl={item.images[sourceType].url}
          title={item.title}
          width={item.images[sourceType].width}
          height={item.images[sourceType].height}
        />
      </div>
      ))}
    </Masonry>
    // <div className={styles.root}>
    // {items.map((item) => (
    //     <Card
    //     key={item.id}
    //     url={item.url}
    //     previewUrl={item.images[sourceType].url}
    //     title={item.title}
    //     width={item.images[sourceType].width}
    //     height={item.images[sourceType].height}
    //   />
    // ))}
    // </div>
  );
};

export { Grid };
