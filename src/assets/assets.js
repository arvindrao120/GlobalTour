import logo from "./logo.png";
import hero_photo from "./hero_photo.jpg";
import about_photo from "./about_photo.jpg";
import swift_dezire from "./swift-dezire.png";
import tajMahal from "./taj_mahal.avif";
import redFort from "./red_fort.avif";
import qutubMinar from "./qutub_minar.avif";
// import star_icon from './star_icon.svg'
// import left_arrow from './left_arrow.svg'
// import right_arrow from './right_arrow.svg'
// // import header_img from './header_img.png'
// import brand_img from './brand_img.png'
// import project_img_1 from './project_img_1.jpg'
// import project_img_2 from './project_img_2.jpg'
// import project_img_3 from './project_img_3.jpg'
// import project_img_4 from './project_img_4.jpg'
// import project_img_5 from './project_img_5.jpg'
// import project_img_6 from './project_img_6.jpg'
// import profile_img_1 from './profile_img_1.png'
// import profile_img_2 from './profile_img_2.png'
// import profile_img_3 from './profile_img_3.png'

export const assets = {
  logo,
  hero_photo,
  about_photo,
  swift_dezire,
  // star_icon,
  // // header_img,
  // brand_img,
  // project_img_1,
  // project_img_2,
  // project_img_3,
  // project_img_4,
  // left_arrow,
  // right_arrow,
};

export const carData = [
  {
    id: 1,
    title: "Luxury SUV",
    price: "$120/day",
    image:
      "https://images.unsplash.com/photo-1616211815027-5d4ef7c17f2a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Compact Sedan",
    price: "$75/day",
    image:
      "https://images.unsplash.com/photo-1583267748623-66e89f6b0e38?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Convertible Sport",
    price: "$150/day",
    image:
      "https://images.unsplash.com/photo-1606813909269-2d3a7e8e48e4?auto=format&fit=crop&w=800&q=80",
  },

  //     {
  //       title: "Central Square",
  //       price: "$2,50,000",
  //       location: "Los Angeles",
  //       image: project_img_4
  //     },
  //     {
  //       title: "Vista Verde",
  //       price: "$2,50,000",
  //       location: "San Francisco",
  //       image: project_img_5
  //     },
  //     {
  //       title: "Serenity Suites",
  //       price: "$2,50,000",
  //       location: "Chicago",
  //       image: project_img_6
  //     },
];

export const tourData = [
  {
    id: 1,
    title: "Taj Mahal",
    price: 4999,
    image: tajMahal,
    alt: "tajamahal.jpg",
    place: "Agra  India",
    days: 5,
    rating: 5,
    people:5
  },
  {
    id: 2,
    title: "Red Fort",
    image: redFort,
    alt: "red_fort.jpg",
    days: 1,
    place: "delhi India",
    price: 1999,
    people:3,
    rating: 4,
  },
  {
    id: 3,
    people:3,
    title: "Qutub Minar",
    image: qutubMinar,
    alt: "qutub_minar.jpg",
    days: 1,
    place: "delhi India",
    price: 1999,
    rating: 5,
  },
];
