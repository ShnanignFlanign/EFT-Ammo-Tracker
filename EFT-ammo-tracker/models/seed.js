

const seed = [
    {
      caliber: '5.56x45mm',
      cartridge: 'M855',
      damage: 53,
      penpower: 28,
      velocity: 922,
      description: 'A 5.56x45mm NATO M855 cartridge with a 4 gram bullet with a steel penetrator tip over a lead core with a copper jacket in a brass case.\r\n' +
        '\r\n' +
        'This cartridge was designed in the 1980s as the equivalent to the FN SS109 cartridge for the 5.56x45mm NATO caliber armament used by the United States Army. Thanks to its design, the bullet in this cartridge is capable of piercing through basic ballistic protection equipment, as well as certain intermediate protection equipment, however, it has a high probability of rebound on various surfaces.',
      purchasable: true,
      fragmentation: 40,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/55/M855ICON.png'
    },
    {
      caliber: '5.56x45mm',
      cartridge: 'M855A1',
      damage: 49,
      penpower: 44,
      velocity: 945,
      description: 'A 5.56x45mm NATO M855A1 cartridge with a 4 gram armor-piercing bullet with a steel penetrator tip over a copper alloy core with a copper semi-jacket in a brass case. This cartridge was designed to improve the penetration capabilities of the 5.56x45mm NATO M855 cartridge of the United States Army, being able to pierce basic and intermediate body ballistic protections, however, due to its design, it has a high bounce probability on various surfaces.',
      purchasable: true,
      fragmentation: 34,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/5f/M855A1ICON.png'
    },
    {
      caliber: '5.56x45mm',
      cartridge: 'M995',
      damage: 42,
      penpower: 53,
      velocity: 1013,
      description: 'A 5.56x45mm NATO M995 cartridge with a 3.4 gram armor-piercing bullet with a tungsten carbide penetrator over an aluminum base with a copper jacket, in a brass case. This cartridge was designed during the 1990s to provide United States Army personnel with capabilities to pierce light covers and light vehicles, as well as basic and intermediate ballistic body protections, in addition to providing outstanding results against some specialized protection models. However, due to its design, it has a significant bounce probability on various surfaces.',
      purchasable: false,
      fragmentation: 32,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/b6/M995ICON.png'
    },
    {
      caliber: '7.62x39mm',
      cartridge: 'PS gzh',
      damage: 57,
      penpower: 35,
      velocity: 700,
      description: " 7.62x39mm PS gzh (GAU Index - 57-N-231) cartridge with a 7.9 gram bullet with a heat-strengthened steel core with lead cladding on the tip and a bimetallic jacket, in a bimetallic case. The PS cartridge (Pulya Stalnaya; 'Steel Bullet') was introduced into service in 1949 for Soviet 7.62x39mm caliber weaponry, and over the years has undergone numerous changes in the materials used for its construction. Thanks to the tempered steel core that this model has, it is able to pierce through basic ballistic body protections as well as some intermediate models in addition to provide a significant stopping power effect, however, it has a high bounce probability off various surfaces.",
      purchasable: true,
      fragmentation: 25,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/7a/7.62x39PS.png'
    },
    {
      caliber: '7.62x39mm',
      cartridge: 'BP gzh',
      damage: 58,
      penpower: 47,
      velocity: 730,
      description: "A 7.62x39mm BP gzh (GRAU Index - 7N23) cartridge with a 7.9 gram armor-piercing bullet with a hardened carbon steel core with lead cladding on the tip and a bimetallic jacket, in a bimetallic case. This BP bullet (Broneboynaya Pulya; 'Armor-piercing Bullet') was developed in the 1990s based on the 7.62x39mm PS gzh cartridge to improve its design and penetration capabilities, as a longer and narrower reinforced steel core was chosen, allowing it to pierce through basic and intermediate body ballistic protections in addition to provide a significant stopping power effect, however, it has a significant bounce probability off various surfaces.",
      purchasable: true,
      fragmentation: 12,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/4a/7.62x39BP.png'
    },
    {
      caliber: '7.62x39mm',
      cartridge: 'US gzh',
      damage: 56,
      penpower: 29,
      velocity: 300,
      description: "A 7.62x39mm US gzh (GAU Index - 57-N-231U) cartridge with a 12.6 gram subsonic bullet with a pointed heat-strengthened steel core over a lead base with a bimetallic jacket, in a bimetallic case with a reduced charge. This US cartridge (Umenshennoy Skorosti; 'Reduced Speed') was designed in the 1950s for use in conjunction with a suppressor, achieving an excellent noise reduction in addition to ensuring the cycle of Soviet 7.62x39mm caliber weaponry and, thanks to its design, the bullet is capable of pierce through basic ballistic body protections, however, it has a high bounce probability off various surfaces.",
      purchasable: true,
      fragmentation: 7.5,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/6d/7.62x39US.png'
    },
    {
      caliber: '7.62x51mm',
      cartridge: 'M80',
      damage: 80,
      penpower: 41,
      velocity: 833,
      description: 'A 7.62x51mm NATO M80 cartridge with a 9.5 gram lead-antimony alloy core bullet with a bimetallic jacket, in a brass case. This cartridge was adopted in the United States Armed Forces as a replacement for the 7.62x51mm NATO M59 cartridge after the Vietnam War as standard ammunition, as it provides a considerable stopping power effect as well as being able to pierce through basic and intermediate body ballistic protections. However, it has a high bounce probability on various surfaces.',
      purchasable: true,
      fragmentation: 17,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/94/M80ICON.png'
    },
    {
      caliber: '7.62x51mm',
      cartridge: 'M62 Tracer',
      damage: 79,
      penpower: 44,
      velocity: 816,
      description: 'A 7.62x51mm NATO M62 cartridge with a 9.2 gram lead-antimony alloy core tracer bullet with a bimetallic jacket, in a brass case; intended for target designation and fire adjustment in battle (Trace color: Green). This cartridge was designed to provide tracing capabilities to the 7.62x51mm NATO caliber automatic weaponry used by the United States Army, being able to pierce through basic and intermediate body ballistic protections, in addition to provide a considerable stopping power effect. However, it has a high bounce probability on various surfaces.',
      purchasable: true,
      fragmentation: 14,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d8/M62ICON.png'
    },
    {
      caliber: '7.62x51mm',
      cartridge: 'M61',
      damage: 70,
      penpower: 64,
      velocity: 849,
      description: 'A 7.62x51mm NATO M61 cartridge with a 9.8 gram armor-piercing bullet with a hardened steel core with lead cladding on the tip and a copper jacket, in a brass case. This cartridge was designed in the 1950s based on the .30-06 Springfield AP M2 cartridge to provide the United States Army with an armor-piercing bullet for 7.62x51mm NATO caliber automatic weaponry, being able to pierce through the most modern specialized ballistic body protections, in addition to provide a significant stopping power effect. However, it has a significant bounce probability on various surfaces.',
      purchasable: true,
      fragmentation: 13,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e3/M61ICON.png'
    },
    {
      caliber: '9x19mm',
      cartridge: 'PST gzh',
      damage: 54,
      penpower: 20,
      velocity: 457,
      fragmentation: 15,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/df/9x19pst.png',
      description: `A 9x19mm Parabellum Pst gzh (RG057, GRAU Index - 7N21) cartridge with a 5.4 gram heat-strengthened steel core bullet with two-layer semi-jacket, a polyethylene interior and a bimetallic exterior, in a bimetallic case. This modified PS cartridge (Púlya Stal'náya - "Steel Bullet") was developed by TsNIITochMash in the early 1990s based on the 9x21mm PS gzh "SP10" cartridge to increase the penetration capabilities of Russian 9x19mm weapons against basic ballistic protections from up to 50 meters, in addition to providing better muzzle velocity.`,
      purchasable: true
    },
    {
      caliber: '9x19mm',
      cartridge: 'RIP',
      damage: 102,
      penpower: 2,
      velocity: 381,
      fragmentation: 100,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/97/9x19ripicon.png',
      description: 'RIP (Radically Invasive Projectile) ammunition is a devastatingly effective choice for the anti-personnel use. This 9mm ammo features a precision-machined solid copper lead-free projectile designed to produce huge damage to body.',
      purchasable: true
    },
    {
      caliber: '9x19mm',
      cartridge: 'PBP gzh',
      damage: 52,
      penpower: 39,
      velocity: 560,
      fragmentation: 5,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/eb/7N31Icon.png',
      description: 'The pistol cartridge with an armor-piercing bullet 7N31 is designed to defeat the enemy, including those using personal protective equipment, as well as being behind light shelters, or behind cars.',
      purchasable: false
    },
    {
      caliber: '4.6x30mm',
      cartridge: 'FMJ SX',
      damage: 43,
      penpower: 40,
      velocity: 620,
      fragmentation: 20,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/c8/4.6x30FMJIcon.png',
      description: 'Cartridge with FMJ bullet 4.6x30mm.',
      purchasable: true
    },
    {
      caliber: '4.6x30mm',
      cartridge: 'Subsonic SX',
      damage: 45,
      penpower: 36,
      velocity: 290,
      fragmentation: 20,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/3c/4.6x30SubsonicIcon.png',
      description: 'Cartridge with subsonic bullet 4.6x30mm.',
      purchasable: true
    },
    {
      caliber: '5.7x28mm',
      cartridge: 'R37.F',
      damage: 98,
      penpower: 8,
      velocity: 729,
      fragmentation: 100,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/6f/R37F_icon.png',
      description: 'A 5.7x28mm FN R37.F cartridge with a 2.4 gram hollow-point bullet made entirely of copper, in a brass case.  The bullet is designed to fragment upon impact, turning the bullet tip into three razor sharp petals, granting an outstanding stopping power effect as well as causing substantial negative effects on the target after impact, at the cost of penetration capabilities, even against basic ballistic protection.',
      purchasable: false
    },
    {
      caliber: '5.7x28mm',
      cartridge: 'SB193',
      damage: 54,
      penpower: 35,
      velocity: 299,
      fragmentation: 20,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e5/57x28mmSB193Icon.png',
      description: 'A 5.7x28mm FN SB193 cartridge with a 4 gram lead core subsonic bullet with a reinforced copper jacket, in a brass case with a reduced charge.  The powder load in this cartridge is adjusted to ensure the weapons fire cycling when fired from the FN Five-seveN pistol and the FN P90 submachine gun, achieving excellent noise reduction when used in conjunction with a suppressor, and despite its low muzzle velocity, the bullet has ballistic capabilities to pierce basic ballistic body protections and provides excellent results against intermediate protection models, however, due to its design, it has a significant bounce probability off various surfaces.',
      purchasable: true
    },
    {
      caliber: '5.7x28mm',
      cartridge: 'SS190',
      damage: 49,
      penpower: 37,
      velocity: 715,
      fragmentation: 20,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/62/57x28mmSS190Icon.png',
      description: 'A 5.7x28mm FN SS190 cartridge with a 2 gram armor-piercing bullet with a steel penetrator over an aluminum core with a reinforced copper jacket, in a brass case. Thanks to its muzzle velocity and design, this cartridge is capable of piercing basic ballistic body protections and provides excellent results against intermediate protection models, however, due to its design, it has a high bounce probability off various surfaces.',
      purchasable: true
    },
    {
      caliber: '5.45x39mm',
      cartridge: '7N40',
      damage: 52,
      penpower: 44,
      velocity: 915,
      fragmentation: 2,
      img: 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/21/7N40.png/',
      description: 'The newest legendary cartridge with increased accuracy of fire 7N40. Made as part of the Ratnik program together with 7N39 “Igolnik”.',
      purchasable: false
    }
  ]
  


module.exports = seed;