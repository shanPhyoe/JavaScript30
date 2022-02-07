const panels = document.querySelectorAll('.panel');

panels.forEach(panel =>
    panel.addEventListener('click', function () {
        this.classList.toggle('open');
    })
);

panels.forEach(panel => {
    panel.addEventListener('transitionend', function (e) {
        e.propertyName.includes('flex') &&
            panel.classList.toggle('open-active');
    });
});
