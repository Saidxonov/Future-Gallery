
document.querySelectorAll('#gallery input').forEach(radio => {
    radio.onclick = e => {
      if (!document.startViewTransition) return
      
      e.preventDefault()
      
      function mutate() {

        e.target.checked = true

        e.target.parentNode.style.zIndex = null
      }
      

      e.target.parentNode.style.zIndex = 2
      
      document.startViewTransition
        ? document.startViewTransition(() => mutate())
        : mutate()
    }
  })
  

  function flipGallery() {
    function mutate(vertical = false) {
      if (document.startViewTransition)
        document.startViewTransition(() =>
          vertical
            ? gallery.classList.add('portrait')
            : gallery.classList.remove('portrait'))
    }
    
    mutate(window.innerWidth <= 768)
  }
  
  window.onresize = () => {
    clearTimeout(window.resizeEndTimer)
    window.resizeEndTimer = setTimeout(flipGallery, 100)
  }