(   function (){
    'use strict';
    console.log('Reading JS');

    const button = document.querySelector ('#showImages');
    const intro = document.querySelector ('#intro');
    const memories = document.querySelector ('#memories');
    const sliders = document.querySelectorAll('.slider');

    button.addEventListener('click', function (){
        intro.classList.add('hidden');
        //console.log('intro is gone');
        memories.classList.remove('hidden');
        memories.classList.add('screen');
    });

    window.addEventListener ('load', function (){
        function animateSlider(element, direction){
            const sliderContent = document.querySelector(`${element} .column`);
            const cloned = sliderContent.cloneNode(true);
            cloned.className = "column";

            document.querySelector(`${element} .slider`).appendChild(cloned);
            document.querySelector(`${element} .slider`).classList.add(direction);
        }

        animateSlider('.left', 'up');
        animateSlider('.right', 'down');
    });
        
    document.querySelector('#memories').addEventListener('click', function(event){
        if (event.target.tagName === 'IMG') {
             sliders.forEach(function (slider) {
            slider.classList.toggle('paused');
            }); 
            event.target.classList.toggle('selected');
        }
    });

})();