const url = "http://localhost:3001"

const headers = {
  'Accept': 'applications/json',
  'Authorization': 'Reddit-Clone'
}

export const getPosts = (posts) =>
  fetch(`${url}/posts`, { headers })
    .then(res => {
      if (res.status === 200)
        return res.json()
      else
        throw new Error(res.statusText)
    })

export const getCategories = (categories) => 
    fetch(`${url}/categories`, { headers })
      .then(res => {
        if (res.status === 200)
          return res.json()
        else
          throw new Error(res.statusText)
      })

export const getInitialData = () => {
  return Promise.all([
    getPosts(),
    getCategories()
  ]).then(([posts, categories]) => ({
    posts,
    categories
  }))
}

export const getPostsByCategory = (categoryPath) => 
  fetch(`${url}/${categoryPath}/posts` , { headers })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      }else
        throw new Error(res.statusText)
    })