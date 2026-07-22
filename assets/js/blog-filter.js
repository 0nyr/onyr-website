/*
 * blog-filter.js: static, dependency-free blog filtering.
 *
 * Filters the rendered post list by tag (OR), year, month, and a free-text
 * query over titles and tags. All state lives in the URL hash
 * (e.g. #tag=research,art&year=2026&month=09&q=nixos) so filtered views are
 * shareable and deep-linkable. With JavaScript disabled, the full list simply
 * shows, so nothing is lost.
 */
(function () {
  'use strict';

  var list = document.getElementById('blog-list');
  if (!list) return;

  var items = Array.prototype.slice.call(list.querySelectorAll('.blog-item'));
  var tagButtons = Array.prototype.slice.call(document.querySelectorAll('#blog-tags .tag-chip'));
  var yearSel = document.getElementById('blog-year');
  var monthSel = document.getElementById('blog-month');
  var searchInput = document.getElementById('blog-search');
  var clearBtn = document.getElementById('blog-clear');
  var countEl = document.getElementById('blog-count');
  var emptyEl = document.getElementById('blog-empty');

  var state = { tags: [], year: '', month: '', q: '' };

  function parseHash() {
    var s = { tags: [], year: '', month: '', q: '' };
    var h = (location.hash || '').replace(/^#/, '');
    if (!h) return s;
    h.split('&').forEach(function (pair) {
      var idx = pair.indexOf('=');
      if (idx === -1) return;
      var key = decodeURIComponent(pair.slice(0, idx));
      var val = decodeURIComponent(pair.slice(idx + 1));
      if (key === 'tag' || key === 'tags') {
        val.split(',').forEach(function (t) {
          t = t.trim().toLowerCase();
          if (t && s.tags.indexOf(t) === -1) s.tags.push(t);
        });
      } else if (key === 'year') {
        s.year = val.trim();
      } else if (key === 'month') {
        s.month = val.trim();
      } else if (key === 'q') {
        s.q = val;
      }
    });
    return s;
  }

  function buildHash() {
    var parts = [];
    if (state.tags.length) parts.push('tag=' + state.tags.map(encodeURIComponent).join(','));
    if (state.year) parts.push('year=' + encodeURIComponent(state.year));
    if (state.month) parts.push('month=' + encodeURIComponent(state.month));
    if (state.q) parts.push('q=' + encodeURIComponent(state.q));
    return parts.length ? '#' + parts.join('&') : '';
  }

  function writeHash() {
    var newHash = buildHash();
    if (newHash === (location.hash || '')) return;
    if (history.replaceState) {
      history.replaceState(null, '', location.pathname + location.search + newHash);
    } else {
      location.hash = newHash;
    }
  }

  function itemTags(item) {
    return (item.getAttribute('data-tags') || '').trim().split(/\s+/).filter(Boolean);
  }

  function hasOption(sel, val) {
    return Array.prototype.some.call(sel.options, function (o) { return o.value === val; });
  }

  function matches(item) {
    if (state.tags.length) {
      var it = itemTags(item);
      var hit = state.tags.some(function (t) { return it.indexOf(t) !== -1; });
      if (!hit) return false;
    }
    if (state.year && item.getAttribute('data-year') !== state.year) return false;
    if (state.month && item.getAttribute('data-month') !== state.month) return false;
    if (state.q) {
      var q = state.q.toLowerCase();
      var title = item.getAttribute('data-title') || '';
      var tags = item.getAttribute('data-tags') || '';
      if (title.indexOf(q) === -1 && tags.indexOf(q) === -1) return false;
    }
    return true;
  }

  function syncControls() {
    tagButtons.forEach(function (btn) {
      var active = state.tags.indexOf(btn.getAttribute('data-tag')) !== -1;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.classList.toggle('is-active', active);
    });
    if (yearSel) yearSel.value = state.year;
    if (monthSel) monthSel.value = state.month;
    if (searchInput && searchInput.value !== state.q) searchInput.value = state.q;
  }

  function apply() {
    // Ignore filter values with no matching control option (e.g. a stale or tampered URL).
    if (yearSel && state.year && !hasOption(yearSel, state.year)) state.year = '';
    if (monthSel && state.month && !hasOption(monthSel, state.month)) state.month = '';
    var visible = 0;
    items.forEach(function (item) {
      var show = matches(item);
      item.classList.toggle('is-hidden', !show);
      if (show) visible++;
    });
    if (emptyEl) emptyEl.classList.toggle('is-hidden', visible !== 0);
    if (countEl) {
      countEl.textContent = visible === items.length
        ? items.length + ' posts'
        : visible + ' of ' + items.length + ' posts';
    }
    syncControls();
  }

  function toggleTag(tag) {
    var i = state.tags.indexOf(tag);
    if (i === -1) state.tags.push(tag);
    else state.tags.splice(i, 1);
  }

  tagButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      toggleTag(btn.getAttribute('data-tag'));
      writeHash();
      apply();
    });
  });

  if (yearSel) yearSel.addEventListener('change', function () { state.year = yearSel.value; writeHash(); apply(); });
  if (monthSel) monthSel.addEventListener('change', function () { state.month = monthSel.value; writeHash(); apply(); });
  if (searchInput) searchInput.addEventListener('input', function () { state.q = searchInput.value; writeHash(); apply(); });
  if (clearBtn) clearBtn.addEventListener('click', function () {
    state = { tags: [], year: '', month: '', q: '' };
    writeHash();
    apply();
  });

  // React to hash changes from outside the filter bar (nav links, inline tag chips).
  window.addEventListener('hashchange', function () {
    state = parseHash();
    apply();
  });

  // Apply any deep-linked filter from the URL on load.
  state = parseHash();
  apply();
})();
