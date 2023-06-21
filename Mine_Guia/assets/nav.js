    var lastScrollTop = 0;
    var nav = document.querySelector('nav');

    window.addEventListener('scroll', function() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Rolagem para baixo
        nav.classList.add('scrolled');
      } else {
        // Rolagem para cima
        nav.classList.remove('scrolled');
      }

      lastScrollTop = scrollTop;
    });