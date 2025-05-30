const TourDetail = ({ params }: { params: { tourId: string } }) => {
  const { tourId } = params
  return (
    <section>
      <h1>Tour Page</h1>

      <p>Current Tour Id: {tourId}</p>
    </section>
  )
}
export default TourDetail
