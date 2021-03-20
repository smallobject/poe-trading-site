const currency = [
  {
    name: 'chaosorb',
    source: 'currency/ChaosOrb.png',
  },
  {
    name: 'exaltedorb',
    source: 'currency/ExaltedOrb.png',
  },
  {
    name: 'jewellers',
    source: 'currency/JewellersOrb.png',
  },
  {
    name: 'alch',
    source: 'currency/OrbofAlchemy.png',
  },
];

export function findCurrency(name) {
  for (let item of currency) {
    if (item.name.includes(name)) {
      return item.source;
    }
  }
}
