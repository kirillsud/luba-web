import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { galleryImages } from 'src/utils/constants';

function PortfolioPage() {
  const title = 'Protfolio 1';
  const portfolio = galleryImages;

  return (
    <div className={styles.portfolio_page}>
      <h1 className={styles.header}>{title}</h1>
      <div className={styles.container}>
        <div>
          {portfolio &&
            portfolio.map((pic, index) => {
              return (
                <Link className={styles.link} href={`/projects/${pic.id}`} key={pic.id}>
                  <div className={styles.img}>
                    <img
                      src={pic.img}
                      alt={`my project ${pic.id}`}
                      className={styles.img}
                    />
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
