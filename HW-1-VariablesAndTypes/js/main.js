const PRICE_WOMAN_BOX = 15.678;
const PRICE_HAIR_BOX = 123.965;
const PRICE_MAN_BOX = 90.2345;
const FULL_AMOUNT = PRICE_WOMAN_BOX + PRICE_HAIR_BOX + PRICE_MAN_BOX;
const MIN_DISCOUNT_PERCENT = 0.05;
const MAX_DISCOUNT_PERCENT = 0.25;

const priceWomanBoxItem = document.querySelector("#woman-box-price");
const priceHairBoxItem = document.querySelector("#hair-box-price");
const priceManBoxItem = document.querySelector("#man-box-price");
const buyAllAmountItem = document.querySelector("#buy-all-amount");
const buyAllWithoutCoinsAmountItem = document.querySelector("#buy-all-without-coins-amount");
const buyAllWithDiscountAmountItem = document.querySelector("#buy-all-with-discount-amount");

const finalDiscountPercent = MIN_DISCOUNT_PERCENT + (MAX_DISCOUNT_PERCENT - MIN_DISCOUNT_PERCENT) * Math.random();
const discountAmount = FULL_AMOUNT * finalDiscountPercent;
const finalDiscountAmount = (FULL_AMOUNT - discountAmount).toFixed(2);
const displayPercent = Math.trunc(finalDiscountPercent * 100);
const buyAllWithDiscountAmountTotal = `Ваша супер скидка: ${displayPercent} %!!! Итоговая сумма: ${finalDiscountAmount} грн`;

const maxPrice = Math.max(PRICE_WOMAN_BOX, PRICE_HAIR_BOX, PRICE_MAN_BOX);
const minPrice = Math.min(PRICE_WOMAN_BOX, PRICE_HAIR_BOX, PRICE_MAN_BOX);
const fullAmountWithoutCoins = Math.floor(PRICE_WOMAN_BOX) + Math.floor(PRICE_HAIR_BOX) + Math.floor(PRICE_MAN_BOX);
const roundedAmount = Math.round(FULL_AMOUNT / 100 ) * 100;
const isRoundedAmountEven = roundedAmount % 2 === 0;
const changeFor500 = ( 500 - FULL_AMOUNT ).toFixed(2); 
const meanNumber = Math.round((FULL_AMOUNT / 3) * 100) / 100;
const profit = (finalDiscountAmount - FULL_AMOUNT /2).toFixed(2);

priceWomanBoxItem.innerHTML = PRICE_WOMAN_BOX + " " + "грн";
priceHairBoxItem.innerHTML = PRICE_HAIR_BOX + " " + "грн";
priceManBoxItem.innerHTML = PRICE_MAN_BOX + " " + "грн";
buyAllWithDiscountAmountItem.innerHTML = buyAllWithDiscountAmountTotal;

buyAllAmountItem.innerHTML = FULL_AMOUNT + " " + "грн";
buyAllWithoutCoinsAmountItem.innerHTML = ( Math.floor(PRICE_WOMAN_BOX) + Math.floor(PRICE_HAIR_BOX) + Math.floor(PRICE_MAN_BOX)) + " " + "грн";

function contactAction() {
    const userContact = prompt ("Оставьте ваш номер телефона", " ")
}

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