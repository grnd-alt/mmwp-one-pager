
/**variable init */
let scale = 1;
const blob = document.getElementById('blob');
const headline = document.getElementById('headline');
const primarycontent = document.getElementById('primarycontent');
const thirdheaders= document.getElementsByClassName('third-header');

for (let i = 0; i < thirdheaders.length; i++) {
    console.log(i);
    thirdheaders[i].addEventListener('click',(event) => {
        thirdheaders[i].classList.toggle('display')
    })
}


/**scroll handling */
let setScaleByScroll = async (value) => {
    blob.style.transform = `scale(${value},${value})`;
    blob.style.opacity = 1 - (value-1)/40;
    headline.style.opacity = 1 - (value-1)/40;
    headline.style.marginTop = `-${value*50}px`;
    primarycontent.style.opacity = (value-1)/30;
}

primarycontent.addEventListener('wheel',(event) => {
    if (primarycontent.scrollTop + primarycontent.clientHeight >= primarycontent.scrollHeight) {
        if( event.deltaY > 0) {
            return;
        }
    }
    if (primarycontent.scrollTop<=100 || scale <=40) {
        scale += -1 * event.deltaY * -0.01;
        scale = Math.max(1,scale);
        if (scale < 40) {
            event.preventDefault();
            setScaleByScroll(scale);
        }
    }
    console.log(primarycontent.scrollTop,primarycontent.clientHeight);
})





/**beginning spinning words */
let spinHeader = () => {
    if(scale >= 40) return;
    let i = 0;
    for (;i < headline.children.length;i++) {
        let child = headline.children[i];
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