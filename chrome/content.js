/**
 * Created by Shahen Kosyan and Henrikh Kantuni on 2/12/17.
 */


const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    const elementClassList = mutation.target.classList
    const isHeader = elementClassList.contains("header") && elementClassList.length === 1
    const isGist = elementClassList.contains("gist-header")
    
    if (isHeader || isGist) {
      mutation.target.classList.add("revive")
      observer.disconnect()
    }
  })
})

observer.observe(document, {
  childList: true,
  subtree: true
})
