/**
 * Monitor DOM element tree for any changes
 * If a change in an element we are interested in is detected
 * we can react to it.
 * It is used mainly to detect when an element has been added to
 * the DOM and remove and/or add not ADA compliant attributes.
 */
(function (win) {
  'use strict';

  // Set this to true to enable console logging
  const DEBUG = false;

  let listeners = [],
    doc = win.document,
    MutationObserver = win.MutationObserver || win.WebKitMutationObserver,
    observer;

  function ready(selector, fn) {
    // Store the selector and callback to be monitored
    listeners.push({
      selector: selector,
      fn: fn
    });
    if (!observer) {
      // Watch for changes in the document
      observer = new MutationObserver(check);
      observer.observe(doc.documentElement, {
        childList: true,
        subtree: true
      });
    }
    // Check if the element is currently in the DOM
    check();
  }

  function check() {
    // Check the DOM for elements matching a stored selector
    for (let i = 0, len = listeners.length, listener, elements; i < len; i++) {
      listener = listeners[i];
      // Query for elements matching the specified selector
      elements = doc.querySelectorAll(listener.selector);
      for (let j = 0, jLen = elements.length, element; j < jLen; j++) {
        element = elements[j];
        // Make sure the callback isn't invoked with the
        // same element more than once
        if (!element.ready) {
          element.ready = true;
          // Invoke the callback with the element
          listener.fn.call(element, element);
        }
      }
    }
  }

  /**
   * Takes an element and removes its attributes
   * @param {*} element
   */
  function removeElementAttr(element) {
    jQuery(element).removeAttr('width')
      .removeAttr('height')
      .removeAttr('scrolling')
      .removeAttr('frameborder')
      .removeAttr('marginheight')
      .removeAttr('marginwidth')
      .removeAttr("cellspacing")
      .removeAttr("cellpadding");
  }

  /**
   * Takes a ReCaptcha iFrame and add the attributes to it
   * @param {*} recaptchaFrame
   */
  function addReCaptchaFrameAttr(recaptchaFrame) {
    jQuery(recaptchaFrame).attr("title", "Google ReCaptcha iFrame");
    jQuery(recaptchaFrame).attr("aria-label", "Google ReCaptcha iFrame");
    jQuery(recaptchaFrame).attr("style", "width:304px; height:78px; border:0px;");
  }

  /**
   * Takes a ReCaptcha textarea and add the attributes to it
   * @param {*} recaptchaTextarea
   */
  function addReCaptchaTextareaAttr(recaptchaTextarea) {
    jQuery(recaptchaTextarea).attr("title", "Google ReCaptcha Textarea");
    jQuery(recaptchaTextarea).attr("aria-label", "Google ReCaptcha Textarea");
  }

  function logger(msg) {
    DEBUG ? console.log(msg) : false;
  }

  // Expose `ready`
  win.ready = ready;

  // Expose `removeElementAttr`
  win.removeElementAttr = removeElementAttr;

  // Expose `addReCaptchaFrameAttr`
  win.addReCaptchaFrameAttr = addReCaptchaFrameAttr;

  // Expose `addReCaptchaTextareaAttr`
  win.addReCaptchaTextareaAttr = addReCaptchaTextareaAttr;

  // Expose `logger`
  win.elementMonitorLogger = logger;

})(this);

/**
 * Check if an iFrame was added
 */
ready('iframe', function (element) {
  elementMonitorLogger("IFRAME WAS ADDED");
  elementMonitorLogger(element);

  // Check if element has a parent with g-recaptcha class
  // if true, we it is the recaptcha frame and we add the
  // attributes
  if (jQuery(element).parents('.g-recaptcha').length ||
    jQuery(element).parents('.grecaptcha-badge').length ||
    jQuery(element).prev('.grecaptcha-badge').length) {
    addReCaptchaFrameAttr(element);
  }

  // If iframe does not have title attribute, use the hostname from src
  if (typeof jQuery(element).attr("title") === 'undefined' || jQuery(element).attr("title") === "") {
    if (typeof jQuery(element).attr("src") !== 'undefined' && jQuery(element).attr("src") !== "") {
      frame_src = jQuery(element).attr("src");
      let match = frame_src.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
      if (match !== null) {
        frame_hostname = match[3];
        jQuery(element).attr("title", frame_hostname);
      }
    }
  }

  removeElementAttr(element);
});

/**
 * Check if a table was added to the DOM
 */
ready('table', function (element) {
  elementMonitorLogger("TABLE WAS ADDED");
  elementMonitorLogger(element);

  removeElementAttr(element);
});

/**
 * Check if textaread was added to the DOM
 */
ready('textarea', function (element) {
  elementMonitorLogger("TEXTAREA WAS ADDED");
  elementMonitorLogger(element);

  if ((element.id).includes('recaptcha')) {
    addReCaptchaTextareaAttr(element);
  }
});

/**
 * Check if "b" tag was added to the DOM
 */
ready('b', function (element) {
  elementMonitorLogger("B TAG WAS ADDED");
  elementMonitorLogger(element);

  if ((element.id).includes('recaptcha')) {
    addReCaptchaTextareaAttr(element);
  }
  jQuery(element).replaceWith('<strong>' + $(element).html() + '</strong>')
});

/**
 * Execute when page is fully loaded
 * Scripts below are mostly for backwards compatibility
 * with IE 9 and below
 */
jQuery(window).on('load', function () {
  // How often should we check
  let intervalMS = 500; // half a second

  // How many times should we iterate before we give up
  let maxIntervalIterations = 10;

  // Keep track on how many times we run
  let iFrameIterations = 0,
    tableIterations = 0,
    recaptchaIterations = 0;

  /**
   * Check iFrames on load
   */
  function removeIframeAttrInterval() {
    // increment the counter
    iFrameIterations++;

    elementMonitorLogger("Checking for iFrames (interval)");

    if (jQuery('iframe').length > 0) {
      jQuery('iframe').each(function (index, element) {
        removeElementAttr(element);
      })
      clearInterval(checkFrames);
    } else if (iFrameIterations >= maxIntervalIterations) {
      // in case there are no iFrames, stop after we reach maxIntervalIterations
      clearInterval(checkFrames);
    }
  }
  let checkFrames = setInterval(removeIframeAttrInterval, intervalMS)

  /**
   * Check tables on load
   */
  function removeTableAttrInterval() {
    // increment the counter
    tableIterations++;

    elementMonitorLogger("Checking for tables (interval)");

    if (jQuery('table').length > 0) {
      jQuery('table').each(function (index, element) {
        removeElementAttr(element);
      })
      clearInterval(checkTables);
    } else if (tableIterations >= maxIntervalIterations) {
      // in case there are no tables, stop after we reach maxIntervalIterations
      clearInterval(checkTables);
    }
  }
  let checkTables = setInterval(removeTableAttrInterval, intervalMS)

  /**
   * Add Google ReCaptcha iFrame attributes
   */
  function addReCaptchaFrameAttrInterval() {
    recaptchaIterations++;

    if (jQuery(".g-recaptcha iframe").length > 0) {
      addReCaptchaFrameAttr(jQuery(".g-recaptcha iframe"));
      clearInterval(checkReCaptchaFrame);
    } else if (jQuery(".grecaptcha-badge iframe").length > 0) {
      addReCaptchaFrameAttr(jQuery(".grecaptcha-badge iframe"));
      clearInterval(checkReCaptchaFrame);
    } else if (jQuery(".grecaptcha-badge").next('iframe').length > 0) {
      addReCaptchaFrameAttr(jQuery(".grecaptcha-badge").next('iframe')[0]);
      clearInterval(checkReCaptchaFrame);
    } else if (recaptchaIterations >= maxIntervalIterations) {
      // in case there are no recaptcha iframe, stop after we reach maxIntervalIterations
      clearInterval(checkReCaptchaFrame);
    }
  }
  let checkReCaptchaFrame = setInterval(addReCaptchaFrameAttrInterval, intervalMS)

  /**
   * Add Google ReCaptcha various elements missing attributes
   */
  function addReCaptchaAttr() {
    jQuery("#g-recaptcha-response").attr("aria-label", "Google ReCaptcha Text Box");
    jQuery("#g-recaptcha-response").attr("title", "Google ReCaptcha Response");
    jQuery("[name='g-recaptcha-response']").attr("aria-label", "Google ReCaptcha Textarea");
    jQuery("[name='g-recaptcha-response']").attr("title", "Google ReCaptcha Textarea");
    jQuery("[name='g-recaptcha-hidden']").attr("aria-label", "Google ReCaptcha Input field");
  }
  addReCaptchaAttr();
})