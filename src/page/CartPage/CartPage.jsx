import React, {useCallback} from 'react';
import styles from './CartPage.module.scss'
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router';

const CartPage = ({productsList, productsDescriptionMap, onRemoveProductInCart}) => {
    const history = useHistory();
    const handleRegistrationClick = useCallback(() => {
        history.push('/checkout');
    }, [history]);

    const floor = (number, floorCount) => Math.floor(number * Math.pow(10, floorCount)) / Math.pow(10, floorCount);

    let totalPrice = 0;


    /*
    <td className={styles.notBackgroundColor}><img
                                    src={require(`../../../src/image/${current.categoryId}/${current.id % 5 ? current.id % 5 : 5}.jpg`)}
                                    className={styles.imageImitate}
                                    alt='тестовая'/></td>
    */

    return (
        <div className={styles.container}>
            <table>
                <thead>
                <tr>
                    <th>Описание</th>
                    <th>Количество</th>
                    <th>Цена за еденицу</th>
                    <th>Итого</th>
                </tr>
                {productsList.map((item, iter) => {
                    const current = productsDescriptionMap.get(item.productId);

                    totalPrice += floor(current.price * item.number, 2);

                    return (<tr key={iter} className={(iter % 2) === 0 ? styles.even : styles.odd}>
                        <td>{current.name}</td>
                        <td>{item.number}
                            <div className={styles.button}
                                 onClick={() => onRemoveProductInCart(item.productId)}>X
                            </div>
                        </td>
                        <td>{current.price} Br</td>
                        <td>{floor(current.price * item.number, 2)} Br</td>
                    </tr>);
                })}
                </thead>
            </table>
            <div className={styles.footerContainer}>
                <p>Общая сумма заказа: {floor(totalPrice, 2)} Br</p>
                <div className={styles.buttonContainer}>
                    <Button
                        variant="contained"
                        color="secondary"
                        disabled={productsList.length === 0}
                        size='medium'
                        onClick={handleRegistrationClick}
                        children={'Оформление'}>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
