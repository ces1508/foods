export default {
  locations: [
    {
      id: 'loc_0001',
      name: 'Sede La Gaitana',
      position: { lat: '2.930867', long: '-75.269081' }
    },
    {
      id: 'loc_0002',
      name: 'Sede El Jardin',
      position: { lat: '2.941177', long: '-75.263191' }
    }
  ],
  categories: [
    {
      id: '1',
      'name': 'Hamburgesas',
      image: 'https://drive.google.com/uc?id=12owKOR_ctR-je3vg393P7N1qLT_NwAAE',
      breads: [
        { id: 'bread__001', name: 'Orégano', price: 0, type: 'bread' },
        { id: 'bread__002', name: 'Arabe', price: 0, type: 'bread' },
        { id: 'bread__003', name: 'Semillas de sesamo', price: 0, type: 'bread' },
        { id: 'bread__004', name: 'Maíz', price: 0, type: 'bread' },
        { id: 'bread__005', name: 'Patacon', price: 2000, type: 'bread' }
      ],
      without: [
        { id: 'wout__001', name: 'Lechuga', price: 0, type: 'remove' },
        { id: 'wout__002', name: 'Salsas', price: 0, type: 'remove' },
        { id: 'wout__003', name: 'Cebolla', price: 0, type: 'remove' },
        { id: 'wout__004', name: 'Tomate', price: 0, type: 'remove' }
      ],
      additionals: [
        { id: 'add__001', name: 'ADICIÓN DE CARNE DE RES', price: 3000, type: 'add' },
        { id: 'add__002', name: 'ADICION DE CARNE DE POLLO', price: 3000, type: 'add' },
        { id: 'add__003', name: 'ADICIÓN DE QUESO DOBLE CREMA', price: 1000, type: 'add' },
        { id: 'add__004', name: 'ADICIÓN DE QUESO CHEDDAR', price: 2000, type: 'add' },
        { id: 'add__005', name: 'ADICIÓN DE QUESO MOZARELLA', price: 1500, type: 'add' },
        { id: 'add__006', name: 'ADICIÓN DE CARNE RELLENA ESPECIAL CHEDDAR', price: 5000, type: 'add' },
        { id: 'add__007', name: 'ADICIÓN DE TOCINETA', price: 2000, type: 'add' },
        { id: 'add__008', name: 'ADICIÓN DE HUEVO FRITO', price: 1000, type: 'add' },
        { id: 'add__009', name: 'ADICIÓN DE SALSAS', price: 2500, type: 'add' },
        { id: 'add__010', name: 'ADICIÓN DE MAIZ DULCE', price: 1000, type: 'add' },
        { id: 'add__011', name: 'ADICIÓN DE JALAPEÑOS', price: 2000, type: 'add' },
        { id: 'add__012', name: 'ADICIÓN DE PEPINILLOS', price: 2000, type: 'add' },
        { id: 'add__013', name: 'ADICIÓN DE HOGO DE LA ABUELA', price: 3000, type: 'add' },
        // { id: 'add__014', name: 'ADICIÓN DE PLATANO', price: 2000, type: 'add' },
        { id: 'add__015', name: 'SALSA BBQ', price: 500, type: 'add' },
        { id: 'add__016', name: 'SALSA SESAMO', price: 500, type: 'add' }
      ]
    },
    {
      id: '2',
      'name': 'Perros Calientes',
      image: 'https://drive.google.com/uc?id=11ITrdjr-gL-bNmfxkXA5SR2291NqmP9Q',
      additionals: [
        { id: 'add__001', name: 'ADICIÓN DE CARNE DE RES', price: 3000, type: 'add' },
        { id: 'add__002', name: 'ADICION DE CARNE DE POLLO', price: 3000, type: 'add' },
        { id: 'add__003', name: 'ADICIÓN DE QUESO DOBLE CREMA', price: 1000, type: 'add' },
        { id: 'add__004', name: 'ADICIÓN DE QUESO CHEDDAR', price: 2000, type: 'add' },
        { id: 'add__005', name: 'ADICIÓN DE QUESO MOZARELLA', price: 1500, type: 'add' },
        { id: 'add__006', name: 'ADICIÓN DE CARNE RELLENA ESPECIAL CHEDDAR', price: 5000, type: 'add' },
        { id: 'add__007', name: 'ADICIÓN DE TOCINETA', price: 2000, type: 'add' },
        { id: 'add__008', name: 'ADICIÓN DE HUEVO FRITO', price: 1000, type: 'add' },
        { id: 'add__009', name: 'ADICIÓN DE SALSAS', price: 2500, type: 'add' },
        { id: 'add__010', name: 'ADICIÓN DE MAIZ DULCE', price: 1000, type: 'add' },
        { id: 'add__011', name: 'ADICIÓN DE JALAPEÑOS', price: 2000, type: 'add' },
        { id: 'add__012', name: 'ADICIÓN DE PEPINILLOS', price: 2000, type: 'add' },
        { id: 'add__013', name: 'ADICIÓN DE HOGO DE LA ABUELA', price: 3000, type: 'add' },
        { id: 'add__014', name: 'ADICIÓN DE PLATANO', price: 2000, type: 'add' },
        { id: 'add__015', name: 'SALSA BBQ', price: 500, type: 'add' },
        { id: 'add__016', name: 'SALSA SESAMO', price: 500, type: 'add' }
      ],
      without: [
        // { id: 'wout__001', name: 'Lechuga', price: 0, type: 'remove' },
        { id: 'wout__002', name: 'Salsas', price: 0, type: 'remove' },
        // { id: 'wout__003', name: 'Cebolla', price: 0, type: 'remove' },
        // { id: 'wout__004', name: 'Tomate', price: 0, type: 'remove' }
        { id: 'wout__005', name: 'Papa ripio', price: 0, type: 'remove' },
      ],
      breads: [
        { id: 'bread__001', name: 'Orégano', price: 0, type: 'bread' },
        { id: 'bread__002', name: 'Arabe', price: 0, type: 'bread' },
        { id: 'bread__003', name: 'Semillas de sesamo', price: 0, type: 'bread' }
      ]
    },
    {
      id: '3',
      'name': 'Sandwiches',
      image: 'https://drive.google.com/uc?id=1zXicgttHpC7ge5-9YkGcoCtp5GX1OspT',
      additionals: [
        { id: 'add__001', name: 'ADICIÓN DE CARNE DE RES', price: 3000, type: 'add' },
        { id: 'add__002', name: 'ADICION DE CARNE DE POLLO', price: 3000, type: 'add' },
        { id: 'add__003', name: 'ADICIÓN DE QUESO DOBLE CREMA', price: 1000, type: 'add' },
        { id: 'add__004', name: 'ADICIÓN DE QUESO CHEDDAR', price: 2000, type: 'add' },
        { id: 'add__005', name: 'ADICIÓN DE QUESO MOZARELLA', price: 1500, type: 'add' },
        { id: 'add__006', name: 'ADICIÓN DE CARNE RELLENA ESPECIAL CHEDDAR', price: 5000, type: 'add' },
        { id: 'add__007', name: 'ADICIÓN DE TOCINETA', price: 2000, type: 'add' },
        { id: 'add__008', name: 'ADICIÓN DE HUEVO FRITO', price: 1000, type: 'add' },
        { id: 'add__009', name: 'ADICIÓN DE SALSAS', price: 2500, type: 'add' },
        { id: 'add__010', name: 'ADICIÓN DE MAIZ DULCE', price: 1000, type: 'add' },
        { id: 'add__011', name: 'ADICIÓN DE JALAPEÑOS', price: 2000, type: 'add' },
        { id: 'add__012', name: 'ADICIÓN DE PEPINILLOS', price: 2000, type: 'add' },
        { id: 'add__013', name: 'ADICIÓN DE HOGO DE LA ABUELA', price: 3000, type: 'add' },
        { id: 'add__014', name: 'ADICIÓN DE PLATANO', price: 2000, type: 'add' },
        { id: 'add__015', name: 'SALSA BBQ', price: 500, type: 'add' },
        { id: 'add__016', name: 'SALSA SESAMO', price: 500, type: 'add' }
      ],
      without: [
        { id: 'wout__001', name: 'Lechuga', price: 0, type: 'remove' },
        { id: 'wout__002', name: 'Salsas', price: 0, type: 'remove' },
        { id: 'wout__003', name: 'Cebolla', price: 0, type: 'remove' },
        { id: 'wout__004', name: 'Tomate', price: 0, type: 'remove' }
      ],
      breads: [
        { id: 'bread__001', name: 'Orégano', price: 0, type: 'bread' },
        { id: 'bread__002', name: 'Arabe', price: 0, type: 'bread' },
        { id: 'bread__003', name: 'Semillas de sesamo', price: 0, type: 'bread' }
      ]

    },
    // {
    //   id: '10',
    //   name: 'Entradas',
    //   image: 'https://drive.google.com/uc?id=1snucL5tZfmitk94RL1UpzOhpOyTJcgKx'
    // },
    {
      id: '11',
      name: 'Otras Delicias',
      image: 'https://drive.google.com/uc?id=1ahIOPfDN4EPgxq9Oz-576zRBcXUkZK-r'
    },
    {
      id: '12',
      name: 'Acompañantes',
      image: 'https://drive.google.com/uc?id=1IM7x3oYV_J0lRrsjNXTZ95A99Rr_Dwm7'
    },
    {
      id: '4',
      'name': 'Especiales',
      image: 'https://drive.google.com/uc?id=1zseSvkVD5OXRx3-69aDhi8W8-xhT6OPR'
    },
    {
      id: '13',
      name: 'Jugos Naturales',
      image: 'https://drive.google.com/uc?id=1zs29Mh0rziAIdWIUBvd8iesaikyCju47',
      additionals: [
        { id: 'wout__001', name: 'bajo en azucar', price: 0, type: 'remove' }
      ],
      without: [
        { id: 'wout__002', name: 'sin azucar', price: 0, type: 'remove' },
        { id: 'wout__003', name: 'sin hielo', price: 0, type: 'remove' }
      ]
    },
    {
      id: '14',
      name: 'Té',
      image: 'https://drive.google.com/uc?id=1kheN2mVnYuJJLsGxH_zBKqWrnIiXy17o'
    },
    {
      id: '5',
      name: 'Bebidas Geseosas',
      image: 'https://drive.google.com/uc?id=15K8Yx1FjcTAy0jduMFHC9S39dfoCdZcg'
    },
    {
      id: '6',
      name: 'Cervezas',
      image: 'https://drive.google.com/uc?id=1e1emCBHvGVdnNFJjU1sclnMqe_fNCUmL'
    },
    // {
      // id: '7',
    //   'name': 'Cervezas Importadas',
    //   image: 'https://drive.google.com/uc?id=1aoDnhDKLnEVo5I0f-9bFg4QLVTJOa2qU'
    // },
    // {
    //   id: '8',
    //   name: 'Cervezas Artesanales',
    //   image: 'https://drive.google.com/uc?id=1ui9dbv2rFXyvdPWnHqtW2B1t-R1Q9Zz-'
    // }
  ],
  products: [
    {
      categoryId: '1',
      id: '001',
      name: 'HAMBURGUESA SÚPER SÉSAMO',
      price: 9500,
      description: 'Carne, queso crema, huevo, pan, tomate, lechuga, cebolla salteada, tocineta y salas Sésamo',
      image: 'https://drive.google.com/uc?id=1LNeRCvz8UltnxmUhhqmr_Ana_qGUr46S'
    },
    {
      categoryId: '1',
      id: '002',
      name: 'HAMBURGUESA SÉSAMO',
      price: 7900,
      description: 'Carne, queso crema, pan, tomate, lechuga, cebolla salteada, tocineta y salas Sésamo',
      image: 'https://drive.google.com/uc?id=1nLFKib_0fMCpt-1wl11WFbG3NMVEmy1p'
    },
    {
      categoryId: '1',
      id: '003',
      name: 'HAMBURGUESA BARBACOA',
      price: 8900,
      description: 'Carne, queso crema, pan, tomate, lechuga, cebolla salteada, tocineta a la BBQ y salas Sésamo',
      image: 'https://drive.google.com/uc?id=1nLFKib_0fMCpt-1wl11WFbG3NMVEmy1p'
    },
    {
      categoryId: '1',
      id: '004',
      name: 'HAMBURGUESA ESPECIAL CHEDDAR',
      description: 'Carne rellena de queso cheddar, pan, tomate, lechuga, cebolla grille, pepinillos agridulce y salsa Sésamo',
      price: 11900,
      image: 'https://drive.google.com/uc?id=1OX4TilHaOO7moyBmSiFIhfMCMhQqv4Mp'
    },
    {
      categoryId: '1',
      id: '005',
      name: 'HAMBURGUESA CHAMPIÑONES',
      price: 8900,
      description: 'Carne, queso crema, champiñones, pan, tomate, lechuga, cebolla grille y salsas Sésamo',
      image: 'https://drive.google.com/uc?id=1xC7gU0HT0NBd2wwQmGJzDadCyyy2zuX8'
    },
    {
      categoryId: '1',
      id: '006',
      name: 'HAMBURGUESA BACON CHESSE',
      price: 11900,
      description: 'Carne, queso cheddar, pan, tomate, lechuga, cebolla salteada, tocineta y salsas Sésamo',
      image: 'https://drive.google.com/uc?id=1Yx0S--YcxyHjVp3NooPlwx9bGoxfSOU7'
    },
    {
      categoryId: '1',
      id: '007',
      name: 'HAMBURGUESA HAWAIANA',
      price: 8900,
      descripton: 'Carne, queso crema, jamon, pan, tomate, lechuga, cebolla grille, y salsa dulce Sésamo',
      image: 'https://drive.google.com/uc?id=1-WjMAmSoqzF20Jb5_TGkdDd6WtleOpQ6'
    },
    {
      categoryId: '1',
      id: '008',
      name: 'HAMBURGUESA MEXICANA',
      price: 6000,
      description: 'Carne, queso crema, jalapeño, pan, tomate, cebolla. lechuga. pico e gallo y salsa picante',
      image: 'https://drive.google.com/uc?id=1YGOcc8QoNPkKHJKYceHFmNOH1Y66csKW'
    },
    {
      categoryId: '1',
      id: '090',
      name: 'HAMBURGUESA SUPER QUESO',
      price: 9900,
      description: 'Carne, queso doble crema, Queso mozarella, cheddar, pan, tomate, cebolla, lechuga, salsas Sésamo',
      image: 'https://drive.google.com/uc?id=1_N5vZmobpIXx-ckO4xXZUlODtDuU2QQH'
    },
    {
      categoryId: '1',
      id: '010',
      name: 'HAMBURGUESA BIG SÉSAMO',
      price: 15500,
      description: 'Doble Carne, queso crema, huevo, tocineta, pan, tomate, cebolla, lechuga, salas Sésamo más porción de papas',
      image: 'https://drive.google.com/uc?id=16oM6HHX8ietLp8bw7NQpfdj07v-PjUDF'
    },
    {
      categoryId: '1',
      id: '011',
      name: 'HAMBURGUESA SÉSAMO POLLO',
      price: 9900,
      description: 'Carne de pollo, queso, pan, tomate, lechuga, cebolla grille, lechuga y salsas Sésamo',
      image: 'https://drive.google.com/uc?id=1eM2Be6-kzWiuUWO0IUh6fdlQwRT0paY6'
    },
    {
      categoryId: '1',
      id: '012',
      name: 'HAMBURGUESA SÉSAMO PATACÓN',
      price: 6000,
      description: 'Carne, queso crema, pan, tomate, lechuga, cebolla salteada, patacones y salsas Sésamo',
      image: 'https://drive.google.com/uc?id=1RjhOi5rjb4Tz_6SErKFjIaaMUiZlxxvl'
    },
    {
      categoryId: '1',
      id: '013',
      name: 'HAMBURGUESA MENÚ INFANTIL',
      price: 9900,
      description: 'Hamburguesa Sésamo, papas a la francesa y jugo hit 300 ml',
      image: 'https://drive.google.com/uc?id=17TuRx_htbfmAGPro4W4x_02hQ5FtekZO'
    },
    {
      categoryId: '5',
      id: '201',
      name: 'GASEOSA COCACOLA ORIGINAL PERSONAL',
      price: 3000,
      description: '',
      image: 'https://drive.google.com/uc?id=1a1slbP_scP-sDx_e29d9UXdgpqdLq9bJ'
    },
    {
      categoryId: '5',
      id: '202',
      name: 'GASEOSA COCACOLA CERO PERSONAL',
      price: 3000,
      description: '',
      image: 'https://drive.google.com/uc?id=1a1slbP_scP-sDx_e29d9UXdgpqdLq9bJ'
    },
    {
      categoryId: '5',
      id: '203',
      name: 'GASEOSA SPRITE PERSONAL',
      price: 3000,
      description: '',
      image: 'https://drive.google.com/uc?id=1a1slbP_scP-sDx_e29d9UXdgpqdLq9bJ'
    },
    {
      categoryId: '5',
      id: '204',
      name: 'GASEOSA QUATRO PERSONAL',
      price: 3000,
      description: '',
      image: 'https://drive.google.com/uc?id=1a1slbP_scP-sDx_e29d9UXdgpqdLq9bJ'
    },
    {
      categoryId: '5',
      id: '205',
      name: 'GASEOSA GINGER PERSONAL',
      price: 3000,
      description: '',
      image: 'https://drive.google.com/uc?id=1a1slbP_scP-sDx_e29d9UXdgpqdLq9bJ'
    },
    {
      categoryId: '5',
      id: '206',
      name: 'JUGO DEL VALLE PERSONAL',
      price: 3000,
      image: 'https://drive.google.com/uc?id=1a1slbP_scP-sDx_e29d9UXdgpqdLq9bJ'
    },
    {
      categoryId: '6',
      id: '231',
      name: 'CERVEZA AGUILA ORIGINAL',
      price: 3000,
      image: 'https://drive.google.com/uc?id=1ui9dbv2rFXyvdPWnHqtW2B1t-R1Q9Zz-'
    },
    {
      categoryId: '6',
      id: '232',
      name: 'CERVEZA AGUILA LIGH',
      price: 3500,
      image: 'https://drive.google.com/uc?id=1ui9dbv2rFXyvdPWnHqtW2B1t-R1Q9Zz-'
    },
    {
      categoryId: '6',
      id: '233',
      name: 'CERVEZA CLUB COLOMBIA DORADA',
      price: 4000,
      image: 'https://drive.google.com/uc?id=1ui9dbv2rFXyvdPWnHqtW2B1t-R1Q9Zz-'
    },
    {
      categoryId: '6',
      id: '234',
      name: 'CERVEZA CLUB ROJA',
      price: 4000,
      image: 'https://drive.google.com/uc?id=1ui9dbv2rFXyvdPWnHqtW2B1t-R1Q9Zz-'
    },
    {
      categoryId: '6',
      id: '235',
      name: 'CERVEZA CLUB NEGRA',
      price: 4000,
      image: 'https://drive.google.com/uc?id=1ui9dbv2rFXyvdPWnHqtW2B1t-R1Q9Zz-'
    },
    {
      categoryId: '6',
      id: '236',
      name: 'CERVEZA REDS',
      price: 3500,
      image: 'https://drive.google.com/uc?id=1ppvFFCHi0JOrJJvGDRctqBoQml1mGdNj'
    },
    {
      categoryId: '6',
      id: '241',
      name: 'CERVEZA CORONA',
      price: 7000,
      image: 'https://drive.google.com/uc?id=1aoDnhDKLnEVo5I0f-9bFg4QLVTJOa2qU'
    },
    {
      categoryId: '6',
      id: '251',
      name: 'CERVEZA TERRACOTA NIVAL',
      price: 7500,
      image: 'https://drive.google.com/uc?id=1ui9dbv2rFXyvdPWnHqtW2B1t-R1Q9Zz-'
    },
    {
      categoryId: '6',
      id: '252',
      name: 'CERVEZA TERRACOTA SALARIUN',
      price: 7500,
      image: 'https://drive.google.com/uc?id=1ui9dbv2rFXyvdPWnHqtW2B1t-R1Q9Zz-'
    },
    {
      categoryId: '6',
      id: '253',
      name: 'CERVEZA ARTESANAL TERRACOTA',
      price: 7500,
      image: 'https://drive.google.com/uc?id=1ui9dbv2rFXyvdPWnHqtW2B1t-R1Q9Zz-'
    },
    {
      categoryId: '6',
      id: '254',
      name: 'CERVEZA ARTESANAL BBC',
      price: 7000,
      image: 'https://drive.google.com/uc?id=1ui9dbv2rFXyvdPWnHqtW2B1t-R1Q9Zz-'
    },
    {
      categoryId: '2',
      id: '051',
      name: 'PERRO HAWAIANO',
      price: 7900,
      description: 'Salchica tipo americana, pan, queso, jamón, papas tosotiritas, cebolla y salsas Sésamo',
      image: 'https://drive.google.com/uc?id=1qqQF67lbzwWMu8bfRs3ePq20uY88YF2h'
    },
    {
      categoryId: '2',
      id: '052',
      name: 'PERRO POLLO Y CHAMPIÑONES',
      price: 8900,
      description: 'salchicha tipo americana, pan, pollo desmechado, champiñones, queso, papas fosforitos, cebolla, y salsas',
      image: 'https://drive.google.com/uc?id=1uErCQF-3lzKNTT_haaSL-in55e9EFsrA'
    },
    {
      categoryId: '2',
      id: '053',
      name: 'PERRO RANCHERO',
      price: 8900,
      description: 'salchicha tipo americana, pan, queso, tocineta a la BBQ, paps fosforitos, cebolla y salsa Sésamo',
      image: 'https://drive.google.com/uc?id=1EL7kpWFQFrIVCe9wOS6rkr7pi1p1BfIr'
    },
    {
      categoryId: '2',
      id: '054',
      name: 'PERRO MEXICANO',
      price: 7900,
      description: 'salchicha tipo americana, pan, queso, jalapeños, papas fosforitos, cebolla y salsas Sésamo',
      image: 'https://drive.google.com/uc?id=1SwsTmGbIFqYYdfQjCq7ETN_OUt8ZjDN1'
    },
    {
      categoryId: '2',
      id: '055',
      name: 'PERRO ROPA VIEJA',
      price: 8900,
      description: 'salchicha tipo americana, pan, queso fundido, carne desmechada, cebolla maicitos, papas fosforito y salsas',
      image: 'https://drive.google.com/uc?id=1EL7kpWFQFrIVCe9wOS6rkr7pi1p1BfIr'
    },
    {
      categoryId: '10',
      id: '091',
      name: 'PAPAS ESPECIADAS BAÑADAS EN QUESO CHEDDAR ',
      price: 0,
      image: 'https://drive.google.com/uc?id=1ep8v82CMRlR92aVO0cAZPfH7GzX1wikY'
    },
    {
      categoryId: '10',
      id: '092',
      name: 'CHIPS DE PLATANO VERDES CON HOGO DE LA ABUELA',
      price: 0,
      image: 'https://drive.google.com/uc?id=1uLBRT1nT41x6mAfduz392T2WpbD3xfbG'
    },
    {
      categoryId: '3',
      id: '071',
      name: 'SANDWICHE JAMÓN Y VEGETALES',
      price: 7900,
      description: 'Queso, vegetales en trocitos, jamón lechuga, cebolla',
      image: 'https://drive.google.com/uc?id=1jS_PFzBlalmtTSgd8ZJyWB1jLVS1smCG'
    },
    {
      categoryId: '3',
      id: '072',
      name: 'SANDWICHE POLLO Y CHAMPIÑONES',
      price: 8500,
      description: 'Queso, cebolla grille, lechuga, pollo y champiñones',
      image: 'https://drive.google.com/uc?id=1UU5GOzV-vlH8rxA75GsuoQOGPaw6jnrz'
    },
    {
      categoryId: '3',
      id: '073',
      name: 'SANDWICHE RANCHERO',
      price: 8900,
      description: 'Queso, salami, tocineta, lechuga, cebolla grille',
      image: 'https://drive.google.com/uc?id=1W2r8U9HU1XLbEY1xJLveQiQTMBrSyW_W'
    },
    {
      categoryId: '3',
      id: '074',
      name: 'SANDWICHE ROPA VIEJA',
      price: 8900,
      description: 'Queso, carne mechada, lechuga, cebolla y maicitos',
      image: 'https://drive.google.com/uc?id=1ynXIXyMiaWmgT7F79RY_Fxh9v7_Zu5U2'
    },
    {
      categoryId: '3',
      id: '075',
      name: 'SANDWICHE ATÚN MIX',
      price: 7900,
      description: 'Queso, atún, huevo, lechuga, cebolla y maicitos',
      image: 'https://drive.google.com/uc?id=1TLzTeWv8mK86-2UbXh4jHiZa6HoSpo9c'
    },
    {
      categoryId: '11',
      id: '121',
      name: 'SALCHIPAPAS',
      price: 7500,
      description: 'salchicha tipo americana, papas, a la francesa y queso fundido',
      image: 'https://drive.google.com/uc?id=1GzsAJ6g5QH593ZLNheyB5EzmNGpvyvft'
    },
    {
      categoryId: '11',
      id: '122',
      name: 'COSTILLAS DE CERDO A LA BBQ',
      price: 25000,
      description: '500 Gms de costillas ahumadas bañadas en salsa BBQ acompañad5 de papas criollas al vapor',
      image: 'https://drive.google.com/uc?id=15jTkL_Q5XmfOqfJRDm3elOjxl6uP3bnC'
    },
    {
      categoryId: '4',
      id: '123',
      name: 'ALITAS DE POLLO',
      price: 13500,
      description: '8 piezas de alita acompañadas con papas criollas al vapor',
      image: 'https://drive.google.com/uc?id=15jTkL_Q5XmfOqfJRDm3elOjxl6uP3bnC'
    },
    {
      categoryId: '4',
      id: '124',
      name: 'TOSTON DE CARNE',
      price: 11500,
      description: 'pollo con champiñones o carne desmechada',
      image: 'https://drive.google.com/uc?id=15jTkL_Q5XmfOqfJRDm3elOjxl6uP3bnC',
      additionals: [
        { id: 'add__003', name: 'ADICIÓN DE QUESO DOBLE CREMA', price: 1000, type: 'add' },
        { id: 'add__004', name: 'ADICIÓN DE QUESO CHEDDAR', price: 2000, type: 'add' },
        { id: 'add__005', name: 'ADICIÓN DE QUESO MOZARELLA', price: 1500, type: 'add' },
        { id: 'add_tt_002', name: 'Maiz Tierno', price: 1000, type: 'add' },
        { id: 'add_tt_004', name: 'Pollo con champiñones', price: 3000, type: 'add' }
      ]
    },
    {
      categoryId: '4',
      id: '125',
      name: 'TOSTON DE POLLO',
      price: 11500,
      description: 'pollo con champiñones o carne desmechada',
      image: 'https://drive.google.com/uc?id=15jTkL_Q5XmfOqfJRDm3elOjxl6uP3bnC',
      additionals: [
        { id: 'add__003', name: 'ADICIÓN DE QUESO DOBLE CREMA', price: 1000, type: 'add' },
        { id: 'add__004', name: 'ADICIÓN DE QUESO CHEDDAR', price: 2000, type: 'add' },
        { id: 'add__005', name: 'ADICIÓN DE QUESO MOZARELLA', price: 1500, type: 'add' },
        { id: 'add_tt_002', name: 'Maiz Tierno', price: 1000, type: 'add' },
        { id: 'add_tt_003', name: 'Carne desmechada', price: 3000, type: 'add' }
      ]
    },
    // {
    //   categoryId: '11',
    //   id: '125',
    //   name: 'TOSTON DE CARNE ROPA VIEJA',
    //   price: 0,
    //   image: 'https://drive.google.com/file/d/10PpbIPyjfMZQjik0yBpQDAA2LbSFyael/view'
    // },
    {
      categoryId: '12',
      id: '101',
      name: 'PAPAS FRANCESA',
      price: 3500,
      description: '',
      image: 'https://drive.google.com/uc?id=14AlUImodzs55zPapNeJRgoZjt1IKNhzd'
    },
    {
      categoryId: '12',
      id: '102',
      name: 'PAPAS CRIOLLAS',
      price: 3500,
      description: '',
      image: 'https://drive.google.com/uc?id=1ep8v82CMRlR92aVO0cAZPfH7GzX1wikY'
    },
    {
      categoryId: '12',
      id: '103',
      name: 'PAPAS EN CASQUITOS',
      price: 3500,
      description: '',
      image: 'https://drive.google.com/uc?id=1ep8v82CMRlR92aVO0cAZPfH7GzX1wikY'
    },
    {
      categoryId: '12',
      id: '104',
      name: 'PAPAS RIZADAS',
      price: 3500,
      description: '',
      image: 'https://drive.google.com/uc?id=1ep8v82CMRlR92aVO0cAZPfH7GzX1wikY'
    },
    {
      categoryId: '12',
      id: '105',
      name: 'PAPAS EN ESPIRAL',
      price: 4500,
      description: '',
      image: 'https://drive.google.com/uc?id=1ep8v82CMRlR92aVO0cAZPfH7GzX1wikY'
    },
    {
      categoryId: '12',
      id: '106',
      name: 'DEDOS DE QUESO MOZARELLA',
      price: 7500,
      description: '',
      image: 'https://drive.google.com/uc?id=1ep8v82CMRlR92aVO0cAZPfH7GzX1wikY'
    },
    {
      categoryId: '12',
      id: '107',
      name: 'PALITOS DE YUCA',
      price: 3000,
      description: '',
      image: 'https://drive.google.com/uc?id=1nWNwMMtSpSgwINhcmnF72kWyaUJDJcef'
    },
    {
      categoryId: '12',
      id: '108',
      name: 'ARITOS DE CEBOLLA',
      price: 4900,
      description: '',
      image: 'https://drive.google.com/uc?id=1WFZDCGgm-Zmje2Fqm4MeYb6wdmeF-Z2g'
    },
    {
      categoryId: '12',
      id: '109',
      name: 'CROQUETAS DE JALAPEÑOS',
      price: 5990,
      description: '',
      image: 'https://drive.google.com/uc?id=1ep8v82CMRlR92aVO0cAZPfH7GzX1wikY'
    },
    {
      categoryId: '13',
      id: '171',
      name: 'LIMONADA CEREZADA',
      price: 8000,
      description: '',
      image: 'https://drive.google.com/uc?id=1CMqukjVVVVAQFixleKlTBfTmxGeusJi_'
    },
    {
      categoryId: '13',
      id: '172',
      name: 'LIMONADA DE COCO',
      price: 7000,
      description: '',
      image: 'https://drive.google.com/uc?id=1CMqukjVVVVAQFixleKlTBfTmxGeusJi_'
    },
    {
      categoryId: '13',
      id: '173',
      name: 'LIMONADA DE HIRBABUENA',
      price: 5000,
      description: '',
      image: 'https://drive.google.com/uc?id=1CMqukjVVVVAQFixleKlTBfTmxGeusJi_'
    },
    {
      categoryId: '13',
      id: '174',
      name: 'LIMONADA NATURAL',
      price: 4000,
      image: 'https://drive.google.com/uc?id=1CMqukjVVVVAQFixleKlTBfTmxGeusJi_'
    },
    {
      categoryId: '13',
      id: '175',
      name: 'JUGO CHOLUPA',
      price: 4000,
      description: '',
      image: 'https://drive.google.com/uc?id=1CMqukjVVVVAQFixleKlTBfTmxGeusJi_'
    },
    {
      categoryId: '13',
      id: '176',
      name: 'JUGO DE NARANJA',
      price: 4000,
      description: '',
      image: 'https://drive.google.com/uc?id=1CMqukjVVVVAQFixleKlTBfTmxGeusJi_'
    },
    {
      categoryId: '13',
      id: '177',
      name: 'JUGO DE MANDARINA',
      price: 4500,
      description: '',
      image: 'https://drive.google.com/uc?id=1CMqukjVVVVAQFixleKlTBfTmxGeusJi_'
    },
    {
      categoryId: '13',
      id: '178',
      name: 'JUGO FRUTOS ROJOS',
      price: 4500,
      description: '',
      image: 'https://drive.google.com/uc?id=1CMqukjVVVVAQFixleKlTBfTmxGeusJi_'
    },
    {
      categoryId: '13',
      id: '179',
      name: 'JUGO PASIÓN TROPICAL',
      price: 4500,
      image: 'https://drive.google.com/uc?id=1CMqukjVVVVAQFixleKlTBfTmxGeusJi_'
    },
    {
      categoryId: '13',
      id: '180',
      name: 'JUGO PASIÓN MIX',
      price: 4500,
      description: '',
      image: 'https://drive.google.com/uc?id=1CMqukjVVVVAQFixleKlTBfTmxGeusJi_'
    },
    {
      categoryId: '13',
      id: '181',
      name: 'SODA DE FRUTAS MORA',
      price: 5500,
      description: '',
      image: 'https://drive.google.com/uc?id=1CMqukjVVVVAQFixleKlTBfTmxGeusJi_'
    },
    {
      categoryId: '13',
      id: '182',
      name: 'SODA DE FRUTA MARACUYA',
      price: 5500,
      description: '',
      image: 'https://drive.google.com/uc?id=1CMqukjVVVVAQFixleKlTBfTmxGeusJi_'
    },
    {
      categoryId: '13',
      id: '183',
      name: 'SODAS FRUTAS CHOLUPA',
      price: 5500,
      description: '',
      image: 'https://drive.google.com/uc?id=1CMqukjVVVVAQFixleKlTBfTmxGeusJi_'
    },
    {
      categoryId: '13',
      id: '184',
      name: 'SODA FRUTAS LULO',
      price: 5500,
      description: '',
      image: 'https://drive.google.com/uc?id=1CMqukjVVVVAQFixleKlTBfTmxGeusJi_'
    },
    // {
    //   categoryId: '13',
    //   id: '300',
    //   name: 'JUGO DE TAMARINDO',
    //   price: 3000,
    //   image: 'https://drive.google.com/file/d/10PpbIPyjfMZQjik0yBpQDAA2LbSFyael/view'
    // },
    {
      categoryId: '14',
      id: '207',
      name: 'TE FUZE TEA LIMÓN',
      price: 2500,
      description: '',
      image: 'https://drive.google.com/uc?id=1Rz6IfQ4vdMttZHzVvzVbB-CPSFMoD3We'
    },
    {
      categoryId: '14',
      id: '208',
      name: 'TÉ FUZE TEA DURAZNO',
      price: 2500,
      description: '',
      image: 'https://drive.google.com/uc?id=1Rz6IfQ4vdMttZHzVvzVbB-CPSFMoD3We'
    },
    {
      categoryId: '14',
      id: '209',
      name: 'TE FUZE TEA MANZANILLA',
      price: 2500,
      description: '',
      image: 'https://drive.google.com/uc?id=1Rz6IfQ4vdMttZHzVvzVbB-CPSFMoD3We'
    },
    {
      categoryId: '14',
      id: '210',
      name: 'TÉ FUZE TEA DE MANZANA',
      price: 2500,
      description: '',
      image: 'https://drive.google.com/uc?id=1Rz6IfQ4vdMttZHzVvzVbB-CPSFMoD3We'
    },
    {
      categoryId: '14',
      id: '211',
      name: 'TÉ SABORIZADO HATSU',
      price: 4500,
      description: '',
      image: 'https://drive.google.com/uc?id=1Rz6IfQ4vdMttZHzVvzVbB-CPSFMoD3We'
    }
  ]
}
