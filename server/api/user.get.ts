interface User {
  id: number
  name: string
  email: string
  avatar: string
}

export default defineEventHandler((): User => {
  return {
    id: 1, 
    name: 'Yuri Fontella', 
    email: 'yuricazzeri@gmail.com', 
    avatar: 'https://cdn2.thecatapi.com/images/4ds.gif'
  }
})
