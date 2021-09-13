import React from 'react';
import Masonry from 'react-masonry-css'
import styles from './Grid.module.css';
import { Card } from '../Card';

const Grid = ({ items }) => {
  const sourceType = 'preview_webp';
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
          id={item.id}
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
  );
};

export { Grid };
