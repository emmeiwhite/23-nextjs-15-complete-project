const url = 'https://www.course-api.com/react-tours-'

type Tour = {
  id: string
  name: string
  info: string
  price: string
  image: string
}

const fetchTours = async () => {
  // Adding a brief delay for loading state

  await new Promise(resolve => setTimeout(resolve, 3000))
  const response = await fetch(url)
  const data: Tour[] = await response.json()
  return data
}

// Fetching data should be done in a Server Component
const ToursPage = async () => {
  const data = await fetchTours()
  console.log(data)

  return (
    <section>
      {data.map(tour => {
        return <p key={tour.id}>{tour.name}</p>
      })}
    </section>
  )
}
export default ToursPage
