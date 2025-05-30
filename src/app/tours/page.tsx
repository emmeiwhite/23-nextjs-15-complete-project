const url = 'https://www.course-api.com/react-tours-project'

type Tour = {
  id: string
  name: string
  info: string
  price: string
  image: string
}

// Fetching data should be done in a Server Component
const ToursPage = async () => {
  const response = await fetch(url)
  const data: Tour[] = await response.json()
  console.log(data)
  return <div>ToursPage</div>
}
export default ToursPage
