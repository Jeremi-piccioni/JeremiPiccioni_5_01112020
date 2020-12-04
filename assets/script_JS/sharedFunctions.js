const backHomePageButton = () => {
    const btn = document.querySelector('.btn_back_to_home')
    btn.addEventListener('click', () => {location.href = "index.html"})
  }
  
export {backHomePageButton}