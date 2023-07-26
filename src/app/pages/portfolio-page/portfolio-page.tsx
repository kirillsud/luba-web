import React from 'react';
import styles from './portfolio-page.module.css';
import { Link } from 'react-router-dom';

export interface PortfolioPageProps {
  portfolio: { img: string; id: string }[];
  title: string;
}

function PortfolioPage(props: PortfolioPageProps) {
  return (
    <div className={styles.portfolio_page}>
      <h1>{props.title}</h1>
      <div className={styles.container}>
        <div>
          {props.portfolio &&
            props.portfolio.map((pic, index) => {
              return (
                <Link className={styles.link} to={`/projects/${pic.id}`}>
                  <div className={styles.img} key={pic.id}>
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
