import Link from 'next/link'

const Nav = (): JSX.Element => {
  return (
    <div>
      <Link href='/clube'>
        Clube
      </Link>
      <Link href='/loja'>
        Loja
      </Link>
      <Link href='/produtores'>
        Produtores
      </Link>
      <Link href='/ofertas'>
        Ofertas
      </Link>
      <Link href='/eventos'>
        Eventos
      </Link>
    </div>
  )
}

export default Nav
