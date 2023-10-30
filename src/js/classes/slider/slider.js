import img1 from '../../../assets/image/slider/1.jpg';
import img2 from '../../../assets/image/slider/2.jpg';
import img3 from '../../../assets/image/slider/3.jpg';

const sliderNode = document.querySelector('.about-image');

const array = [img1, img2, img3];

function setBgForSlider(index = 0) {
  const queue = index >= array.length ? 0 : index;
  const img = new Image();
  img.src = array[queue];
  img.onload = () => {
    sliderNode.style.backgroundImage = `url(${array[queue]})`;
    setTimeout(() => {
      setBgForSlider(queue + 1);
    }, 10000);
  };
}

setBgForSlider();
