// Testimonial Section
const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-img");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "The Hulk",
    position: "Marvel",
    photo: "../assets/img/user2.jpg",
    text: "Blog post reviews give your potential customer an opportunity to really dig in deep into your product or service, and even your brand and culture as a company. Rather than just a sentence or two like a customer might find on your website or a few hundred words displayed on a peer-to-peer review page, blog posts can be thousands of words, complete with step-by-step instructions with images that thoroughly explain a process or perspective. ",
  },
  {
    name: "Iron Man",
    position: "Marvel",
    photo: "../assets/img/user3.jpg",
    text: "Blog post reviews give your potential customer an opportunity to really dig in deep into your product or service, and even your brand and culture as a company. Rather than just a sentence or two like a customer might find on your website or a few hundred words displayed on a peer-to-peer review page, blog posts can be thousands of words, complete with step-by-step instructions with images that thoroughly explain a process or perspective. ",
  },
  {
    name: "Loki",
    position: "Marvel",
    photo: "../assets/img/user4.jpg",
    text: "Blog post reviews give your potential customer an opportunity to really dig in deep into your product or service, and even your brand and culture as a company. Rather than just a sentence or two like a customer might find on your website or a few hundred words displayed on a peer-to-peer review page, blog posts can be thousands of words, complete with step-by-step instructions with images that thoroughly explain a process or perspective. ",
  },
  {
    name: "Doctor Strange",
    position: "Marvel",
    photo: "../assets/img/user5.jpg",
    text: "Blog post reviews give your potential customer an opportunity to really dig in deep into your product or service, and even your brand and culture as a company. Rather than just a sentence or two like a customer might find on your website or a few hundred words displayed on a peer-to-peer review page, blog posts can be thousands of words, complete with step-by-step instructions with images that thoroughly explain a process or perspective. ",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);

//Sticky Navigation
const sectionHeroEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In The View Port
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

//Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
