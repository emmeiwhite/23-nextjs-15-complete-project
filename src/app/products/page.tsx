// app/products/page.tsx
export default async function ProductsPage() {
  const response = await fetch('https://dummyjson.com/products')
  const { products } = await response.json()

  console.log(products[0])

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="border rounded-md shadow p-4 bg-white dark:bg-gray-800 transition-colors">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h2 className="font-semibold text-lg">{product.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
              {product.description}
            </p>
            <p className="mt-2 font-bold text-blue-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
