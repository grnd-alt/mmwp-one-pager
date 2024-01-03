let scale = 1;
const blob = document.getElementById('blob');
const headline = document.getElementById('headline');
let setScaleByScroll = (value) => {
    console.log(value);
    blob.style.transition = ".1s";
    blob.style.transform = `scale(${value},${value})`;
    headline.style.marginTop = `-${value*50}px`;
}
window.onwheel = (event) => {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(1,scale),40);
    setScaleByScroll(scale);
}

let spinHeader = () => {
    let i = 0;
    for (;i < headline.children.length;i++) {
        let child = headline.children[i];
        console.log(child.classList);
        if(Array.from(child.classList).indexOf('h1-active') !== -1){
            child.classList.remove('h1-active');
            break;
        }
    }
    headline.children[i+1 >= headline.children.length ? 0:i+1].classList.add('h1-active')
    setTimeout(spinHeader,4000)
}

setTimeout(spinHeader,4000)