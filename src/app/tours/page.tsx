import Link from 'next/link'

const url = 'https://www.course-api.com/react-tours-project'

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
    <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      {data.map(tour => {
        return (
          <div
            key={tour.id}
            className="p-4 border-1 border-amber-300 rounded ">
            <Link
              href={`/tours/${tour.id}`}
              className="text-green-500 hover:text-green-700 ">
              {tour.name}
            </Link>
          </div>
        )
      })}
    </section>
  )
}
export default ToursPage
