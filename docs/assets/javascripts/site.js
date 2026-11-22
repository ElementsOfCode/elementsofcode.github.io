/* Elements of Code: tiny site script.
   1. Loads self-hosted KaTeX only on pages that contain math.
   2. Sizes embedded interactives to their content. */
(function () {
  var base = new URL("../katex/", document.currentScript.src).href;
  var loading = null;

  function load(tag, attrs) {
    return new Promise(function (resolve, reject) {
      var el = document.createElement(tag);
      for (var k in attrs) el[k] = attrs[k];
      el.onload = resolve;
      el.onerror = reject;
      document.head.appendChild(el);
    });
  }

  function katexReady() {
    if (!loading) {
      loading = Promise.all([
        load("link", { rel: "stylesheet", href: base + "katex.min.css" }),
        load("script", { src: base + "katex.min.js" })
      ]).then(function () {
        return load("script", { src: base + "contrib/auto-render.min.js" });
      });
    }
    return loading;
  }

  function renderMath() {
    var blocks = document.querySelectorAll(".arithmatex");
    if (!blocks.length) return;
    katexReady().then(function () {
      blocks.forEach(function (el) {
        renderMathInElement(el, {
          delimiters: [
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
          ],
          throwOnError: false
        });
      });
    });
  }

  function fit(frame) {
    try {
      var doc = frame.contentDocument;
      if (doc && doc.documentElement) {
        frame.style.height = doc.documentElement.scrollHeight + "px";
      }
    } catch (e) { /* cross-origin: keep the CSS height */ }
  }

  function sizeEmbeds() {
    document.querySelectorAll("iframe.embed-auto").forEach(function (frame) {
      frame.addEventListener("load", function () {
        fit(frame);
        if (window.ResizeObserver && frame.contentDocument) {
          new ResizeObserver(function () { fit(frame); })
            .observe(frame.contentDocument.documentElement);
        }
      });
      fit(frame);
    });
  }

  function init() { renderMath(); sizeEmbeds(); }

  if (window.document$) {
    window.document$.subscribe(init);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
