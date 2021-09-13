import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { requestDetails } from '../api/details';
import { BackButton } from '../components/BackButton';
import styles from './Details.module.css';
const Details = ({ location, match, history }) => {
  const id = match.params.id;
  const [item, setItem] = useState(undefined);

  console.log(location, history);
  useEffect(() => {
    requestDetails(id).then(({ data }) => {
      setItem(data);
    });
  }, [id]);
  const sourceType = 'original';
  //   previewUrl={details.images[sourceType].url}
  return (
    <>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <div className={['pageRoot', styles.root].join(' ')}>
        <BackButton />
        {item ? (
          <>
            <div className={styles.imageContainer}>
              <img src={item.images[sourceType].url} alt='' />
            </div>
            <div className={styles.descriptionContainer}>
              <ul className={styles.detailsList}>
                <li className={styles.listItem}>{item.title}</li>
                <li className={styles.listItem}>
                  <a href={item.url} target='blank' rel='noopener'>
                    Open on GIPHY.COM
                  </a>
                </li>
                <li className={styles.listItem}>
                  <button>Copy link</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          'Loading'
        )}
      </div>
    </>
  );
};

export { Details };
