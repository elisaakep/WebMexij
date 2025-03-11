(function(){
    const testimonySections = [...document.querySelectorAll('.testimony')];
    
    testimonySections.forEach(section => {
        const sliders = [...section.querySelectorAll('.testimony__body')];
        const buttonNext = section.querySelector('#next');
        const buttonBefore = section.querySelector('#before');
        let value = 1;

        buttonNext.addEventListener('click', ()=>{
            changePosition(1);
        });

        buttonBefore.addEventListener('click', ()=>{
            changePosition(-1);
        });

        const changePosition = (add) => {
            const currentTestimony = section.querySelector('.testimony__body--show');
            const currentIndex = sliders.indexOf(currentTestimony);
            
            sliders[currentIndex].classList.remove('testimony__body--show');
            value = (currentIndex + add + sliders.length) % sliders.length;
            sliders[value].classList.add('testimony__body--show');
        }
    });
})();