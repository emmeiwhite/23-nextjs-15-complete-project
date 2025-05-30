const ProductDetailPage = ({ params }: { params: Promise<{ productId: string }> }) => {
  console.log(params)
  return (
    <div>
      <h1>Product Detail Page</h1>
    </div>
  )
}
export default ProductDetailPage
