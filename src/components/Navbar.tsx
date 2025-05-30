'use Client'

import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="max-w-4xl mx-auto px-5">
      <nav className="flex gap-5">
        <Link href={'/'}>Home</Link>
        <Link href={'/counter'}>Counter</Link>
        <Link href={'/tours'}>Tours</Link>
        <Link href={'/actions'}>Actions</Link>
        <Link href={'/products'}>Products</Link>
      </nav>
    </header>
  )
}
export default Navbar
