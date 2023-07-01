document.addEventListener('alpine:init' , () => {
   Alpine.data('tabs' , (defaultTab) => {
    tab : defaultTab
   })
})