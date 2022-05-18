(() => {
const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector('[data-body]')
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("body--overflow");
}
})();

(() => {
const refs = {
    openModalBtn: document.querySelector("[data-modal-open-mobile]"),
    closeModalBtn: document.querySelector("[data-modal-close-mobile]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector('[data-body]')
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("body--overflow");
}
})();