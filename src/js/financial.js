// ═══════════ SCROLL FADE-IN ANIMATIONS ═══════════
(function () {
    // Add fade-up class to all major section blocks
    const targets = [
        // hero
        '.left', '.right',
        // definition
        '.def-left', '.def-right',
        // gain
        '.gain-header', '.gain-card', '.gain-stats',
        // prob
        '.prob-header-inner', '.prob-row',
    ];

    targets.forEach(sel => {
        document.querySelectorAll(sel).forEach((el, i) => {
            if (!el.classList.contains('fade-up') && !el.classList.contains('fade-left') && !el.classList.contains('fade-right')) {
                el.classList.add('fade-up');
                // stagger by index within same selector group
                const delay = ['delay-1', 'delay-2', 'delay-3', 'delay-4', 'delay-5'];
                el.classList.add(delay[i % 5]);
            }
        });
    });

    // prob-row image = fade-left, content = fade-right (alternating)
    document.querySelectorAll('.prob-row').forEach((row, i) => {
        row.classList.remove('fade-up');
        const img = row.querySelector('.prob-row-img-wrap');
        const cnt = row.querySelector('.prob-row-content');
        if (row.classList.contains('prob-row--rev')) {
            img && img.classList.replace ? (img.classList.add('fade-right'), img.classList.remove('fade-up')) : null;
            cnt && (cnt.classList.add('fade-left'), cnt.classList.remove('fade-up'));
        } else {
            img && (img.classList.add('fade-left'), img.classList.remove('fade-up'));
            cnt && (cnt.classList.add('fade-right'), cnt.classList.remove('fade-up'));
        }
    });

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in-view');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => obs.observe(el));
})();


// ═══════════ SOLUTION / MODULES SECTION ═══════════
(function () {
    const moduleData = [
        {
            num: '01',
            tag: 'Module 01 — P&L Reporting',
            title: 'REAL-TIME<br>SITE P&L',
            desc: 'Live profit and loss for each site — refreshed after every transaction, on any device. Compare all sites side-by-side without waiting for your accountant.',
            checks: ['Per-site revenue & cost breakdown', 'Gross margin and net profit live', 'Compare all sites side-by-side'],
            before: '3 <span class="sol-metric-unit">days</span>', beforeName: 'Old Close Time',
            after: '4 <span class="sol-metric-unit">hrs</span>', afterName: 'New Close Time', afterPct: 20,
            impact: '1<span class="sol-metric-unit">×</span>', impactName: 'Click Report',
            img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80',
            caption: 'Live P&L — updates with every truck',
            footnote: 'Updates with every truck movement — zero manual input required.'
        },
        {
            num: '02',
            tag: 'Module 02 — GST Compliance',
            title: 'E-INVOICE<br>IN 30 SEC',
            desc: 'GST e-invoices with IRN and QR codes in under 30 seconds via direct API integration. E-way bills in the same workflow — no portal login needed.',
            checks: ['E-way bills in same workflow', 'No portal login needed', 'Audit-ready at all times'],
            before: '20 <span class="sol-metric-unit">min</span>', beforeName: 'Old Invoice Time',
            after: '30 <span class="sol-metric-unit">sec</span>', afterName: 'New Invoice Time', afterPct: 4,
            impact: '0<span class="sol-metric-unit">errors</span>', impactName: 'GST Discrepancies',
            img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80',
            caption: 'Auto GST e-invoice at point of dispatch',
            footnote: 'IRN filed to government portal instantly — audit-ready every day.'
        },
        {
            num: '03',
            tag: 'Module 03 — Credit & Receivables',
            title: 'HARDWARE<br>CREDIT LOCK',
            desc: 'Boom barrier physically blocks dispatch when a customer exceeds their credit limit. Policy enforced at hardware level — no phone calls needed.',
            checks: ['Per-customer credit limits', 'Overdue invoice flagging', 'Live receivables dashboard'],
            before: 'Manual<span class="sol-metric-unit"></span>', beforeName: 'Old Gate Check',
            after: '38 <span class="sol-metric-unit">%</span>', afterName: 'Drop in Overdues', afterPct: 38,
            impact: '0<span class="sol-metric-unit">calls</span>', impactName: 'Gate Check Calls',
            img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80',
            caption: 'Boom barrier stops over-limit dispatch',
            footnote: 'Credit enforced at hardware level — before the barrier lifts.'
        },
        {
            num: '04',
            tag: 'Module 04 — Expense Tracking',
            title: 'TRUE COST<br>PER TONNE',
            desc: 'Log fuel, explosives, labour and permits per site. True cost-per-tonne calculated automatically with margin data per material grade.',
            checks: ['Category-wise expense tracking', 'Site-level cost allocation', 'Margin data per material grade', 'Owner view of margin per customer, route and vehicle — stop unprofitable jobs fast'],
            before: '?<span class="sol-metric-unit">cost</span>', beforeName: 'Actual Cost / Tonne',
            after: 'Live<span class="sol-metric-unit"></span>', afterName: 'Per-Site Margin', afterPct: 100,
            impact: 'Auto<span class="sol-metric-unit"></span>', impactName: 'Cost-Per-Tonne',
            img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80',
            caption: 'Every cost allocated to site and material',
            footnote: 'Know which site bleeds margin before it becomes a problem.'
        },
        {
            num: '05',
            tag: 'Module 05 — Accounting Sync',
            title: 'TALLY<br>ZERO REENTRY',
            desc: 'Every invoice and expense posts vouchers automatically. Direct Tally sync — sales, receipt and payment vouchers always current.',
            checks: ['Sales, receipt & payment vouchers', 'Real-time Tally sync', 'Always-current books', 'Auditor-friendly export with clear mapping between SAZS ERP vouchers and Tally groups and ledgers'],
            before: 'Manual<span class="sol-metric-unit"></span>', beforeName: 'Old Re-entry',
            after: '0<span class="sol-metric-unit"></span>', afterName: 'Manual Re-entry', afterPct: 0,
            impact: '100<span class="sol-metric-unit">%</span>', impactName: 'Match Rate',
            img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80',
            caption: 'Every transaction auto-posts to Tally',
            footnote: 'Real-time Tally sync — books always current, zero double-entry.'
        },
        {
            num: '06',
            tag: 'Module 06 — Inventory',
            title: 'STOCK<br>RECONCILIATION',
            desc: 'Production matched against dispatched tonnage daily. Shortfalls flagged before they become losses. Grade-wise inventory tracking across all sites.',
            checks: ['Grade-wise inventory tracking', 'RMC batch yield variance', 'Brick plant material matching', 'Financial value of stock per site, material grade and yard — ready for bank and audit statements'],
            before: 'Manual<span class="sol-metric-unit"></span>', beforeName: 'Old Stock Checks',
            after: 'Daily<span class="sol-metric-unit"></span>', afterName: 'Auto Stock Checks', afterPct: 100,
            impact: '0<span class="sol-metric-unit">loss</span>', impactName: 'Undetected Gaps',
            img: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=700&q=80',
            caption: 'Production vs dispatch matched daily',
            footnote: 'Shortfalls flagged daily before they become losses.'
        }
    ];

    const btns = document.querySelectorAll('.sol-mod-btn');

    function switchModule(idx) {
        const d = moduleData[idx];

        // Update button states
        btns.forEach(b => b.classList.remove('sol-mod-btn--active'));
        btns[idx].classList.add('sol-mod-btn--active');

        // Fade out / in detail panel
        const panel = document.querySelector('.sol-detail-panel');
        panel.style.opacity = '0.4';
        panel.style.transform = 'translateY(8px)';

        setTimeout(() => {
            document.getElementById('solWatermark').textContent = d.num;
            document.getElementById('solTag').textContent = d.tag;
            document.getElementById('solTitle').innerHTML = d.title;
            document.getElementById('solDesc').textContent = d.desc;
            document.getElementById('solFootnote').textContent = d.footnote;

            // Checks
            const checksEl = document.getElementById('solChecks');
            checksEl.innerHTML = d.checks.map(c =>
                `<div class="sol-check"><span class="sol-check-tick">✓</span><span>${c}</span></div>`
            ).join('');

            // Metrics
            document.getElementById('solBefore').innerHTML = d.before;
            document.getElementById('solBeforeName').textContent = d.beforeName;
            document.getElementById('solAfter').innerHTML = d.after;
            document.getElementById('solAfterName').textContent = d.afterName;
            document.getElementById('solAfterBar').style.width = d.afterPct + '%';
            document.getElementById('solImpact').innerHTML = d.impact;
            document.getElementById('solImpactName').textContent = d.impactName;

            // Image & caption
            const img = document.getElementById('solImage');
            const cap = document.getElementById('solCaption');
            if (img) { img.src = d.img; img.alt = d.tag; }
            if (cap) cap.innerHTML = d.caption;

            panel.style.opacity = '1';
            panel.style.transform = 'translateY(0)';
        }, 160);
    }

    // Set initial transition style
    const panel = document.querySelector('.sol-detail-panel');
    panel.style.transition = 'opacity 0.25s ease, transform 0.25s ease';

    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => switchModule(i));
    });
})();


// ═══════════ FEATURE DEEP DIVES — SCROLL-DRIVEN ═══════════
(function () {
  const outer  = document.querySelector('.fe-outer');
  const sticky = document.querySelector('.fe-sticky');
  const slides = document.querySelectorAll('.fe-slide');
  const rtabs  = document.querySelectorAll('.fe-rtab');
  const fill   = document.getElementById('feRailFill');
  const nudge  = document.getElementById('feNudge');
  const N      = slides.length;
  let   cur    = -1;

  /* ── activate a slide ── */
  function activate(idx) {
    if (idx === cur) return;
    slides.forEach((s, i) => {
      s.classList.remove('fe-slide--active', 'fe-slide--exit');
      if (i === idx)   s.classList.add('fe-slide--active');
      else if (i<idx)  s.classList.add('fe-slide--exit');
    });
    rtabs.forEach((t, i) => t.classList.toggle('fe-rtab--active', i === idx));
    if (nudge) nudge.style.opacity = idx === N-1 ? '0' : '';

    /* Sync rail background to current slide's paper colour */
    const paper = slides[idx].getAttribute('data-paper') || '#f0ede8';
    const rail  = document.getElementById('feRail');
    if (rail) rail.style.background = paper === '#0c0c0c'
      ? 'rgba(20,20,20,0.97)'
      : 'rgba(240,237,232,0.97)';
    /* Also sync rail border */
    if (rail) rail.style.borderTopColor = paper === '#0c0c0c' ? '#1c1c1c' : '#ddd';

    cur = idx;
  }

  /* ── scroll handler ── */
  function onScroll() {
    const rect    = outer.getBoundingClientRect();
    const maxS    = outer.offsetHeight - sticky.offsetHeight;
    const scrolld = Math.max(0, -rect.top);
    const prog    = Math.min(1, scrolld / Math.max(1, maxS));

    if (fill) fill.style.width = (prog * 100) + '%';

    let idx = Math.floor(prog * N);
    if (idx >= N) idx = N - 1;
    activate(idx);
  }

  /* Tab click — scroll to that slide's scroll position */
  rtabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      const outerTop = outer.getBoundingClientRect().top + window.scrollY;
      const maxS     = outer.offsetHeight - sticky.offsetHeight;
      const target   = outerTop + (i / N) * maxS + 10; /* +10 to land in middle of segment */
      window.scrollTo({ top: target, behavior: 'smooth' });
    });
  });

  activate(0);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
})();


// ═══════════ WHY SAZS WINS — SCROLL ANIMATIONS ═══════════
(function () {
  const rows = document.querySelectorAll('.w-row');
  const foot = document.querySelector('.w-foot');
  const fills = document.querySelectorAll('.w-foot-fill');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const i = [...rows].indexOf(el);
      setTimeout(() => el.classList.add('w-in'), i * 80);

      if (el === foot) {
        el.classList.add('w-in');
        fills.forEach(f => setTimeout(() => { f.style.width = f.dataset.w; }, 300));
      }
      obs.unobserve(el);
    });
  }, { threshold: 0.1 });

  rows.forEach(r => obs.observe(r));
  if (foot) obs.observe(foot);
})();


// ═══════════ FAQ SECTION ═══════════
function toggle(btn){
  const item = btn.closest('.faq-item');
  const wasOpen = item.classList.contains('open');
  // close all + reset all icons
  document.querySelectorAll('.faq-item').forEach(i=>{
    i.classList.remove('open');
    i.querySelector('.faq-icon').textContent = '+';
  });
  // open clicked one if it was closed
  if(!wasOpen){
    item.classList.add('open');
    btn.querySelector('.faq-icon').textContent = '×';
  }
}

function filterFaq(cat, btn){
  document.querySelectorAll('.faq-filters button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.faq-item').forEach(item=>{
    item.style.display = (cat==='all'||item.dataset.cat===cat) ? 'block' : 'none';
  });
}