export default function flip() {
    const btnFlip = document.querySelector('.intro__btn-auth');
    const btnFlipBack = document.querySelector('#flip-back');
    const introBox = document.querySelector('.auth-block');

    btnFlip.addEventListener('click', toggleClass);
    btnFlipBack.addEventListener('click', toggleClass);

    function toggleClass(e) {
        e.preventDefault();

        introBox.classList.toggle('is-show');
        btnFlip.classList.toggle('visually-hidden');
    }
}
