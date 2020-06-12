import React from 'react';
import styles from './ProductPage.module.scss';
import Stars from '../../components/atoms/Stars/Stars';

const ProductPage = ({productDescription}) => {

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

    return (<div className={styles.pageContainer}>
            <div className={styles.mainUnit}>
                <div className={styles.unitWithImageOfProduct}>
                    <img src={productDescription.picture}
                         className={styles.image}
                         alt='products_picture'/>
                </div>
                <div className={styles.infoUnit}>
                    <div className={styles.unitWithInfoAboutProduct}>
                        <p className={styles.nameOfTheProduct}>{productDescription.name}</p>
                        <div className={styles.unitWithAssessment}>
                            <p>Рейтинг<Stars rating={productDescription.rating}/></p>
                            <a href="#reviews " className={styles.reviewsAnchor}>Отзывы</a>
                            <a href="#writeReview " className={styles.writeReviewButton}>Написать отзыв</a>
                        </div>
                        <p><span
                            className={styles.boldText}>Количество скидочных: {productDescription.numberOfPromo}</span>
                        </p>
                    </div>
                    <div className={styles.orderUnit}>
                        <p className={styles.priceOfProduct}>{productDescription.price} бел.р.</p>
                        <div className={styles.unitWithButtons}>
                            <div className={styles.qty}>
                                <p>Кол-во</p>
                                <input value={1} className={styles.qtyField}/>
                            </div>
                            <a href="# " className={styles.addToCartButton}>Добавить в корзину</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.descriptionOfProduct}>
                <div>
                    <a id="descriptionButton" onClick={displayDescription}
                       className={styles.descriptionButton}>Описание</a>
                    <a id="reviewsButton" onClick={displayReviews} className={styles.reviewsButton}>Отзывы(1)</a>
                </div>
                <div id="description" className={styles.description}>{productDescription.description}</div>
                <div id="reviews" className={styles.reviews}>
                    <p id="writeReview" className={styles.writeReviewText}>Написать отзыв</p>
                    <p className={styles.reviewUserInfo}><span className={styles.redText}>*</span>Ваше имя</p>
                    <input className={styles.writeReviewField}/>
                    <p className={styles.reviewUserInfo}><span className={styles.redText}>*</span>Ваш отзыв</p>
                    <input className={styles.writeReviewField}/>
                    <p className={styles.reviewUserInfo}><span className={styles.redText}>*</span>Ваша оценка продукта
                    </p>
                    <input className={styles.writeAssessmentField} placeholder="1 - 5"/>
                    <p>Отзывы</p>
                </div>
            </div>
        </div>
    )
};

export default ProductPage;
