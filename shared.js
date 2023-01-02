const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanBtns = document.querySelectorAll('.plan button');
const closeModalBtn = document.querySelector('.modal__action--negative');
const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');


for (let i = 0; i < selectPlanBtns.length; i++) {
        selectPlanBtns[i].addEventListener('click', function () {
                backdrop.style.display = 'block';
                modal.style.opacity = 1;
        });
}

// close modal
if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
}

if (backdrop) {
        backdrop.addEventListener('click', function () {
                mobileNav.style.display = 'none';
                closeModal();
        });
}


function closeModal() {

        if (modal) {
                modal.style.opacity = 0;
        }
        backdrop.style.display = 'none';

}

// toggle btn(side nav)
toggleBtn.addEventListener('click', function () {
        mobileNav.style.display = 'block';

        if (backdrop)
                backdrop.style.display = 'block';
})
