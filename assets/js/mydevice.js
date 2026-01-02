// --- Tabs
var tabslinks = document.querySelectorAll(".tabs-menu-link")
var tabscontents = document.querySelectorAll(".tabs-content-item")

for (index = 0; index < tabslinks.length; index++) {
  var link = tabslinks[index]
  link.addEventListener("click", function (e) {
    e.preventDefault()

    var href, current, other

    for (var i = 0; i < tabslinks.length; i++) {
      var other = tabslinks[i]
      other.classList.remove("is-active")
    }
    this.classList.add("is-active")

    href = this.getAttribute("href")
    if (href) current = document.querySelector(href)

    for (var i = 0; i < tabscontents.length; i++) {
      var other = tabscontents[i]
      other.setAttribute("aria-hidden", "true")
      other.classList.add("display-n")
    }

    if (current) {
      current.setAttribute("aria-hidden", "false")
      current.classList.remove("display-n")
      current.classList.add("is-active")
    }
  })
}

/*!
 * res 0.2.0-0+201403312143
 * https://github.com/ryanve/res
 * MIT License, 2014 Ryan Van Etten
 */
!(function (a, b, c) {
  "undefined" != typeof module && module.exports
    ? (module.exports = c())
    : (a[b] = c())
})(this, "res", function () {
  function a(a) {
    return null == a
      ? m
      : a !== a
        ? !1
        : l
          ? l >= a
          : k(
              [
                ["min--moz-device-pixel-ratio:", a],
                ["min-resolution:", a * d, "dpi"],
              ],
              j,
            )
  }

  function b(b) {
    return null == b ? a() * d : a(b / d)
  }

  function c(b) {
    return null == b ? a() / e : a(b * e)
  }
  var d = 96,
    e = 2.54 / d,
    f = "undefined" != typeof window && window,
    g = "undefined" != typeof screen && screen,
    h = [].join,
    i = f.matchMedia,
    j = i
      ? function () {
          return !!i.call(f, "(" + h.call(arguments, "") + ")").matches
        }
      : function () {
          return !1
        },
    k = function (a, b, c) {
      for (var d = 0, e = a.length; e > d; ) if (b.apply(c, a[d++])) return !0
      return !1
    },
    l =
      +f.devicePixelRatio || Math.sqrt(g.logicalXDPI * g.logicalYDPI) / d || 0,
    m =
      l || !i
        ? l
        : (function (a) {
            for (var b, c = 41; c-- && !a((b = c / 20)); );
            return b
          })(a)
  return {
    dppx: a,
    dpcm: c,
    dpi: b,
  }
})
/*!
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */
!(function (a, b, c) {
  "undefined" != typeof module && module.exports
    ? (module.exports = c())
    : (a[b] = c())
})(this, "verge", function () {
  function a() {
    return {
      width: k(),
      height: l(),
    }
  }

  function b(a, b) {
    var c = {}
    return (
      (b = +b || 0),
      (c.width = (c.right = a.right + b) - (c.left = a.left - b)),
      (c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b)),
      c
    )
  }

  function c(a, c) {
    return (
      (a = a && !a.nodeType ? a[0] : a),
      a && 1 === a.nodeType ? b(a.getBoundingClientRect(), c) : !1
    )
  }

  function d(b) {
    b = null == b ? a() : 1 === b.nodeType ? c(b) : b
    var d = b.height,
      e = b.width
    return (
      (d = "function" == typeof d ? d.call(b) : d),
      (e = "function" == typeof e ? e.call(b) : e),
      e / d
    )
  }
  var e = {},
    f = "undefined" != typeof window && window,
    g = "undefined" != typeof document && document,
    h = g && g.documentElement,
    i = f.matchMedia || f.msMatchMedia,
    j = i
      ? function (a) {
          return !!i.call(f, a).matches
        }
      : function () {
          return !1
        },
    k = (e.viewportW = function () {
      var a = h.clientWidth,
        b = f.innerWidth
      return b > a ? b : a
    }),
    l = (e.viewportH = function () {
      var a = h.clientHeight,
        b = f.innerHeight
      return b > a ? b : a
    })
  return (
    (e.mq = j),
    (e.matchMedia = i
      ? function () {
          return i.apply(f, arguments)
        }
      : function () {
          return {}
        }),
    (e.viewport = a),
    (e.scrollX = function () {
      return f.pageXOffset || h.scrollLeft
    }),
    (e.scrollY = function () {
      return f.pageYOffset || h.scrollTop
    }),
    (e.rectangle = c),
    (e.aspect = d),
    (e.inX = function (a, b) {
      var d = c(a, b)
      return !!d && d.right >= 0 && d.left <= k()
    }),
    (e.inY = function (a, b) {
      var d = c(a, b)
      return !!d && d.bottom >= 0 && d.top <= l()
    }),
    (e.inViewport = function (a, b) {
      var d = c(a, b)
      return (
        !!d && d.bottom >= 0 && d.right >= 0 && d.top <= l() && d.left <= k()
      )
    }),
    e
  )
})

// --- Root font size
var rfsstyle = parseFloat(getComputedStyle(document.documentElement).fontSize)
document.getElementById("rfs").innerHTML =
  "Root font size <em>" + rfsstyle + "px</em>"

// Pointer events
if (window.navigator.pointerEnabled) {
  document.getElementById("pointerevents").className = "supported"
}

// screen.width
var sw = screen.width
var sh = screen.height
// --- Screen and Window size
document.getElementById("screensize").innerHTML =
  "Taille d'écran <em>" + sw + " x " + sh + "</em>"

var ww = window.innerWidth
var wh = window.innerHeight
document.getElementById("windowsize").innerHTML =
  "Taille de fenêtre <em>" + ww + " x " + wh + "</em>"

// resolution
var jsdpi = res.dpi()
jsdpi = parseFloat(jsdpi.toFixed(2))
document.getElementById("jsdpi").innerHTML =
  "Resolution (dpi) <em>" + jsdpi + "dpi</em>"
var jsdppx = res.dppx()
jsdppx = parseFloat(jsdppx.toFixed(2))
document.getElementById("jsdppx").innerHTML =
  "Resolution (dppx) <em>" + jsdppx + "dppx</em>"
var jsdpcm = res.dpcm()
jsdpcm = parseFloat(jsdpcm.toFixed(2))
document.getElementById("jsdpcm").innerHTML =
  "Resolution (dpcm) <em>" + jsdpcm + "dpcm</em>"

// aspect ratio
var deviceaspectratio = verge.aspect(screen)
deviceaspectratio = parseFloat(deviceaspectratio.toFixed(2))
document.getElementById("deviceaspectratio").innerHTML =
  "Device Aspect-Ratio <em>" + deviceaspectratio + "</em>"

// viewport width
var viewportwidth = verge.viewportW()
document.getElementById("viewportwidth").innerHTML =
  "<em>" + viewportwidth + "px</em>"

// viewport width em
var viewportwidthem = viewportwidth / rfsstyle
viewportwidthem = viewportwidthem.toFixed(0)
document.getElementById("viewportwidthem").innerHTML =
  "<em>" + viewportwidthem + "em</em>"

// addEventlistener on resize
window.addEventListener("resize", function () {
  displaySafeAreas()
  // Window size
  var ww = window.innerWidth
  var wh = window.innerHeight
  document.getElementById("windowsize").innerHTML =
    "Taille de fenêtre <em>" + ww + " x " + wh + "</em>"

  // viewport width
  var viewportwidth = verge.viewportW()
  document.getElementById("viewportwidth").innerHTML =
    "<em>" + viewportwidth + "px</em>"
  // viewport width em
  var viewportwidthem = viewportwidth / rfsstyle
  viewportwidthem = viewportwidthem.toFixed(0)
  document.getElementById("viewportwidthem").innerHTML =
    "<em>" + viewportwidthem + "em</em>"
})

// pixel ratio
var pxr =
  window.devicePixelRatio ||
  window.screen.availWidth / document.documentElement.clientWidth
pxr = parseFloat(pxr.toFixed(4))
document.getElementById("jsratio").innerHTML =
  "Pixel ratio (JS) <em>" + pxr + "</em>"

// user agent
if (navigator.userAgent)
  document.getElementById("ua").innerHTML = navigator.userAgent
// Safe Areas
function displaySafeAreas() {
  var sat = getComputedStyle(document.documentElement)
    .getPropertyValue("--sat")
    .trim()
  var sar = getComputedStyle(document.documentElement)
    .getPropertyValue("--sar")
    .trim()
  var sab = getComputedStyle(document.documentElement)
    .getPropertyValue("--sab")
    .trim()
  var sal = getComputedStyle(document.documentElement)
    .getPropertyValue("--sal")
    .trim()

  document.getElementById("sat").innerHTML = "Top <em>" + sat + "</em>"
  document.getElementById("sar").innerHTML = "Right <em>" + sar + "</em>"
  document.getElementById("sab").innerHTML = "Bottom <em>" + sab + "</em>"
  document.getElementById("sal").innerHTML = "Left <em>" + sal + "</em>"
}
displaySafeAreas()
// Battery Status API
function displayBatteryStatus() {
  if ("getBattery" in navigator) {
    navigator.getBattery().then(function (battery) {
      var level = Math.round(battery.level * 100)
      var charging = battery.charging ? "en charge" : "sur batterie"
      document.getElementById("battery").innerHTML =
        "Batterie <em>" + level + "% (" + charging + ")</em>"

      // Update on battery change
      battery.addEventListener("levelchange", function () {
        var level = Math.round(battery.level * 100)
        var charging = battery.charging ? "en charge" : "sur batterie"
        document.getElementById("battery").innerHTML =
          "Batterie <em>" + level + "% (" + charging + ")</em>"
      })

      battery.addEventListener("chargingchange", function () {
        var level = Math.round(battery.level * 100)
        var charging = battery.charging ? "en charge" : "sur batterie"
        document.getElementById("battery").innerHTML =
          "Batterie <em>" + level + "% (" + charging + ")</em>"
      })
    })
  } else {
    document.getElementById("battery").innerHTML =
      "Batterie <em>Non supporté</em>"
  }
}
displayBatteryStatus()

// Network Information API
function displayConnectionType() {
  var connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection

  function updateConnectionDisplay() {
    var effectiveType = connection ? connection.effectiveType || "4g" : "4g"

    // Remove all checkmarks
    var allItems = ["conn-slow-2g", "conn-2g", "conn-3g", "conn-4g"]
    allItems.forEach(function (id) {
      var elem = document.getElementById(id)
      if (elem) {
        elem.innerHTML = elem.innerHTML.replace(" ✅", "")
        elem.style.fontWeight = "normal"
      }
    })

    // Add checkmark to current type
    var currentId = "conn-" + effectiveType
    var currentElem = document.getElementById(currentId)
    if (currentElem) {
      currentElem.innerHTML = currentElem.innerHTML + " ✅"
      currentElem.style.fontWeight = "bold"
    }
  }

  if (connection) {
    updateConnectionDisplay()
    // Update on connection change
    connection.addEventListener("change", updateConnectionDisplay)
  } else {
    // If API not supported, show message
    var listElem = document.getElementById("connection-list")
    if (listElem) {
      listElem.innerHTML = "<li><em>API non supportée</em></li>"
    }
  }
}
displayConnectionType()
// Hover capability detection
function detectHoverSupport() {
  var hoverSupport = "Non"

  if (window.matchMedia("(any-hover: hover)").matches) {
    hoverSupport = "Oui"
  } else if (window.matchMedia("(any-hover: none)").matches) {
    hoverSupport = "Non"
  }

  document.getElementById("hover-support").innerHTML =
    "Survol <span class='discrete'>(any-hover: hover)</span> <em>" +
    hoverSupport +
    "</em>"
}
detectHoverSupport()

// Pointer type detection
function detectPointerType() {
  var pointerType = "Inconnu"

  if (window.matchMedia("(pointer: fine)").matches) {
    pointerValue = "fine"
    pointerType = "Précis"
  } else if (window.matchMedia("(pointer: coarse)").matches) {
    pointerValue = "coarse"
    pointerType = "Grossier"
  } else if (window.matchMedia("(pointer: none)").matches) {
    pointerValue = "none"
    pointerType = "Aucun"
  }

  document.getElementById("pointer-type").innerHTML =
    "Pointeur <span class='discrete'> (pointer: " +
    pointerValue +
    ")</span> <em>" +
    pointerType +
    "</em>"
}
detectPointerType()

// Browser version detection
function detectBrowserVersion() {
  var ua = navigator.userAgent
  var bName = "Inconnu"
  var bVer = ""

  if (ua.indexOf("Edg/") > -1) {
    bName = "Edge"
    bVer = ua.substring(ua.indexOf("Edg/") + 4)
  } else if (ua.indexOf("OPR/") > -1 || ua.indexOf("Opera/") > -1) {
    bName = "Opera"
    bVer =
      ua.indexOf("OPR/") > -1
        ? ua.substring(ua.indexOf("OPR/") + 4)
        : ua.substring(ua.indexOf("Opera/") + 6)
  } else if (ua.indexOf("Chrome/") > -1) {
    bName = "Chrome"
    bVer = ua.substring(ua.indexOf("Chrome/") + 7)
  } else if (ua.indexOf("Firefox/") > -1) {
    bName = "Firefox"
    bVer = ua.substring(ua.indexOf("Firefox/") + 8)
  } else if (ua.indexOf("Safari/") > -1) {
    bName = "Safari"
    bVer = ua.substring(ua.indexOf("Version/") + 8)
  } else if (ua.indexOf("MSIE") > -1 || !!document.documentMode == true) {
    bName = "IE"
    // Simplified version for IE
    bVer = ua.indexOf("MSIE") > -1 ? ua.substring(ua.indexOf("MSIE") + 5) : "11"
  }

  if (bVer.indexOf(" ") > -1) bVer = bVer.substring(0, bVer.indexOf(" "))

  document.getElementById("browser-version").innerHTML =
    "Navigateur <em>" + bName + " " + bVer + "</em>"
}
detectBrowserVersion()
