import { useState } from 'react';
import styles from './Card.module.css';

const Card = ({
  previewUrl,
  title,
  username,
  url,
  height,
  width,
  className,
}) => {
 
  const [loaded, setLoaded] = useState(false);

  const inlineImageStyles = {
    opacity: loaded ? 1 : 0
  };

  const onLoad = (e) => {
    console.log('Loaded', e)
    setLoaded(true);
  };

  const loaderInlineStyles = {
    opacity: loaded ? 0 : 1
  }

  return (
    <a
      className={[styles.root, className].join(' ')}
      href={'#'}
      rel='noreferrer'
      target='_blank'
    >
     <img
          src={previewUrl}
          style={inlineImageStyles}
          onLoad={onLoad}
          alt=''
          className={styles.imgGif}
        />
      <div className={styles.loader} style={loaderInlineStyles}>Loading</div>
    </a>
  );
};

export { Card };
