if (typeof window !== "undefined") window.addEventListener('scroll', function(e) {
  let last_known_scroll_position = window.scrollY;
  console.log(last_known_scroll_position)
  if (last_known_scroll_position > 65) {
    document.querySelector("#back-to-top").className = "active"
  } else {
    document.querySelector("#back-to-top").className = "inactive"
  }
  console.log('scroll')
});