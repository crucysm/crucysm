particlesJS("particles-js", /*dán nội tập tin JSON đã tải về ở trên vào đây*/
        {
  "particles": {
    "number": {
      "value": 65,
      "density": {
        "enable": true,
        "value_area": 500
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#52f1ff"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 30,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 240,
      "color": "#555857",
      "opacity": 0.18,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.65,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab bubble push"
      },
      "onclick": {
        "enable": true,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 280,
        "line_linked": {
          "opacity": 0.18
        }
      },
      "bubble": {
        "distance": 300,
        "size": 3.5,
        "duration": 0.25,
        "opacity": 1,
        "speed": 1
      },
      "repulse": {
        "distance": 29,
        "duration": 1
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
    );
