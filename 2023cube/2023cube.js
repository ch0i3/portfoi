let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let imageSections = document.getElementsByClassName("image-section");
    let texts = document.getElementsByClassName("text-container");

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].getElementsByTagName('video')[0].pause();
      imageSections[i].classList.remove("active");
      texts[i].classList.remove("active");
  }

  slides[slideIndex].style.display = "block";
  slides[slideIndex].getElementsByTagName('video')[0].play();
  imageSections[slideIndex].classList.add("active");
  texts[slideIndex].classList.add("active");
}

