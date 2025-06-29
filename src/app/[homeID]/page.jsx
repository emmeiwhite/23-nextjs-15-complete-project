export default async function page({ params, searchParams }) {
  const slug = await params
  console.log(`Route Parameter: `, slug)
  const queryString = await searchParams
  console.log(`QueryString`, queryString)
  return (
    <div>
      <h1>One Page To Rule Them All</h1>

      <p>Slug: {slug.homeID}</p>
    </div>
  )
}
