
/**variable init */
let scale = 1;
const blob = document.getElementById('blob');
const headline = document.getElementById('headline');
const primarycontent = document.getElementById('primarycontent');


/**scroll handling */
let setScaleByScroll = (value) => {
    console.log(value);
    blob.style.transform = `scale(${value},${value})`;
    blob.style.opacity = 1 - (value-1)/39;
    headline.style.opacity = 1 - (value-1)/40;
    headline.style.marginTop = `-${value*50}px`;
    primarycontent.style.opacity = 1 / (1 + Math.exp(-0.2 * ((value-2) - 20)));
}

primarycontent.addEventListener('wheel',(event) => {
    if (primarycontent.scrollTop + primarycontent.clientHeight >= primarycontent.scrollHeight) {        
        if( event.deltaY > 0) {
            return;
        }
    }
    scale += -1 * event.deltaY * -0.01;
    scale = Math.max(1,scale);
    console.log(scale);
    console.log(event.deltaY);
    if (scale < 45) {
        event.preventDefault();
        setScaleByScroll(scale);
    }
})





/**beginning spinning words */
let spinHeader = () => {
    if(scale >= 40) return;
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
    /**spin word after 2 secs */
    setTimeout(spinHeader,2000);
}
/**spin word after 2 secs */
setTimeout(spinHeader,2000);