window.addEventListener("DOMContentLoaded", () => {
    // FAQ стрелочки
    const faqArrow = document.querySelectorAll(".fa-chevron-down"),
    faqBtn = document.querySelectorAll(".accordeon-item__title"),
    faqText = document.querySelectorAll(".text-block-faq");

    faqBtn.forEach((item, i) => {
        item.addEventListener("click", () => {
            faqArrow.forEach((arrow, idx) => {
                if (idx !== i) {
                    arrow.classList.remove('rotate')
                }
            })
            faqText.forEach((text, idx) => {
                if (idx !== i) {
                    text.classList.remove('active')
                } 
            })

            faqArrow[i].classList.toggle('rotate')
            faqText[i].classList.toggle('active')
        })
    })


    // Account calculator
    const accCounter = document.querySelector('.account_info_main-description .counter-coll'),
    btnPlus = document.querySelector('.account_info_main-header-buttons-wrapper .fa-plus'),
    btnMinus = document.querySelector('.account_info_main-header-buttons-wrapper .fa-minus'),
    accBtn = document.querySelector('.account_info_main-btn'),
    accInput = document.querySelector('.account_info_main-header-buttons-wrapper input'),
    accPrice1 = document.querySelector('.account_info_main-btn b'),
    accPrice2 = document.querySelector('.account_info_main-description .price-sum');

    const maxValue = +accCounter.innerHTML;
    accCounter.innerHTML = maxValue - accInput.value


    btnPlus.addEventListener('click', () => {
        if (accInput.value < maxValue) {
            accInput.value++;
            accCounter.innerHTML = +accCounter.innerHTML - 1
            accPrice1.innerHTML = (accInput.value * +accPrice2.innerHTML).toFixed(2)
        }
    })

    btnMinus.addEventListener('click', () => {
        if (accInput.value > 0) {
            accInput.value--;
            accCounter.innerHTML = +accCounter.innerHTML + 1
            accPrice1.innerHTML = (accInput.value * +accPrice2.innerHTML).toFixed(2)
        }
    })

})

 

