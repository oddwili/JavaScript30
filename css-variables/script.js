const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const base = document.querySelector('#base');
const controls = document.querySelector('.controls');
const poster = document.querySelector('#poster');


function handleUpdate(e) {
    console.log(e.buttons);
    const suffix = e.target.dataset;
    const el = e.target;

    switch (el.name) {
        case 'spacing':
            poster.style.setProperty(`--${el.name}`, `${el.value}${suffix.sizing}`);
            break;
        case 'blur':
            poster.style.setProperty(`--${el.name}`, `${el.value}${suffix.sizing}`);
            break;
        case 'base':
            poster.style.setProperty(`--${el.name}`, `${el.value}`);
            break;
        default:
    }
}
// controls.addEventListener('change', (e) => handleUpdate(e));
controls.addEventListener('mouseover', (e) => {
    // while (e.buttons == 1) {
        handleUpdate(e)
    // }
});
