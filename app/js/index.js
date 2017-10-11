/*global Vue axios showdown*/
const classMap = {
  h1: "card-title",
  h2: "card-title",
  h3: "card-subtitle text-muted h6",
  ul: "card-text pl-3",
  ol: "card-text pl-3"
};

const bindings = Object.keys(classMap)
  .map(key => ({
    type: "output",
    regex: new RegExp(`<${key}>`, "g"),
    replace: `<${key} class="${classMap[key]}">`
  }));

const conv = new showdown.Converter({
  extensions: [ bindings ],
  noHeaderId: true // important to add this, else regex match doesn't work
});

function getDate(markdown) {
  var regex = /(\w+ \d{4})/m;
  return new Date(regex.exec(markdown)[0]);
}

window.resume = new Vue({
  el: "#resume",
  data: {
    qualifications: {
      html: null,
      markdown: null
    },
    jobs: []
  },
  computed: {
    showAlert() {
      return this.name.length > 4 ? true : false;
    }
  }
});

window.about = new Vue({
  el: "#about",
  data: {
    about: {
      html: null,
      markdown: null
    },
    tools: {
      html: null,
      markdown: null
    }
  },
  computed: {
    showAlert() {
      return this.name.length > 4 ? true : false;
    }
  }
});

axios.get("https://api.github.com/repos/smiller171/www.millergeek.xyz/contents/markdown/about/about.md", {
  headers: {"Accept": "application/vnd.github.v3.raw"}
})
  .then(function (response) {
    window.about.about.markdown = response.data;
    window.about.about.html = conv.makeHtml(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

axios.get("https://api.github.com/repos/smiller171/www.millergeek.xyz/contents/markdown/resume/qualifications.md", {
  headers: {"Accept": "application/vnd.github.v3.raw"}
})
  .then(function (response) {
    window.resume.qualifications.markdown = response.data;
    window.resume.qualifications.html = conv.makeHtml(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

axios.get("https://api.github.com/repos/smiller171/www.millergeek.xyz/contents/markdown/resume/jobs", {
  headers: {"Accept": "application/vnd.github.v3.raw"}
})
  .then(function (response) {
    response.data.forEach(function(file) {
      axios.get(`https://api.github.com/repos/smiller171/www.millergeek.xyz/contents/${file.path}`, {
        headers: {"Accept": "application/vnd.github.v3.raw"}
      })
        .then(function (response) {
          window.resume.jobs.push({
            markdown: response.data,
            html: conv.makeHtml(response.data),
            date: getDate(response.data),
            file: file.name
          });
        })
        .then(function() {
          window.resume.jobs.sort(function(a, b) {
            if (a.date > b.date) {
              return -1;
            } else if (a.date < b.date) {
              return 1;
            } else {
              return 0;
            }
          });
        });
    });
    // window.resume.jobs.markdown = response.data;
    // window.resume.qualifications.html = conv.makeHtml(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

// Tooltips
$(function () {
  $("[data-toggle=\"tooltip\"]").tooltip();
});

$("#contactForm").submit(function (e) {
  e.preventDefault();
  let payload = {
    "bodyData": $("#contactBody").val(),
    "subjectData": $("#contactSubject").val(),
    "replyToAddresses": [$("#contactEmail").val()]
  };
  console.log(payload);
  $.post("https://api.millergeek.xyz/sendmail", payload)
    .done(function () {
      console.log("sent successfully");
      $("#emailSuccess").removeClass("d-none");
      setTimeout(function () {
        $("#emailSuccess").addClass("show");
      }, 10);
      setTimeout(function () {
        $("#emailSuccess").removeClass("show");
        setTimeout(function () {
          $("#emailSuccess").addClass("d-none");
        }, 150);
      }, 2000);
    }).fail(function (err) {
      console.error("Failed: ", err);
      $("#emailFail").removeClass("d-none");
      setTimeout(function () {
        $("#emailFail").addClass("show");
      }, 10);
      setTimeout(function () {
        $("#emailFail").removeClass("show");
        setTimeout(function () {
          $("#emailFail").addClass("d-none");
        }, 150);
      }, 2000);
    });
});

// Ripple-effect animation
$(function ($) {
  $(".ripple-effect").click(function (e) {
    var rippler = $(this);

    // create .ink element if it doesn't exist
    if (rippler.find(".ink").length == 0) {
      rippler.append("<span class='ink'></span>");
    }

    var ink = rippler.find(".ink");

    // prevent quick double clicks
    ink.removeClass("animate");

    // set .ink diametr
    if (!ink.height() && !ink.width()) {
      var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
      ink.css({height: d, width: d});
    }

    // get click coordinates
    var x = e.pageX - rippler.offset().left - ink.width() / 2;
    var y = e.pageY - rippler.offset().top - ink.height() / 2;

    // set .ink position and add class .animate
    ink.css({
      top: y + "px",
      left: x + "px"
    }).addClass("animate");
  });
});
