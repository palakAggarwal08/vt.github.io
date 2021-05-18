$(window).on("load", function () {
  let Events = [];
  let Upcoming = [];
  let Past = [];
  getapi();
  function preloadImage(url) {
    var img = new Image();
    img.src = url;
  }
  async function getapi() {
    await fetch(
      "https://virtuallytestingfoundation-default-rtdb.firebaseio.com/Events.json"
    )
      .then((res) => res.json())
      .then((data) => {
        Events = data;
      });
    console.log(Events);
    for (let eachData in Events.upcoming)
      Upcoming.push(Events.upcoming[eachData]);
    if (Upcoming.length > 0) {
      document.getElementById("upcoming-empty").style.display = "none";
      for (let i = 0; i < Upcoming.length; i++) {
        preloadImage(Upcoming[i].img);

        $("#upcoming-events")
          .owlCarousel(
            "add",
            '<div id="' +
              Upcoming[i].index +
              '" class="testimonial-wrap"><div class="testimonial-item p-0"><img src="' +
              Upcoming[i].img +
              '" class="w-100" style="border-radius: 7px 7px 0px 0px" /><div class="p-4"><h3 class="title"><a href="' +
              Upcoming[i].link +
              '">' +
              Upcoming[i].title +
              '</a></h3><p class="description">' +
              Upcoming[i].description +
              '</p><a href="' +
              Upcoming[i].link +
              '" class="btn-learn-more scrollto">Details</a></div></div></div>'
          )
          .owlCarousel("update");
      }
    }
    for (let eachData in Events.past) Past.push(Events.past[eachData]);
    if (Past.length > 0) {
      document.getElementById("past-empty").style.display = "none";
      for (let i = 0; i < Past.length; i++) {
        preloadImage(Past[i].img);
        $("#past-events")
          .owlCarousel(
            "add",
            '<div id="' +
              Past[i].index +
              '" class="testimonial-wrap"><div class="testimonial-item p-0"><img src="' +
              Past[i].img +
              '" class="w-100" style="border-radius: 7px 7px 0px 0px" /><div class="p-4"><h3 class="title"><a href="' +
              Past[i].link +
              '">' +
              Past[i].title +
              '</a></h3><p class="description">' +
              Past[i].description +
              '</p><a href="' +
              Past[i].link +
              '" class="btn-learn-more scrollto">Details</a></div></div></div>'
          )
          .owlCarousel("update");
      }
    }
  }

  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      900: {
        items: 2,
      },
    },
  });
});
