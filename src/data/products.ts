export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number // MDL
  sizes: string[]
  category: string
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'MinePrut Essential Hoodie',
    image: '/placeholder.png',
    description:
      'Hoodie-ul esențial al brandului MinePrut — confecționat din bumbac 380gsm premium, cu un fit oversized care definește stilul streetwear autentic. Detalii brodate cu logourile brandului pe piept și pe spate. Perfect pentru zilele răcoroase de toamnă sau serile de primăvară. Disponibil în culori: Negru, Ecru, Olive.',
    shortDescription: 'Hoodie oversized premium 380gsm, logo brodat MinePrut.',
    price: 690,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Hanorace',
  },
  {
    id: 2,
    name: 'Logo Tee — Ediție Limitată',
    image: '/placeholder.png',
    description:
      'Tricoul iconic MinePrut, realizat din 100% bumbac organic 200gsm. Print serigrafic de înaltă rezoluție cu simbolul brandului pe față și mesajul „Mine × Prut 2024" pe spate. Fit unisex, potrivit atât pentru bărbați, cât și pentru femei. Spălare la 30°C pentru a păstra vopseaua.',
    shortDescription: 'Tricou organic cu print serigrafic, ediție limitată.',
    price: 290,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Tricouri',
  },
  {
    id: 3,
    name: 'Cargo Pants — Street Edition',
    image: '/placeholder.png',
    description:
      'Pantalonii Cargo MinePrut sunt construiți pentru durabilitate și stil urban. Material ripstop 240gsm cu elastan 5% pentru libertate de mișcare. 6 buzunare funcționale, inclusiv 2 buzunare laterale cargo. Talie ajustabilă cu șnur. Potriviți pentru activitățile zilnice și ieșirile în oraș.',
    shortDescription: 'Pantaloni cargo ripstop cu 6 buzunare, fit relaxed.',
    price: 790,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'Pantaloni',
  },
  {
    id: 4,
    name: 'MinePrut Snapback Cap',
    image: '/placeholder.png',
    description:
      'Șapca Snapback cu logo MinePrut brodat în față — accesoriul perfect pentru orice outfit streetwear. Fabricată din twill de bumbac 6 panouri, cu închidere snapback reglabilă la spate. Se potrivește majorității circumferințelor capului. Disponibilă în negru și alb.',
    shortDescription: 'Snapback 6 panouri, logo brodat, reglabilă.',
    price: 250,
    sizes: ['One Size'],
    category: 'Accesorii',
  },
  {
    id: 5,
    name: 'Windbreaker — Urban Shield',
    image: '/placeholder.png',
    description:
      'Jachetă windbreaker ultraușoară MinePrut, ideală pentru tranziția de la vară la toamnă. Material nylon ripstop rezistent la vânt și umezeală ușoară. Design cu glugă pliabilă în guler, fermoar YKK și buzunare laterale cu fermoar. Imprimeu reflectorizant MinePrut pe umăr pentru vizibilitate nocturnă.',
    shortDescription: 'Windbreaker nylon ripstop, glugă pliabilă, reflectorizant.',
    price: 1250,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'Jachete',
  },
  {
    id: 6,
    name: 'Track Pants — Flow Series',
    image: '/placeholder.png',
    description:
      'Pantaloni de trening MinePrut Flow Series din jersey de bumbac 280gsm. Croiala modernă cu dungă laterală contrastantă. Elastic la talie cu șnur și manșetă la gleznă. Două buzunare laterale cu fermoar. Perfecți atât pentru sport cât și pentru ieșiri casual în oraș.',
    shortDescription: 'Trening premium cu dungă laterală, 280gsm bumbac.',
    price: 490,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Pantaloni',
  },
]

export default products
