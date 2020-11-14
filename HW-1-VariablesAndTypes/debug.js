const maxPrice = Math.max(PRICE_WOMAN_BOX, PRICE_HAIR_BOX, PRICE_MAN_BOX);
const minPrice = Math.min(PRICE_WOMAN_BOX, PRICE_HAIR_BOX, PRICE_MAN_BOX);
const fullAmountWithoutCoins = Math.floor(PRICE_WOMAN_BOX) + Math.floor(PRICE_HAIR_BOX) + Math.floor(PRICE_MAN_BOX);
const roundedAmount = Math.round(FULL_AMOUNT / 100 ) * 100;
const isRoundedAmountEven = roundedAmount % 2 === 0;
const changeFor500 = ( 500 - FULL_AMOUNT ).toFixed(2); 
const meanNumber = Math.round((FULL_AMOUNT / 3) * 100) / 100;
const profit = (finalDiscountAmount - FULL_AMOUNT /2).toFixed(2);
console.log(`
Максимальная цена: ${maxPrice};
Минимальная цена: ${minPrice};
Cтоимость всех товаров: ${FULL_AMOUNT};
Cтоимость всех товаров (без копеек): ${fullAmountWithoutCoins};
Округлённая стоимость: ${roundedAmount};
Сумма всех товаров - чётное число: ${isRoundedAmountEven};
Сдача при оплате 500 грн: ${changeFor500};
Среднее значение цен: ${meanNumber};
Скидка: ${displayPercent}%;
Сумма со скидкой: ${finalDiscountAmount};
Себестоимость всех товаров: ${FULL_AMOUNT / 2};
Чистая прибыль: ${profit};`);