// const add = (x,y) => x + y


// // let result = add(2,4)

// // console.log("el resultado es :"  + result)

// export { add }

const backHomePageButton = () => {
    const btn = document.querySelector('.btn_back_to_home')
    btn.addEventListener('click', () => {location.href = "index.html"})
  }
  
  export {backHomePageButton}