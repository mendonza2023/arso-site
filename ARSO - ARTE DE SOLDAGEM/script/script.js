
  function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.getElementById("lightbox-content");

    lightboxContent.innerHTML = `<img src="${src}">`;
    lightbox.style.display = "flex";
  }

  function openLightboxVideo(videoElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.getElementById("lightbox-content");

    const src = videoElement.querySelector("source").src;
    lightboxContent.innerHTML = `<video controls autoplay><source src="${src}" type="video/mp4"></video>`;
    lightbox.style.display = "flex";
  }

  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.getElementById("lightbox-content").innerHTML = "";
  }
