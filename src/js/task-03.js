const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');
const imgItem = 0;

const markup = images.map(
  image =>
    `<li class=gallery-item><img class=gallery-img src=${image.url} alt=${image.alt}></li>`
);
console.log(markup);
galleryRef.insertAdjacentHTML('afterbegin', markup);

// for (const img of images) {
//   console.log(img);
//   console.log(img.url);
//   console.log(img.alt);
//   img.url;
//   img.alt;
// }
