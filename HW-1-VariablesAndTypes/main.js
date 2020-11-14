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

let finalDiscountPercent = MIN_DISCOUNT_PERCENT + (MAX_DISCOUNT_PERCENT - MIN_DISCOUNT_PERCENT) * Math.random();
let discountAmount = FULL_AMOUNT * finalDiscountPercent;
let finalDiscountAmount = (FULL_AMOUNT - discountAmount).toFixed(2);
let displayPercent = Math.trunc( parseFloat(finalDiscountPercent.toFixed(2)) * 100);
let buyAllWithDiscountAmountTotal = `Ваша супер скидка: ${displayPercent} %!!! Итоговая сумма: ${finalDiscountAmount} грн`;

priceWomanBoxItem.innerHTML = PRICE_WOMAN_BOX + " " + "грн";
priceHairBoxItem.innerHTML =PRICE_HAIR_BOX + " " + "грн";
priceManBoxItem.innerHTML =PRICE_MAN_BOX + " " + "грн";
buyAllWithDiscountAmountItem.innerHTML = buyAllWithDiscountAmountTotal;

buyAllAmountItem.innerHTML = FULL_AMOUNT + " " + "грн";
buyAllWithoutCoinsAmountItem.innerHTML = ( Math.floor(PRICE_WOMAN_BOX) + Math.floor(PRICE_HAIR_BOX) + Math.floor(PRICE_MAN_BOX)) + " " + "грн";

function contactAction() {
    let userContact = prompt ("Оставьте ваш номер телефона", " ")
}