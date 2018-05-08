/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(4), __webpack_require__(5), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function($) {

  /**
   * Generate an indented list of links from a nav. Meant for use with panel().
   * @return {jQuery} jQuery object.
   */
  $.fn.navList = function() {

    var $this = $(this);
    $a = $this.find('a'),
      b = [];

    $a.each(function() {

      var $this = $(this),
        indent = Math.max(0, $this.parents('li').length - 1),
        href = $this.attr('href'),
        target = $this.attr('target');

      b.push(
        '<a ' +
        'class="link depth-' + indent + '"' +
        ((typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
        ((typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
        '>' +
        '<span class="indent-' + indent + '"></span>' +
        $this.text() +
        '</a>'
      );

    });

    return b.join('');

  };

  /**
   * Panel-ify an element.
   * @param {object} userConfig User config.
   * @return {jQuery} jQuery object.
   */
  $.fn.panel = function(userConfig) {

    // No elements?
    if (this.length == 0)
      return $this;

    // Multiple elements?
    if (this.length > 1) {

      for (var i = 0; i < this.length; i++)
        $(this[i]).panel(userConfig);

      return $this;

    }

    // Vars.
    var $this = $(this),
      $body = $('body'),
      $window = $(window),
      id = $this.attr('id'),
      config;

    // Config.
    config = $.extend({

      // Delay.
      delay: 0,

      // Hide panel on link click.
      hideOnClick: false,

      // Hide panel on escape keypress.
      hideOnEscape: false,

      // Hide panel on swipe.
      hideOnSwipe: false,

      // Reset scroll position on hide.
      resetScroll: false,

      // Reset forms on hide.
      resetForms: false,

      // Side of viewport the panel will appear.
      side: null,

      // Target element for "class".
      target: $this,

      // Class to toggle.
      visibleClass: 'visible'

    }, userConfig);

    // Expand "target" if it's not a jQuery object already.
    if (typeof config.target != 'jQuery')
      config.target = $(config.target);

    // Panel.

    // Methods.
    $this._hide = function(event) {

      // Already hidden? Bail.
      if (!config.target.hasClass(config.visibleClass))
        return;

      // If an event was provided, cancel it.
      if (event) {

        event.preventDefault();
        event.stopPropagation();

      }

      // Hide.
      config.target.removeClass(config.visibleClass);

      // Post-hide stuff.
      window.setTimeout(function() {

        // Reset scroll position.
        if (config.resetScroll)
          $this.scrollTop(0);

        // Reset forms.
        if (config.resetForms)
          $this.find('form').each(function() {
            this.reset();
          });

      }, config.delay);

    };

    // Vendor fixes.
    $this
      .css('-ms-overflow-style', '-ms-autohiding-scrollbar')
      .css('-webkit-overflow-scrolling', 'touch');

    // Hide on click.
    if (config.hideOnClick) {

      $this.find('a')
        .css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');

      $this
        .on('click', 'a', function(event) {

          var $a = $(this),
            href = $a.attr('href'),
            target = $a.attr('target');

          if (!href || href == '#' || href == '' || href == '#' + id)
            return;

          // Cancel original event.
          event.preventDefault();
          event.stopPropagation();

          // Hide panel.
          $this._hide();

          // Redirect to href.
          window.setTimeout(function() {

            if (target == '_blank')
              window.open(href);
            else
              window.location.href = href;

          }, config.delay + 10);

        });

    }

    // Event: Touch stuff.
    $this.on('touchstart', function(event) {

      $this.touchPosX = event.originalEvent.touches[0].pageX;
      $this.touchPosY = event.originalEvent.touches[0].pageY;

    })

    $this.on('touchmove', function(event) {

      if ($this.touchPosX === null ||
        $this.touchPosY === null)
        return;

      var diffX = $this.touchPosX - event.originalEvent.touches[0].pageX,
        diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,
        th = $this.outerHeight(),
        ts = ($this.get(0).scrollHeight - $this.scrollTop());

      // Hide on swipe?
      if (config.hideOnSwipe) {

        var result = false,
          boundary = 20,
          delta = 50;

        switch (config.side) {

          case 'left':
            result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta);
            break;

          case 'right':
            result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta));
            break;

          case 'top':
            result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY > delta);
            break;

          case 'bottom':
            result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY < (-1 * delta));
            break;

          default:
            break;

        }

        if (result) {

          $this.touchPosX = null;
          $this.touchPosY = null;
          $this._hide();

          return false;

        }

      }

      // Prevent vertical scrolling past the top or bottom.
      if (($this.scrollTop() < 0 && diffY < 0) ||
        (ts > (th - 2) && ts < (th + 2) && diffY > 0)) {

        event.preventDefault();
        event.stopPropagation();

      }

    });

    // Event: Prevent certain events inside the panel from bubbling.
    $this.on('click touchend touchstart touchmove', function(event) {
      event.stopPropagation();
    });

    // Event: Hide panel if a child anchor tag pointing to its ID is clicked.
    $this.on('click', 'a[href="#' + id + '"]', function(event) {

      event.preventDefault();
      event.stopPropagation();

      config.target.removeClass(config.visibleClass);

    });

    // Body.

    // Event: Hide panel on body click/tap.
    $body.on('click touchend', function(event) {
      $this._hide(event);
    });

    // Event: Toggle.
    $body.on('click', 'a[href="#' + id + '"]', function(event) {

      event.preventDefault();
      event.stopPropagation();

      config.target.toggleClass(config.visibleClass);

    });

    // Window.

    // Event: Hide on ESC.
    if (config.hideOnEscape)
      $window.on('keydown', function(event) {

        if (event.keyCode == 27)
          $this._hide(event);

      });

    return $this;

  };

  /**
   * Apply "placeholder" attribute polyfill to one or more forms.
   * @return {jQuery} jQuery object.
   */
  $.fn.placeholder = function() {

    // Browser natively supports placeholders? Bail.
    if (typeof(document.createElement('input')).placeholder != 'undefined')
      return $(this);

    // No elements?
    if (this.length == 0)
      return $this;

    // Multiple elements?
    if (this.length > 1) {

      for (var i = 0; i < this.length; i++)
        $(this[i]).placeholder();

      return $this;

    }

    // Vars.
    var $this = $(this);

    // Text, TextArea.
    $this.find('input[type=text],textarea')
      .each(function() {

        var i = $(this);

        if (i.val() == '' ||
          i.val() == i.attr('placeholder'))
          i
          .addClass('polyfill-placeholder')
          .val(i.attr('placeholder'));

      })
      .on('blur', function() {

        var i = $(this);

        if (i.attr('name').match(/-polyfill-field$/))
          return;

        if (i.val() == '')
          i
          .addClass('polyfill-placeholder')
          .val(i.attr('placeholder'));

      })
      .on('focus', function() {

        var i = $(this);

        if (i.attr('name').match(/-polyfill-field$/))
          return;

        if (i.val() == i.attr('placeholder'))
          i
          .removeClass('polyfill-placeholder')
          .val('');

      });

    // Password.
    $this.find('input[type=password]')
      .each(function() {

        var i = $(this);
        var x = $(
          $('<div>')
          .append(i.clone())
          .remove()
          .html()
          .replace(/type="password"/i, 'type="text"')
          .replace(/type=password/i, 'type=text')
        );

        if (i.attr('id') != '')
          x.attr('id', i.attr('id') + '-polyfill-field');

        if (i.attr('name') != '')
          x.attr('name', i.attr('name') + '-polyfill-field');

        x.addClass('polyfill-placeholder')
          .val(x.attr('placeholder')).insertAfter(i);

        if (i.val() == '')
          i.hide();
        else
          x.hide();

        i
          .on('blur', function(event) {

            event.preventDefault();

            var x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

            if (i.val() == '') {

              i.hide();
              x.show();

            }

          });

        x
          .on('focus', function(event) {

            event.preventDefault();

            var i = x.parent().find('input[name=' + x.attr('name').replace('-polyfill-field', '') + ']');

            x.hide();

            i
              .show()
              .focus();

          })
          .on('keypress', function(event) {

            event.preventDefault();
            x.val('');

          });

      });

    // Events.
    $this
      .on('submit', function() {

        $this.find('input[type=text],input[type=password],textarea')
          .each(function(event) {

            var i = $(this);

            if (i.attr('name').match(/-polyfill-field$/))
              i.attr('name', '');

            if (i.val() == i.attr('placeholder')) {

              i.removeClass('polyfill-placeholder');
              i.val('');

            }

          });

      })
      .on('reset', function(event) {

        event.preventDefault();

        $this.find('select')
          .val($('option:first').val());

        $this.find('input,textarea')
          .each(function() {

            var i = $(this),
              x;

            i.removeClass('polyfill-placeholder');

            switch (this.type) {

              case 'submit':
              case 'reset':
                break;

              case 'password':
                i.val(i.attr('defaultValue'));

                x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

                if (i.val() == '') {
                  i.hide();
                  x.show();
                } else {
                  i.show();
                  x.hide();
                }

                break;

              case 'checkbox':
              case 'radio':
                i.attr('checked', i.attr('defaultValue'));
                break;

              case 'text':
              case 'textarea':
                i.val(i.attr('defaultValue'));

                if (i.val() == '') {
                  i.addClass('polyfill-placeholder');
                  i.val(i.attr('placeholder'));
                }

                break;

              default:
                i.val(i.attr('defaultValue'));
                break;

            }
          });

      });

    return $this;

  };

  /**
   * Moves elements to/from the first positions of their respective parents.
   * @param {jQuery} $elements Elements (or selector) to move.
   * @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
   */
  $.prioritize = function($elements, condition) {

    var key = '__prioritize';

    // Expand $elements if it's not already a jQuery object.
    if (typeof $elements != 'jQuery')
      $elements = $($elements);

    // Step through elements.
    $elements.each(function() {

      var $e = $(this),
        $p,
        $parent = $e.parent();

      // No parent? Bail.
      if ($parent.length == 0)
        return;

      // Not moved? Move it.
      if (!$e.data(key)) {

        // Condition is false? Bail.
        if (!condition)
          return;

        // Get placeholder (which will serve as our point of reference for when this element needs to move back).
        $p = $e.prev();

        // Couldn't find anything? Means this element's already at the top, so bail.
        if ($p.length == 0)
          return;

        // Move element to top of parent.
        $e.prependTo($parent);

        // Mark element as moved.
        $e.data(key, $p);

      }

      // Moved already?
      else {

        // Condition is true? Bail.
        if (condition)
          return;

        $p = $e.data(key);

        // Move element back to its original location (using our placeholder).
        $e.insertAfter($p);

        // Unmark element as moved.
        $e.removeData(key);

      }

    });

  };

})(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*
	Dimension by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

  $(function() {

    var $window = $(window),
      $body = $('body'),
      $wrapper = $('#wrapper'),
      $header = $('#header'),
      $footer = $('#footer'),
      $main = $('#main'),
      $main_articles = $main.children('article');

    // Fix: Placeholder polyfill.
    $('form').placeholder();

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/ false || !!document.documentMode
    if (isIE) {
      console.log('we are on IE. Doing something different')

      var flexboxFixTimeoutId;

      $window.on('resize.flexbox-fix', function() {

        clearTimeout(flexboxFixTimeoutId);

        flexboxFixTimeoutId = setTimeout(function() {

          if ($wrapper.prop('scrollHeight') > $window.height())
            $wrapper.css('height', 'auto');
          else
            $wrapper.css('height', '100vh');

        }, 250);

      }).triggerHandler('resize.flexbox-fix');

    }

    // Nav.
    var $nav = $header.children('nav'),
      $nav_li = $nav.find('li');

    // Add "middle" alignment classes if we're dealing with an even number of items.
    if ($nav_li.length % 2 == 0) {

      $nav.addClass('use-middle');
      $nav_li.eq(($nav_li.length / 2)).addClass('is-middle');

    }

    // Main.
    var delay = 325,
      locked = false;

    // Methods.
    $main._show = function(id, initial) {

      var $article = $main_articles.filter('#' + id);

      // No such article? Bail.
      if ($article.length == 0)
        return;

      // Handle lock.

      // Already locked? Speed through "show" steps w/o delays.
      if (locked || (typeof initial != 'undefined' && initial === true)) {

        // Mark as switching.
        $body.addClass('is-switching');

        // Mark as visible.
        $body.addClass('is-article-visible');

        // Deactivate all articles (just in case one's already active).
        $main_articles.removeClass('active');

        // Hide header, footer.
        $header.hide();
        $footer.hide();

        // Show main, article.
        $main.show();
        $article.show();

        // Activate article.
        $article.addClass('active');

        // Unlock.
        locked = false;

        // Unmark as switching.
        setTimeout(function() {
          $body.removeClass('is-switching');
        }, (initial ? 1000 : 0));

        return;

      }

      // Lock.
      locked = true;

      // Article already visible? Just swap articles.
      if ($body.hasClass('is-article-visible')) {

        // Deactivate current article.
        var $currentArticle = $main_articles.filter('.active');

        $currentArticle.removeClass('active');

        // Show article.
        setTimeout(function() {

          // Hide current article.
          $currentArticle.hide();

          // Show article.
          $article.show();

          // Activate article.
          setTimeout(function() {

            $article.addClass('active');

            // Window stuff.
            $window
              .scrollTop(0)
              .triggerHandler('resize.flexbox-fix');

            // Unlock.
            setTimeout(function() {
              locked = false;
            }, delay);

          }, 25);

        }, delay);

      }

      // Otherwise, handle as normal.
      else {

        // Mark as visible.
        $body
          .addClass('is-article-visible');

        // Show article.
        setTimeout(function() {

          // Hide header, footer.
          $header.hide();
          $footer.hide();

          // Show main, article.
          $main.show();
          $article.show();

          // Activate article.
          setTimeout(function() {

            $article.addClass('active');

            // Window stuff.
            $window
              .scrollTop(0)
              .triggerHandler('resize.flexbox-fix');

            // Unlock.
            setTimeout(function() {
              locked = false;
            }, delay);

          }, 25);

        }, delay);

      }

    };

    $main._hide = function(addState) {

      var $article = $main_articles.filter('.active');

      // Article not visible? Bail.
      if (!$body.hasClass('is-article-visible'))
        return;

      // Add state?
      if (typeof addState != 'undefined' &&
        addState === true)
        history.pushState(null, null, '#');

      // Handle lock.

      // Already locked? Speed through "hide" steps w/o delays.
      if (locked) {

        // Mark as switching.
        $body.addClass('is-switching');

        // Deactivate article.
        $article.removeClass('active');

        // Hide article, main.
        $article.hide();
        $main.hide();

        // Show footer, header.
        $footer.show();
        $header.show();

        // Unmark as visible.
        $body.removeClass('is-article-visible');

        // Unlock.
        locked = false;

        // Unmark as switching.
        $body.removeClass('is-switching');

        // Window stuff.
        $window
          .scrollTop(0)
          .triggerHandler('resize.flexbox-fix');

        return;

      }

      // Lock.
      locked = true;

      // Deactivate article.
      $article.removeClass('active');

      // Hide article.
      setTimeout(function() {

        // Hide article, main.
        $article.hide();
        $main.hide();

        // Show footer, header.
        $footer.show();
        $header.show();

        // Unmark as visible.
        setTimeout(function() {

          $body.removeClass('is-article-visible');

          // Window stuff.
          $window
            .scrollTop(0)
            .triggerHandler('resize.flexbox-fix');

          // Unlock.
          setTimeout(function() {
            locked = false;
          }, delay);

        }, 25);

      }, delay);


    };

    // Articles.
    $main_articles.each(function() {

      var $this = $(this);

      // Close.
      $('<div class="close">Close</div>')
        .appendTo($this)
        .on('click', function() {
          location.hash = '';
        });

      // Prevent clicks from inside article from bubbling.
      $this.on('click', function(event) {
        event.stopPropagation();
      });

    });

    // Events.
    $body.on('click', function(event) {

      // Article visible? Hide.
      if ($body.hasClass('is-article-visible'))
        $main._hide(true);

    });

    $window.on('keyup', function(event) {

      switch (event.keyCode) {

        case 27:

          // Article visible? Hide.
          if ($body.hasClass('is-article-visible'))
            $main._hide(true);

          break;

        default:
          break;

      }

    });

    $window.on('hashchange', function(event) {

      // Empty hash?
      if (location.hash == '' ||
        location.hash == '#') {

        // Prevent default.
        event.preventDefault();
        event.stopPropagation();

        // Hide.
        $main._hide();

      }

      // Otherwise, check for a matching article.
      else if ($main_articles.filter(location.hash).length > 0) {

        // Prevent default.
        event.preventDefault();
        event.stopPropagation();

        // Show article.
        $main._show(location.hash.substr(1));

      }

    });

    // Scroll restoration.
    // This prevents the page from scrolling back to the top on a hashchange.
    if ('scrollRestoration' in history)
      history.scrollRestoration = 'manual';
    else {

      var oldScrollPos = 0,
        scrollPos = 0,
        $htmlbody = $('html,body');

      $window
        .on('scroll', function() {

          oldScrollPos = scrollPos;
          scrollPos = $htmlbody.scrollTop();

        })
        .on('hashchange', function() {
          $window.scrollTop(oldScrollPos);
        });

    }

    // Initialize.

    // Hide main, articles.
    $main.hide();
    $main_articles.hide();

    // Initial article.
    if (location.hash != '' &&
      location.hash != '#')
      $window.on('load', function() {
        $main._show(location.hash.substr(1), true);
      });

  });
  WebFontConfig = {
    google: {
      families: ['Source Code Pro:400,700']
    }
  };
  (function() {
    var wf = document.createElement('script');
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

})(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    var loadImage = __webpack_require__(6);
    var wh = $(window).height() || 0;
    var ww = $(window).width() || 0;
    var setImage = function (image, width, height) {
        return "https://res.cloudinary.com/runar-kristoffersen/image/upload/w_" + width + ",h_" + height + ",dpr_" + window.devicePixelRatio + ",c_fill,q_auto/v1511014038/" + image;
    };
    var setBackground = function (element, image) {
        $(element).addClass('is-loading');
        loadImage(image)
            .then(function () {
            $(element).css('background-image', 'url(' + image + ')');
            $(element).removeClass('is-loading');
        });
    };
    var roundOff = function (n, roundTo) {
        if (roundTo === void 0) { roundTo = 20; }
        return Math.round(n / roundTo) * roundTo;
    };
    setBackground('#bg', setImage('bronnoy.jpg', ww, wh));
    window.onresize = function () {
        var new_wh = roundOff($(window).height() || 0);
        var new_ww = roundOff($(window).width() || 0);
        var distance = (new_wh + new_ww) / 2 - (wh + ww) / 2;
        if (distance > 100) {
            wh = new_wh;
            ww = new_ww;
            setBackground('#bg', setImage('bronnoy.jpg', ww, wh));
        }
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! npm.im/image-promise 5.0.1 */


function load(image) {
	if (!image) {
		return Promise.reject();
	} else if (typeof image === 'string') {
		/* Create a <img> from a string */
		var src = image;
		image = new Image();
		image.src = src;
	} else if (image.length !== undefined) {
		/* Treat as multiple images */

		// Momentarily ignore errors
		var reflected = [].map.call(image, function (img) { return load(img).catch(function (err) { return err; }); });

		return Promise.all(reflected).then(function (results) {
			var loaded = results.filter(function (x) { return x.naturalWidth; });
			if (loaded.length === results.length) {
				return loaded;
			}
			return Promise.reject({
				loaded: loaded,
				errored: results.filter(function (x) { return !x.naturalWidth; })
			});
		});
	} else if (image.tagName !== 'IMG') {
		return Promise.reject();
	}

	var promise = new Promise(function (resolve, reject) {
		if (image.naturalWidth) {
			// If the browser can determine the naturalWidth the
			// image is already loaded successfully
			resolve(image);
		} else if (image.complete) {
			// If the image is complete but the naturalWidth is 0px
			// it is probably broken
			reject(image);
		} else {
			image.addEventListener('load', fullfill);
			image.addEventListener('error', fullfill);
		}
		function fullfill() {
			if (image.naturalWidth) {
				resolve(image);
			} else {
				reject(image);
			}
			image.removeEventListener('load', fullfill);
			image.removeEventListener('error', fullfill);
		}
	});
	promise.image = image;
	return promise;
}

module.exports = load;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    $('body').addClass('is-loading');
    window.setTimeout(function () {
        $('body').removeClass('is-loading');
    }, 20);
    window.addEventListener('load', function () {
    });
    var dpr = window.devicePixelRatio;
    var reptiles_small = document.getElementById("reptiles_small");
    reptiles_small.src = "https://res.cloudinary.com/reptilesofnorway/image/upload/c_scale,dpr_" + dpr + ",f_auto,q_auto,w_150/reptil_auksjonen_logo";
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);