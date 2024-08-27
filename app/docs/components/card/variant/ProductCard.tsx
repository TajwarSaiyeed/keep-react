import Image from 'next/image'
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../src'

const ProductCard = () => {
  return (
    <Card>
      <CardHeader>
        <Image src="/images/keep-card.jpg" className="rounded-t-xl" alt="image" width={600} height={300} />
      </CardHeader>
      <CardContent className="space-y-3">
        <CardTitle>Lorem ipsum dolor sit</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam animi voluptas perspiciatis quidem esse!
        </CardDescription>
        <Button>Buy Now</Button>
      </CardContent>
    </Card>
  )
}

const ProductCardCode = {
  'CardComponent.tsx': `
import Image from 'next/image'
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from 'keep-react'

export const CardComponent = () => {
  return (
    <Card>
      <CardHeader>
        <Image src="/images/keep-card.jpg" className="rounded-t-xl" alt="image" width={600} height={300} />
      </CardHeader>
      <CardContent className="space-y-3">
        <CardTitle>Lorem ipsum dolor sit</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam animi voluptas perspiciatis quidem esse!
        </CardDescription>
        <Button>Buy Now</Button>
      </CardContent>
    </Card>
  )
}
`,
}

export { ProductCard, ProductCardCode }
