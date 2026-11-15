/* --------------------------------------------------
   DJ TAXIARXIS — page behaviour
   Greek copy lives in index.html; English lives in EN below.
   -------------------------------------------------- */

(function () {
  'use strict';

  // Set this to a form backend URL (e.g. a Formspree endpoint) to actually
  // deliver requests. While empty, the form only shows the thank-you state.
  const FORM_ENDPOINT = '';

  document.documentElement.classList.add('js');

  // --------------------------------------------------
  // 1. English dictionary
  // --------------------------------------------------
  const EN = {
    'seo.title': 'DJ TAXIARXIS | DJ, Sound, Lighting & 360° Photo Booth for Weddings and Events',
    'seo.description': 'DJ, sound and lighting hire, decorative lighting and 360° photo booth for wedding receptions, christenings, corporate events and private parties.',

    'nav.services': 'Services',
    'nav.events': 'Events',
    'nav.process': 'How we work',
    'nav.contact': 'Contact',
    'nav.cta': 'Get a quote',

    'hero.eyebrow': 'DJ · Sound · Lighting · 360° Photo Booth',
    'hero.title': 'Your reception,<br><em>just as you pictured it.</em>',
    'hero.lead': 'Music, sound, lighting and a 360° photo booth for weddings, christenings and every kind of celebration. One partner who handles it all, from setup to the last song.',
    'hero.cta1': 'Get a quote',
    'hero.cta2': 'See the services',
    'strip.1': 'Weddings',
    'strip.2': 'Christenings',
    'strip.3': 'Corporate events',
    'strip.4': 'Private parties',

    'services.eyebrow': 'Services',
    'services.title': 'Everything a reception needs, <em>from one team.</em>',
    'services.lead': 'Book a single service or combine them into one package. One point of contact, one schedule, no gaps between separate crews.',

    's1.name': 'DJ & Music Curation',
    's1.title': 'Music that follows your evening',
    's1.text': 'Every reception has its own rhythm: welcome, dinner, first dance, party. We go through the songs you love and the ones you would rather skip in advance, and on the night we read the dance floor so it stays full until the end.',
    's1.b1': 'Meeting and music plan before the event',
    's1.b2': 'Greek and international repertoire, from lounge to party',
    's1.b3': 'Microphones for toasts and speeches',
    's1.b4': 'An elegant DJ booth that suits the venue',
    's1.link': 'Ask about availability',

    's2.name': 'Sound & Lighting',
    's2.title': 'Equipment that sounds clear and looks good',
    's2.text': 'We hire out and install professional sound and lighting systems, chosen for your venue and guest count. Available together with a DJ or on their own, for your own programme.',
    's2.b1': 'Column speakers and subwoofers for even coverage',
    's2.b2': 'Moving heads, beam and wash lighting',
    's2.b3': 'Warm ambient lighting for the venue',
    's2.b4': 'Delivery, installation and technical support',
    's2.link': 'Request a hire quote',

    's3.name': 'Decorative Lighting',
    's3.title': 'Light that transforms the space',
    's3.text': 'Fairy-light ceilings, light curtains, chandeliers and illuminated walkways. We turn gardens, pergolas and halls into a setting your guests will remember and your photos will show at its best.',
    's3.b1': 'Fairy lights and light canopies',
    's3.b2': 'Hanging chandeliers',
    's3.b3': 'Light tunnels and entrance walkways',
    's3.b4': 'Site visit before installation',
    's3.link': 'Talk through your idea',

    's4.name': '360° Photo Booth',
    's4.title': 'Where everyone ends up gathering',
    's4.text': 'Guests step onto the platform, the camera circles around them and seconds later they have a slow-motion video ready to share. The most fun keepsake of the night.',
    's4.b1': '360° platform with ring light',
    's4.b2': 'Videos sent straight to guests’ phones',
    's4.b3': 'Setup with carpet, stanchions and backdrop',
    's4.b4': 'An attendant with your guests throughout',
    's4.link': 'Add it to your event',

    'events.eyebrow': 'Events',
    'events.title': 'For every moment <em>worth celebrating.</em>',
    'e1.title': 'Weddings',
    'e1.text': 'From the couple’s entrance and the first dance through to sunrise. We coordinate with your venue, wedding planner and photographer so every moment lands on time.',
    'e2.title': 'Christenings',
    'e2.text': 'A warm, cheerful atmosphere for all ages, with music at the right volume and lighting that brings out the decor.',
    'e3.title': 'Corporate events',
    'e3.text': 'Presentations, galas and celebration parties with clear speech audio, a discreet setup and professional reliability.',
    'e4.title': 'Private parties',
    'e4.text': 'Birthdays, anniversaries, engagements and celebrations at home or at a venue of your choice, with equipment sized to the occasion.',

    'process.eyebrow': 'How we work',
    'process.title': 'Four steps <em>to your evening.</em>',
    'p1.title': 'Introduction',
    'p1.text': 'You tell us the date, the venue and what you have in mind.',
    'p2.title': 'Proposal',
    'p2.text': 'You receive a clear quote with the equipment and services that fit your event.',
    'p3.title': 'Preparation',
    'p3.text': 'We finalise the music, schedule and setup together with the venue.',
    'p4.title': 'The night',
    'p4.text': 'We set up early, test everything and stay by your side until the end.',

    'contact.eyebrow': 'Contact',
    'contact.title': 'Let’s talk <em>about your event.</em>',
    'contact.lead': 'Fill in a few details and we will get back to you with availability and a quote.',
    'contact.ig': 'See recent events',

    'f.name': 'Full name',
    'f.phone': 'Phone',
    'f.email': 'Email',
    'f.date': 'Event date',
    'f.type': 'Type of event',
    'f.type.0': 'Select',
    'f.type.1': 'Wedding',
    'f.type.2': 'Christening',
    'f.type.3': 'Wedding & christening',
    'f.type.4': 'Corporate event',
    'f.type.5': 'Private party',
    'f.type.6': 'Other',
    'f.place': 'Venue / area',
    'f.services': 'What are you interested in?',
    'f.s1': 'DJ',
    'f.s2': 'Sound & lighting',
    'f.s3': 'Decorative lighting',
    'f.s4': '360° photo booth',
    'f.msg': 'A few words about the event',
    'f.msg.ph': 'Guest count, timings, anything else we should know…',
    'f.error': 'Please fill in your name, phone, email and type of event.',
    'f.submit': 'Send request',

    'ok.title': 'Thank you!',
    'ok.text': 'We have received your request and will be in touch as soon as possible.',
    'ok.again': 'New request',

    'footer.tag': 'DJ · Sound · Lighting · Decorative lighting · 360° Photo Booth',

    'footer.by': 'Designed & built by',

    'alt.dj1': 'DJ booth with column speakers and decorative lights in a reception hall',
    'alt.dj2': 'DJ setup with speakers and lighting by the sea',
    'alt.dj3': 'DJ setup in a stone venue with a vaulted ceiling',
    'alt.av1': 'Column speaker, warm decorative lights and DJ booth',
    'alt.av2': 'Moving heads casting beams around a DJ booth',
    'alt.av3': 'Light beam falling on a set reception table',
    'alt.av4': 'Beam fixtures in operation',
    'alt.de1': 'Pergola with chandeliers and fairy lights at a seaside wedding reception',
    'alt.de2': 'Canopy of warm fairy lights over a garden path',
    'alt.de3': 'Entrance tunnel made of string lights',
    'alt.b1': '360° photo booth platform with ring light at a wedding reception',
    'alt.b2': '360° photo booth with red carpet and balloon decor'
  };

  // --------------------------------------------------
  // 2. Language switch (Greek originals are captured from the DOM)
  // --------------------------------------------------
  // Hero strip marquee: repeat the items so the track can loop seamlessly.
  // Done before the i18n collection below so the copies get translated too.
  const stripTrack = document.querySelector('.strip-track');
  if (stripTrack && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const items = Array.from(stripTrack.children);
    for (let n = 0; n < 5; n++) {
      items.forEach(li => {
        const copy = li.cloneNode(true);
        copy.setAttribute('aria-hidden', 'true');
        stripTrack.appendChild(copy);
      });
    }
    stripTrack.classList.add('marquee');
  }

  const targets = [];
  const collect = (attr, read, write) => {
    document.querySelectorAll('[' + attr + ']').forEach(el => {
      targets.push({ el, key: el.getAttribute(attr), gr: read(el), write });
    });
  };

  collect('data-i18n',
    el => (el.tagName === 'META' ? el.getAttribute('content') : el.innerHTML),
    (el, v) => { if (el.tagName === 'META') el.setAttribute('content', v); else el.innerHTML = v; });
  collect('data-i18n-alt', el => el.getAttribute('alt'), (el, v) => el.setAttribute('alt', v));
  collect('data-i18n-placeholder', el => el.getAttribute('placeholder'), (el, v) => el.setAttribute('placeholder', v));

  // Wrap each word of the hero title in a span so the words can animate in
  // one by one. Runs again after every language switch (innerHTML is replaced).
  function splitHero() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    let i = 0;
    const walk = node => {
      Array.from(node.childNodes).forEach(child => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const span = document.createElement('span');
            span.className = 'w';
            span.style.setProperty('--i', i++);
            span.textContent = part;
            frag.appendChild(span);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1 && !child.classList.contains('w')) {
          walk(child);
        }
      });
    };
    walk(title);
  }

  const readLang = () => { try { return localStorage.getItem('djtax-lang'); } catch (e) { return null; } };
  const saveLang = v => { try { localStorage.setItem('djtax-lang', v); } catch (e) { /* private mode */ } };

  function setLanguage(lang) {
    targets.forEach(t => {
      const value = lang === 'en' ? EN[t.key] : t.gr;
      if (value != null) t.write(t.el, value);
    });
    document.documentElement.lang = lang === 'en' ? 'en' : 'el';
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    saveLang(lang);
    splitHero();
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  if (readLang() === 'en') setLanguage('en'); else splitHero();

  // --------------------------------------------------
  // 3. Header state & mobile menu
  // --------------------------------------------------
  const header = document.getElementById('header');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const heroVideo = document.querySelector('.hero-video');
  const parallaxImgs = Array.from(document.querySelectorAll('.mosaic img'));

  // Scroll-linked motion: hero video zooms slowly, mosaic photos drift
  // a little slower than the page.
  const updateMotion = () => {
    const vh = window.innerHeight;
    if (heroVideo && window.scrollY < vh * 1.2) {
      const t = Math.min(window.scrollY / vh, 1);
      heroVideo.style.setProperty('--zoom', (1 + t * 0.14).toFixed(4));
    }
    parallaxImgs.forEach(img => {
      const r = img.parentElement.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const p = ((r.top + r.height / 2) - vh / 2) / (vh / 2 + r.height / 2);
      img.style.setProperty('--py', (Math.max(-1, Math.min(1, p)) * -5).toFixed(2) + '%');
    });
  };

  let ticking = false;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
    if (reducedMotion || ticking) return;
    ticking = true;
    requestAnimationFrame(() => { updateMotion(); ticking = false; });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const setMenu = open => {
    mobileMenu.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  };
  menuToggle.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('open')));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  window.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  // --------------------------------------------------
  // 4. Scroll reveal & active nav link
  // --------------------------------------------------
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));

    const navLinks = document.querySelectorAll('.nav a');
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main > section[id]').forEach(s => spy.observe(s));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  // --------------------------------------------------
  // 5. Hero video: stay still for reduced-motion visitors
  // --------------------------------------------------
  const video = document.querySelector('.hero-video');
  if (video && reducedMotion) {
    video.removeAttribute('autoplay');
    video.pause();
  }

  // --------------------------------------------------
  // 6. Service links pre-tick the matching interest in the form
  // --------------------------------------------------
  document.querySelectorAll('[data-service]').forEach(link => {
    link.addEventListener('click', () => {
      const box = document.querySelector('.chips input[value="' + link.dataset.service + '"]');
      if (box) box.checked = true;
    });
  });

  // --------------------------------------------------
  // 7. Booking form
  // --------------------------------------------------
  const form = document.getElementById('booking-form');
  const success = document.getElementById('form-success');
  const error = document.getElementById('form-error');
  const reset = document.getElementById('form-reset');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    let valid = true;
    form.querySelectorAll('[required]').forEach(input => {
      const ok = input.checkValidity();
      input.classList.toggle('invalid', !ok);
      if (!ok) valid = false;
    });
    error.hidden = valid;
    if (!valid) {
      const first = form.querySelector('.invalid');
      if (first) first.focus();
      return;
    }

    if (FORM_ENDPOINT) {
      const data = new FormData(form);
      const payload = Object.fromEntries(data.entries());
      payload.services = data.getAll('services').join(', ');
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
      } catch (err) {
        console.error('[DJ TAXIARXIS] Form submission failed:', err);
        error.hidden = false;
        return;
      }
    }

    form.hidden = true;
    success.hidden = false;
  });

  form.addEventListener('input', e => {
    if (e.target.classList.contains('invalid') && e.target.checkValidity()) e.target.classList.remove('invalid');
  });

  reset.addEventListener('click', () => {
    form.reset();
    success.hidden = true;
    form.hidden = false;
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
