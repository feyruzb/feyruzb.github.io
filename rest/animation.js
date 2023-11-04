var _createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var TextScramble = (function () {
    function TextScramble(el) {
      _classCallCheck(this, TextScramble);
      this.el = el;
      this.chars = "!<>-_\\/[]{}&#8212;=+*^?#________";
      this.update = this.update.bind(this);
    }
    _createClass(TextScramble, [
      {
        key: "setText",
        value: function setText(newText) {
          var _this = this;
          var oldText = this.el.innerText;
          var length = Math.max(oldText.length, newText.length);
          var promise = new Promise(function (resolve) {
            return (_this.resolve = resolve);
          });
          this.queue = [];
          for (var i = 0; i < length; i++) {
            var from = oldText[i] || "";
            var to = newText[i] || "";
            var start = Math.floor(Math.random() * 40);
            var end = start + Math.floor(Math.random() * 40);
            this.queue.push({
              from: from,
              to: to,
              start: start,
              end: end
            });
          }
          cancelAnimationFrame(this.frameRequest);
          this.frame = 0;
          this.update();
          return promise;
        }
      },
      {
        key: "update",
        value: function update() {
          var output = "";
          var complete = 0;
          for (var i = 0, n = this.queue.length; i < n; i++) {
            var _queue$i = this.queue[i],
              from = _queue$i.from,
              to = _queue$i.to,
              start = _queue$i.start,
              end = _queue$i.end,
              char = _queue$i.char;
            if (this.frame >= end) {
              complete++;
              output += to;
            } else if (this.frame >= start) {
              if (!char || Math.random() < 0.28) {
                char = this.randomChar();
                this.queue[i].char = char;
              }
              output += '<span class="sb">' + char + "</span>";
            } else {
              output += from;
            }
          }
          this.el.innerHTML = output;
          if (complete === this.queue.length) {
            this.resolve();
          } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
          }
        }
      },
      {
        key: "randomChar",
        value: function randomChar() {
          return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
      }
    ]);
    return TextScramble;
  })();
  // &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;// From SiinBlog with love// &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;
  var phrases = [
    "CodeCrafting 101",
    "The Art of Debugging",
    "Mastering Algorithms",
    "Web Wizardry",
    "Python Power Hour",
    "JavaScript Journeys",
    "C++ Chronicles",
    "Game Dev Guru",
    "Data Science Deep Dive",
    "Cybersecurity Secrets",
    "AI Adventures",
    "Blockchain Breakdown",
    "Cloud Computing Magic",
    "DevOps Demystified",
    "Machine Learning Mysteries",
    "Hacking Happenings",
    "Full-Stack Fundamentals",
    "IoT Innovations",
    "Code Optimization Odyssey",
    "Software Architecture Safari",
    "Passionate Programmer and Problem Solver",
    "Tech Enthusiast and Creative Coder",
    "Software Engineer with a Love for Learning",
    "Innovator at the Intersection of Technology and Creativity",
    "Code Artisan and Problem-Solving Wizard",
    "Web Developer and Digital Explorer",
    "AI and Machine Learning Enthusiast",
    "Full-Stack Developer and Tech Geek",
    "Cybersecurity Advocate and Ethical Hacker",
    "Open Source Contributor and Community Builder",
    "Data Science Explorer and Analytics Wizard",
    "Passionate About Programming and Innovation",
    "Tech Writer and Knowledge Sharer",
    "Digital Nomad and Remote Work Advocate",
    "Software Architect and Systems Designer",
    "Gamer, Coder, and All-Around Geek",
    "Continuous Learner and Tech Evangelist",
    "Passionate About Building Digital Solutions",
    "Problem Solver with a Keyboard and a Vision",
    "Coding in the Name of Creativity",
    


    "Code Alchemist Crafting Digital Spells",
    "Bit Explorer in the Digital Wilderness",
    "Byte Juggler and Algorithm Whisperer",
    "Web Weaver and User Experience Guru",
    "Enthusiastic Problem-Solver in Codeville",
    "Software Sorcerer Conjuring Digital Worlds",
    "Cybernetic Dreamer and Tech Visionary",
    "Code Composer Orchestrating Digital Symphony",
    "Pixel Wrangler and Design Maestro",
    "Data Detective Solving Digital Mysteries",
    "Ninja Coder and Debugging Sensei",
    "Commander of the Digital Universe",
    "Tech Altruist and Community Advocate",
    "Full-Stack Maestro and Framework Artist",
    "Digital Nomad Roaming the Virtual Frontiers",
    "Open Source Evangelist and Collaborator",
    "Champion of Clean Code and Best Practices",
    "Pixel Painter and Graphic Wizard",
    "Hacker with a White Hat and a Black Coffee",
    "Software Archaeologist Unearthing Legacy Code",
    "AI Tinkerer and Neural Network Wrangler",
    "Techpreneur Building the Future",
    "Innovative Code Poet and Script Artisan",
    "JavaScript Jester and HTML Hero",
    "DevOps Explorer in the CI/CD Wilderness",
    "Coding Philosopher Reflecting on Binary Wisdom",
    "Bug Bounty Hunter and Code Vigilante",
    "Mobile App Maestro Crafting User Delight",
    "Blockchain Pioneer and Cryptocurrency Trailblazer",
    "Agile Scrum Master and Agile Enthusiast",
    "Server Whisperer and Cloud Architect",
    "API Magician Bridging Digital Realms",
    "UI/UX Artist Creating Digital Masterpieces",
    "Machine Learning Maestro and Data Wizard",
    "Code Samaritan Making the Web a Better Place",
    "Compiler Connoisseur and Low-Level Luminary",
    "Continuous Integration and Deployment Maestro",
    "VR Enthusiast Exploring Virtual Realities",
    "Passionate Gamer and Code Combatant",
    "Commander of Servers in the Cloud Army",
    "Web Accessibility Advocate and Inclusion Crusader",
    "Data Wrangler and Visualization Virtuoso",
    "Script Surgeon Crafting Digital Remedies",
    "Digital Philanthropist and Tech for Good Champion",
    "Crypto Enthusiast and Decentralization Defender",
    "API Explorer Mapping Digital Frontiers",
];
    phrases.sort(function () {
        return 0.5 - Math.random();
    });

  var el = document.querySelector(".text");
  var fx = new TextScramble(el);
  var counter = 0;
  var next = function next() {
    fx.setText(phrases[counter]).then(function () {
      setTimeout(next, 1500);
    });
    counter = (counter + 1) % phrases.length;
  };
  next();
  
  //next code
  
    //<![CDATA[
    (function(b) {
      var c = {
          topSpacing: 0,
          bottomSpacing: 0,
          className: "is-sticky",
          center: false
        },
        f = b(window),
        e = b(document),
        d = [],
        h = f.height(),
        a = function() {
          var j = f.scrollTop(),
            q = e.height(),
            p = q - h,
            l = (j > p) ? p - j : 0;
          for (var m = 0; m < d.length; m++) {
            var r = d[m],
              k = r.stickyWrapper.offset().top,
              n = k - r.topSpacing - l;
            if (j <= n) {
              if (r.currentTop !== null) {
                r.stickyElement.css("position", "").css("top", "").removeClass(r.className);
                r.currentTop = null
              }
            } else {
              var o = q - r.elementHeight - r.topSpacing - r.bottomSpacing - j - l;
              if (o < 0) {
                o = o + r.topSpacing
              } else {
                o = r.topSpacing
              }
              if (r.currentTop != o) {
                r.stickyElement.css("position", "fixed").css("top", o).addClass(r.className);
                r.currentTop = o
              }
            }
          }
        },
        g = function() {
          h = f.height()
        };
      if (window.addEventListener) {
        window.addEventListener("scroll", a, false);
        window.addEventListener("resize", g, false)
      } else {
        if (window.attachEvent) {
          window.attachEvent("onscroll", a);
          window.attachEvent("onresize", g)
        }
      }
      b.fn.sticky = function(i) {
        var j = b.extend(c, i);
        return this.each(function() {
          var l = b(this);
          if (j.center) {
            var k = "margin-left:auto;margin-right:auto;"
          }
          stickyId = l.attr("id");
          l.wrapAll('<div id="' + stickyId + 'StickyWrapper" style="' + k + '"></div>').css("width", l.width());
          var m = l.outerHeight(),
            n = l.parent();
          n.css("width", l.outerWidth()).css("height", m).css("clear", l.css("clear"));
          d.push({
            topSpacing: j.topSpacing,
            bottomSpacing: j.bottomSpacing,
            stickyElement: l,
            currentTop: null,
            stickyWrapper: n,
            elementHeight: m,
            className: j.className
          })
        })
      }
    })(jQuery);
    //]]>
    $(document).ready(function() {
      $("#HTML1").sticky({
        topSpacing: 10,
        bottomSpacing: 320
      });
    });