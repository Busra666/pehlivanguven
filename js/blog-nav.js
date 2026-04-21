document.addEventListener('DOMContentLoaded', function () {
  var blogs = [
    { num: 1, tr: "Türkiye'de Yabancıların Boşanma Davaları", fa: "دعاوی طلاق خارجی ها در ترکیه" },
    { num: 2, tr: "Yabancıların Çalışma İzni Muafiyeti", fa: "معافیت مجوز کار خارجی ها" },
    { num: 3, tr: "Kira Ödemelerinde Elden Ödeme Dönemi Bitti", fa: "پایان پرداخت نقدی اجاره" },
    { num: 4, tr: "Miras Kalan Taşınmazlarda Tapu İntikal İşlemleri", fa: "مراحل انتقال سند ملک ارثی" },
    { num: 5, tr: "Sınır Dışı Kararları ve İptal Davaları Süreci", fa: "احکام اخراج و دعاوی ابطال" },
    { num: 6, tr: "Tahdit Kodları ve İptal Davaları", fa: "کدهای محدودیت و دعاوی ابطال" },
    { num: 7, tr: "İdari Gözetim Kararı ve İtiraz Süreci", fa: "حکم بازداشت اداری و فرآیند اعتراض" },
    { num: 8, tr: "Araç Değer Kaybı", fa: "افت ارزش خودرو" },
    { num: 9, tr: "Boşanma Süreci", fa: "فرآیند طلاق" },
    { num: 10, tr: "Boşanmada Mal Paylaşımı", fa: "تقسیم اموال در طلاق" },
    { num: 11, tr: "Kira Tahliye Davalarında Tahliye Taahhütnamesi", fa: "تعهدنامه تخلیه در دعاوی تخلیه اجاره" },
    { num: 12, tr: "Yabancıların Türkiye'de Evlenmesi", fa: "ازدواج خارجی ها در ترکیه" },
    { num: 13, tr: "Muris Muvazaası", fa: "معامله صوری مورث" },
    { num: 14, tr: "Türkiye'de Yabancıların Çalışma İzni", fa: "مجوز کار خارجی ها در ترکیه" },
    { num: 15, tr: "Yatırım Yoluyla Türk Vatandaşlığı Kazanımı", fa: "اخذ شهروندی ترکیه از طریق سرمایه گذاری" },
    { num: 16, tr: "Tesla Emsal Karar", fa: "رأی نمونه تسلا" },
    { num: 17, tr: "Yabancıların Türkiye'de Taşınmaz Ediniminde Hukuki Süreç", fa: "فرآیند حقوقی خرید ملک توسط خارجی ها در ترکیه" },
    { num: 18, tr: "Sağlık Meslek Mensuplarının Soruşturma İzni Süreci", fa: "فرآیند مجوز تحقیق کارکنان بهداشتی" },
    { num: 19, tr: "İş Sözleşmesinin İşçi Tarafından Feshi", fa: "فسخ قرارداد کار توسط کارگر" },
    { num: 20, tr: "İş Sözleşmesinin İşveren Tarafından Haklı Nedenle Derhal Feshi", fa: "فسخ فوری قرارداد کار توسط کارفرما" },
    { num: 21, tr: "Denklik ve Diploma İptallerinde Kazanılmış Hak", fa: "حقوق مکتسبه در ابطال معادل سازی و مدرک" },
    { num: 22, tr: "Fazla Mesai ve Fazla Sürelerle Çalışma Ücretinin Hesaplanması", fa: "محاسبه حقوق اضافه کاری" },
    { num: 23, tr: "Gece Çalışmasında Fazla Mesai", fa: "اضافه کاری در شیفت شب" },
    { num: 24, tr: "YÖK Denklik İptali Davasında Emsal Karar", fa: "رأی نمونه در دعوای ابطال معادل سازی YÖK" },
    { num: 25, tr: "Trafik Kazası Sonrası Maddi ve Manevi Tazminat Rehberi", fa: "راهنمای جبران خسارت مادی و معنوی پس از تصادف رانندگی" },
    { num: 26, tr: "İstanbul'daki Vatandaşlık Krizi İddiaları ve Türk Vatandaşlığının İptali", fa: "ابطال تابعیت ترکیه در پرتو ادعاهای بحران تابعیت در استانبول" }
  ];

  var labels = {
    tr: { prev: "Önceki Yazı", next: "Sonraki Yazı", sidebar: "Diğer Yazılar" },
    fa: { prev: "مقاله قبلی", next: "مقاله بعدی", sidebar: "مقالات دیگر" }
  };

  // Detect current blog number
  var fullUrl = window.location.href || '';
  var pathname = window.location.pathname || '';
  var searchStr = fullUrl + ' ' + pathname;
  var match = searchStr.match(/blog(\d+)\.html/);
  if (!match) return;

  var currentNum = parseInt(match[1]);
  var currentIndex = -1;
  for (var i = 0; i < blogs.length; i++) {
    if (blogs[i].num === currentNum) { currentIndex = i; break; }
  }
  if (currentIndex === -1) return;

  function getLang() {
    try { return localStorage.getItem('language') || 'tr'; } catch(e) { return 'tr'; }
  }

  function getTitle(blog) {
    var l = getLang();
    return blog[l] || blog.tr;
  }

  function getLabel(key) {
    var l = getLang();
    return (labels[l] && labels[l][key]) ? labels[l][key] : labels.tr[key];
  }

  function buildNav() {
    var prev = currentIndex > 0 ? blogs[currentIndex - 1] : null;
    var next = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

    var html = '<div id="blogNavSection" class="container" style="margin-top:20px;margin-bottom:20px;"><div class="blog-nav">';
    if (prev) {
      html += '<a href="blog' + prev.num + '.html" class="blog-nav__btn blog-nav__prev">' +
        '<i class="ti-arrow-left"></i>' +
        '<div><span class="blog-nav__label">' + getLabel('prev') + '</span>' +
        '<span class="blog-nav__title">' + getTitle(prev) + '</span></div></a>';
    } else {
      html += '<div></div>';
    }
    if (next) {
      html += '<a href="blog' + next.num + '.html" class="blog-nav__btn blog-nav__next">' +
        '<div><span class="blog-nav__label">' + getLabel('next') + '</span>' +
        '<span class="blog-nav__title">' + getTitle(next) + '</span></div>' +
        '<i class="ti-arrow-right"></i></a>';
    } else {
      html += '<div></div>';
    }
    html += '</div></div>';
    return html;
  }

  function buildSidebar() {
    var html = '<div class="blog-sidebar" id="blogSidebar">' +
      '<div class="blog-sidebar__toggle" id="sidebarToggle">' +
      '<i class="ti-menu"></i></div>' +
      '<div class="blog-sidebar__content" id="sidebarContent">' +
      '<h4>' + getLabel('sidebar') + '</h4><ul>';

    for (var i = blogs.length - 1; i >= 0; i--) {
      var b = blogs[i];
      var cls = b.num === currentNum ? ' class="active"' : '';
      html += '<li' + cls + '><a href="blog' + b.num + '.html">' + getTitle(b) + '</a></li>';
    }
    html += '</ul></div></div>';
    return html;
  }

  function render() {
    // Remove old
    var oldNav = document.getElementById('blogNavSection');
    if (oldNav) oldNav.remove();
    var oldSidebar = document.getElementById('blogSidebar');
    if (oldSidebar) oldSidebar.remove();

    // Add nav before footer
    var footer = document.querySelector('footer.footer-area');
    if (footer) {
      var navDiv = document.createElement('div');
      navDiv.innerHTML = buildNav();
      footer.parentNode.insertBefore(navDiv.firstChild, footer);
    }

    // Add sidebar to body
    var sidebarDiv = document.createElement('div');
    sidebarDiv.innerHTML = buildSidebar();
    document.body.appendChild(sidebarDiv.firstChild);

    // Sidebar toggle
    var toggle = document.getElementById('sidebarToggle');
    var sidebar = document.getElementById('blogSidebar');
    if (toggle && sidebar) {
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        sidebar.classList.toggle('open');
      });
    }
  }

  // Initial render
  render();

  // Close sidebar when clicking outside
  document.addEventListener('click', function (e) {
    var sidebar = document.getElementById('blogSidebar');
    if (sidebar && !sidebar.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });

  // Re-render when language changes
  var langButtons = document.querySelectorAll('.lang-select');
  for (var j = 0; j < langButtons.length; j++) {
    langButtons[j].addEventListener('click', function () {
      setTimeout(render, 200);
    });
  }
});
