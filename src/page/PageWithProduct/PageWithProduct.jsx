import React from 'react';
import styles from './PageWithProduct.module.scss';

const PageWithProduct = () => {
    const displayDescription = () => {
        document.getElementById(`description`).style.display = 'block';
        document.getElementById('reviewsButton').style.color = 'black'
        document.getElementById('descriptionButton').style.color = '#db5400'
        document.getElementById(`reviews`).style.display = 'none';
    }

    const displayReviews = () => {
        document.getElementById(`reviews`).style.display = 'block';
        document.getElementById('descriptionButton').style.color = 'black'
        document.getElementById('reviewsButton').style.color = '#db5400'
        document.getElementById(`description`).style.display = 'none';
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.mainUnit}>
                <div className={styles.unitWithImageOfProduct}>
                    <div className={styles.imageOfProduct}/>
                </div>
                <div className={styles.infoUnit}>
                    <div className={styles.unitWithInfoAboutProduct}>
                        <p className={styles.nameOfTheProduct}>Имя продукта</p>
                        <div className={styles.unitWithAssessment}>
                            <p><span className={styles.boldText}>Рейтинг: </span></p>
                            <a href="#reviews " className={styles.reviewsAnchor}>Отзывы</a>
                            <a href="#writeReview " className={styles.writeReviewButton}>Написать отзыв</a>
                        </div>
                        <p><span className={styles.boldText}>Марка: </span></p>
                        <p><span className={styles.boldText}>Код продукта: </span></p>
                        <p><span className={styles.boldText}>Бонусные очки: </span></p>
                        <p><span className={styles.boldText}>Состояние: </span></p>
                    </div>
                    <div className={styles.orderUnit}>
                        <p className={styles.priceOfProduct}>$99.99</p>
                        <div className={styles.unitWithButtons}>
                            <div className={styles.qty}>
                                <p>Кол-во</p>
                                <input placeholder="1" className={styles.qtyField}/>
                            </div>
                            <a href="# " className={styles.addToCartButton}>Добавить в корзину</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.descriptionOfProduct}>
                <div>
                    <a id="descriptionButton" onClick={displayDescription} className={styles.descriptionButton}>Описание</a>
                    <a id="reviewsButton" onClick={displayReviews} className={styles.reviewsButton}>Отзывы(1)</a>
                </div>
                <div id="description" className={styles.description}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                <div id="reviews" className={styles.reviews}>
                    <p id="writeReview"  className={styles.writeReviewText}>Написать отзыв</p>
                    <p className={styles.reviewUserInfo}><span className={styles.redText}>*</span>Ваше имя</p>
                    <input className={styles.writeReviewField}/>
                    <p className={styles.reviewUserInfo}><span className={styles.redText}>*</span>Ваш отзыв</p>
                    <input className={styles.writeReviewField}/>
                    <p className={styles.reviewUserInfo}><span className={styles.redText}>*</span>Ваша оценка продукта</p>
                    <input className={styles.writeAssessmentField} placeholder="10"/>
                    <p >Отзывы</p>
                </div>
            </div>
        </div>
    );
};

export default PageWithProduct;