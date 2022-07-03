import Link from 'next/link'

const Club = (): JSX.Element => {
  return (
    <div>
      <h1>Clube</h1>
      <h2>Essa página ainda não foi implementada, mas estamos trabalhando duro!</h2>
      <h2>
        Enquanto isso, que tal <Link href='/loja'><a>visitar nossa loja?</a></Link>
      </h2>
    </div>
  )
}

export default Club
