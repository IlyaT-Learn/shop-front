import React from 'react';
import styles from './Stars.module.scss'
import emptyStar from '../../../image/starempty.ico';
import fullStar from '../../../image/starfull.ico';

const Stars = ({rating}) => {
    const generateNumberOfStars = (rating) => {
        const storageStars = [];

        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                storageStars.push(1);
            } else {
                storageStars.push(0);
            }
        }

        return storageStars;
    };

    return (
        <div className={styles.container}>
            {generateNumberOfStars(rating).map((item, iter) =>
                <img src={item === 1 ? fullStar : emptyStar}
                     className={styles.starContainer}
                     alt='stars'
                     key={iter}/>)
            }
        </div>
    );
};

export default Stars;
