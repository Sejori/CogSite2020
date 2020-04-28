if (typeof window !== "undefined") window.addEventListener('scroll', function(e) {
  let last_known_scroll_position = window.scrollY;
  if (last_known_scroll_position > 65) {
    document.querySelector("#back-to-top").className = "active"
  } else {
    document.querySelector("#back-to-top").className = "inactive"
  }
});

// Global site tag (gtag.js) - Google Analytics
if (location.href.indexOf('//preview.') != -1 || location.href.indexOf('//sejori.') != -1) {
  var id =  'UA-116709596-1';
} else {
  var id =  'UA-116709596-2';
}
if (typeof window !== "undefined") document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=' + id + '"></scr' + 'ipt>');