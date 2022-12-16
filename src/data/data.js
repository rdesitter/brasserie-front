const data = {
  name: 'carte',
  families: [
    { 
      name: 'entrées',
      slug: 'entrees',
      categories: [
        {
          name: 'Nos huîtres',
          slug: 'nos-huitres',
          desc: null,
          recipes: [
            {
              name: 'Huitres fines de claires N° 2 (les 6)',
              desc: null,
              price: 17.00
            },
            {
              name: 'Huitres fines de claires N° 2 (les 12)',
              desc: null,
              price: 31.00
            },
          ]
        },
        {
          name: 'Nos plateaux',
          slug: 'nos-plateaux',
          desc: `Tous nos plateaux sont composés avec le plus grand soin\n
                  Pain de seigle, beurre échiré, citron compris\n
                  Véritable repas marin`,
          recipes: [
            {
              name: 'Plateau Royal (2 personnes)',
              desc: '12 huîtres, 12 moules, 6 palourdes, 6 bouquets roses, crevettes grises, bulots, tourteau',
              price: 89.00
            },
          ]
        }
      ]
    },
    { 
      name: 'Plats',
      slug: 'plats',
      categories: [
        {
          name: 'Nos salades repas',
          slug: 'nos-salades-repas',
          desc: null,
          recipes: [
            {
              name: 'Salade Périgourdine',
              desc: null,
              price: 22.00
            },
            {
              name: 'Salade César au poulet croustillant',
              desc: null,
              price: 17.00
            },
          ]
        },
        {
          name: 'Nos choucroutes',
          slug: 'nos-choucroutes',
          desc: `Notre charcuterie provient de la maison « Kirn »`,
          recipes: [
            {
              name: 'Choucroute de Poissons',
              desc: 'Choucroute, dés de saumon fumé, assortiment de poissons selon arrivage, pommes vapeur, beurre blanc',
              price: 28.00
            },
          ]
        }
      ]
    }
  ]
}

export default data;
