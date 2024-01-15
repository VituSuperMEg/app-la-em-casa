export const orderLast = [
  {
    id: 1,
    name: 'Baião Mole',
    price: 12.99,
    date: '2024-01-12 07:09:00'
  },
  {
    id: 2,
    name: 'Cuscuz com Carne de Sol',
    price: 12.99,
    date: '2024-01-12 07:50:00'
  }
]

export const RefSimple = [
  {
    items: [
      {
        title: 'Guarnições',
        id: 1,
        items: [
          {
            id: 73411,
            details: [
              { id: 1, name: 'Arroz Branco', isExists: true, price: 0 },
              { id: 2, name: 'Baião', isExists: true, price: 0 },
              { id: 3, name: 'Baio Mole', isExists: false, price: 12 }
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Adicionais',
        items: [
          {
            id: 73511,
            details: [
              { id: 554, name: 'Batata Frita', isExists: true, price: 12 }
            ]
          },
          {
            id: 73512,
            details: [
              { id: 4234, name: 'Lasanha', isExists: true, price: 8 }
            ]
          }
        ]
      }
    ]
  }
]
