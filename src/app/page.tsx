async function HomePage({ params, searchParams }) {
  const queryParameters = await searchParams

  console.log(queryParameters)
  return (
    <section>
      <h1>Home page</h1>
    </section>
  )
}

export default HomePage
