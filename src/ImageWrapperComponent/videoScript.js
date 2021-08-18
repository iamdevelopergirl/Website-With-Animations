// window.lazyLoadOptions = {
//     elements_selector: ".lazy"
// };





document.addEventListener("DOMContentLoaded", function() {
    var videos = [].slice.call(document.querySelectorAll("video.lazy"));
  
    if ("IntersectionObserver" in window) {
      var videoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(video) {
          if (video.isIntersecting) {
            video.poster = video.dataset.poster;
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
              }
            }
  
            video.target.load();
            video.target.classList.remove("lazy");
            videoObserver.unobserve(video.target);
          }
        });
      });
  
      videos.forEach(function(video) {
        videoObserver.observe(video);
      });
    }
  });