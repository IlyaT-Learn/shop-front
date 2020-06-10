import React, {useCallback, useState} from 'react';
import styles from './PageWithProduct.module.scss';
import cn from 'classnames';

const PageWithProduct = () => {
    const [status, changeStatus] = useState(false);

    const openSection = useCallback((newStatus) => {
        changeStatus(newStatus)
    });

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
                            <a onClick={() => changeStatus(true)} href="#reviews "
                               className={styles.reviewsAnchor}>Отзывы</a>
                            <a onClick={() => changeStatus(true)} href="#writeReview "
                               className={styles.writeReviewButton}>Написать отзыв</a>
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
                <div className={styles.unitWithSectionButtons}>
                    <p onClick={() => openSection(false)}
                       className={cn({
                           [styles.selectedSectionButton]: !status,
                           [styles.sectionButton]: status
                       })}>Описание</p>
                    <p className={cn({
                        [styles.selectedSectionButton]: status,
                        [styles.sectionButton]: !status
                    })}
                       onClick={() => openSection(true)}>Отзывы(1)</p>
                </div>
                <div className={cn({
                    [styles.description]: !status,
                    [styles.invisibleUnit]: status
                })}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div id="reviews" className={cn({
                    [styles.invisibleUnit]: !status,
                    [styles.reviews]: status
                })}>
                    <p id="writeReview" className={styles.writeReviewText}>Написать отзыв</p>
                    <p className={styles.reviewUserInfo}><span className={styles.redText}>*</span>Ваше имя</p>
                    <input className={styles.writeReviewField}/>
                    <p className={styles.reviewUserInfo}><span className={styles.redText}>*</span>Ваш отзыв</p>
                    <input className={styles.writeReviewField}/>
                    <p className={styles.reviewUserInfo}><span className={styles.redText}>*</span>Ваша оценка продукта
                    </p>
                    <input className={styles.writeAssessmentField} placeholder="10"/>
                    <p>Отзывы</p>
                </div>
            </div>
        </div>
    );
};

export default PageWithProduct;
