const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const base = document.querySelector('#base');
const controls = document.querySelector('.controls');


function handleUpdate(e) {
    const suffix = e.target.dataset;
    const el = e.target

    console.log(el.name);
    switch (el.name) {
        case 'spacing':
            document.documentElement.style.setProperty(`--${el.name}`, `${el.value}${suffix.sizing}`);
            break;
        case 'blur':
            document.documentElement.style.setProperty(`--${el.name}`, `${el.value}${suffix.sizing}`);
            break;
        case 'base':
            document.documentElement.style.setProperty(`--${el.name}`, `${el.value}`);
            break;
        default:
    }
}
controls.addEventListener('change', (e) => handleUpdate(e));

// also on mouse press?
