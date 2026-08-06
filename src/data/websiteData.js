export const MOSQUITO_SPECIES_DATA = [
  {
    id: 'aedes',
    name: 'Aedes Aegypti (Dengue Mosquito)',
    tag: 'Highest Hazard',
    color: 'bg-rose-500',
    activity: 'Daytime Biter (7 AM - 5 PM)',
    threat: 'Transmits Dengue Fever, Chikungunya & Zika Virus',
    habitat: 'Clean stagnant water in plant pots, saucers, balcony pebbles, AC trays',
    eradication: 'Targeted botanical cold misting on indoor resting spots + balcony barrier'
  },
  {
    id: 'anopheles',
    name: 'Anopheles (Malaria Mosquito)',
    tag: 'Severe Threat',
    color: 'bg-amber-500',
    activity: 'Dusk till Dawn Biter (6 PM - 6 AM)',
    threat: 'Transmits Malaria Parasites & High Fever',
    habitat: 'Outdoor garden bushes, shaded lawns, overhead tanks & gutters',
    eradication: 'Outdoor foliage residual misting + perimeter thermal fogging'
  },
  {
    id: 'culex',
    name: 'Culex (Nuisance Mosquito)',
    tag: 'High Nuisance',
    color: 'bg-emerald-600',
    activity: 'Nighttime Buzzing Biter',
    threat: 'Causes severe skin welts, allergic itching & Filariasis risk',
    habitat: 'Drainage sumps, stagnant basement water & elevator pits',
    eradication: 'BTI anti-larval bio-treatment in sumps + ULV wall fogging'
  }
];

export const CALCULATOR_OPTIONS = {
  propertyTypes: [
    { label: '2BHK Apartment (1000 - 1300 sq ft)', score: 2, price: '₹1,499' },
    { label: '3BHK / 4BHK Apartment (1400 - 2500 sq ft)', score: 3, price: '₹1,999' },
    { label: 'Gated Villa & Private Garden (3000+ sq ft)', score: 5, price: '₹2,999' },
    { label: 'Commercial Office / IT Park', score: 4, price: 'Custom Quote' },
    { label: 'Restaurant / Outdoor Dining Space', score: 4, price: '₹2,499' }
  ],
  severities: [
    { label: 'Severe Mosquito Swarms & Bites Daily', threat: 'CRITICAL (Dengue Hazard Level 92%)' },
    { label: 'Moderate Mosquitoes in Balcony & Garden', threat: 'HIGH (Dengue Risk 74%)' },
    { label: 'Occasional Buzzing & Stagnant Water Nearby', threat: 'MODERATE (Risk Level 45%)' }
  ]
};

export const SERVICES_DATA = [
  {
    id: 'residential',
    title: 'Residential Mosquito Micro-Misting',
    category: 'residential',
    tag: 'Most Popular',
    image: '/assets/hero.png',
    price: '₹1,499',
    description: '3-Stage odourless botanical micro-mist treatment targeting indoor corners, curtains, furniture undersides, and balcony vegetation.',
    features: [
      '100% Odourless & Non-Staining Formula',
      'Safe for Babies, Pregnant Women & Pets',
      'Targeted Wall & Ceiling Cold Fogging',
      'Includes 90-Day Free Callback Warranty'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial & Corporate IT Parks',
    category: 'commercial',
    tag: 'Enterprise',
    image: '/assets/commercial.png',
    price: 'Custom Quote',
    description: 'Discreet non-intrusive vector management for corporate offices, IT hubs, and commercial complexes across Hitech City & Gachibowli.',
    features: [
      'After-Hours / Weekend Operation',
      'ISO & Green Building Compliance Certs',
      'Zero Workplace Downtime Guarantee',
      'Dedicated Key Account Manager'
    ]
  },
  {
    id: 'apartment',
    title: 'Apartments & Gated Communities',
    category: 'residential',
    tag: 'Community',
    image: '/assets/family.png',
    price: '₹4,999 / block',
    description: 'Comprehensive block-wide treatment for high-rise residential towers including basements, elevator shafts, and clubhouses.',
    features: [
      'Basement Anti-Larval Spraying',
      'Common Area Micro-Fogging',
      'Society Maintenance Discount',
      'Quarterly Scheduled Visits'
    ]
  },
  {
    id: 'villa',
    title: 'Luxury Villa & Estate Treatment',
    category: 'residential',
    tag: 'Premium',
    image: '/assets/hero.png',
    price: '₹2,999',
    description: 'Bespoke indoor and perimeter barrier treatment designed specifically for multi-story gated villas and private estates.',
    features: [
      'Perimeter Barrier Shield Creation',
      'Private Lawns & Patio Protection',
      'Water Feature Larval Bio-Control',
      'VIP Emergency Response (<2 hrs)'
    ]
  },
  {
    id: 'hospital',
    title: 'Hospitals & Healthcare Facilities',
    category: 'specialized',
    tag: 'Medical Grade',
    image: '/assets/commercial.png',
    price: 'Custom Quote',
    description: 'Medical-grade zero-residual vector control engineered strictly for ICUs, patient wards, operation theaters, and hospital gardens.',
    features: [
      'WHO-Prequalified Safe Chemicals',
      'Sterile Zone Compliant Methods',
      'Complete Bacterial & Vector Elimination',
      '24/7 Priority Emergency Support'
    ]
  },
  {
    id: 'office',
    title: 'Office Workspaces & Co-Working',
    category: 'commercial',
    tag: 'Corporate',
    image: '/assets/commercial.png',
    price: '₹3,499',
    description: 'Protects staff from daytime biters (Aedes aegypti) to ensure high productivity and employee health safety.',
    features: [
      'Desk & Server Room Safe',
      'Bi-Weekly / Monthly Plans',
      'Air Quality Compliance Report',
      'Complimentary Sanitization'
    ]
  },
  {
    id: 'restaurant',
    title: 'Restaurants, Cafes & Open Dining',
    category: 'commercial',
    tag: 'Hospitality',
    image: '/assets/garden.png',
    price: '₹2,499',
    description: 'Ensures outdoor al-fresco dining areas and kitchen perimeters remain completely mosquito-free for patrons.',
    features: [
      'Food-Safe Non-Toxic Botanicals',
      'Outdoor Dining Mist Barrier',
      'Fly & Gnat Secondary Barrier',
      'Flexible Late-Night Schedules'
    ]
  },
  {
    id: 'warehouse',
    title: 'Warehouses & Logistics Hubs',
    category: 'specialized',
    tag: 'Industrial',
    image: '/assets/commercial.png',
    price: 'Custom Quote',
    description: 'High-volume thermal fogging and larvicide treatments for extensive storage yards, loading bays, and dispatch hubs.',
    features: [
      'Heavy-Duty Thermal Fogging',
      'Stagnant Water Drain Treatment',
      'Long-Lasting Residual Film',
      'Safety Compliance Certification'
    ]
  },
  {
    id: 'industrial',
    title: 'Industrial Units & Factories',
    category: 'specialized',
    tag: 'Industrial',
    image: '/assets/commercial.png',
    price: 'Custom Quote',
    description: 'Large-scale vector eradication designed to safeguard factory workers from vector-borne disease outbreaks.',
    features: [
      'Factory Worker Zone Defense',
      'Drainage Channel Treatment',
      'Environmental Health Audit',
      'Monthly Retainer Packages'
    ]
  },
  {
    id: 'garden',
    title: 'Landscape & Garden Fogging',
    category: 'outdoor',
    tag: 'Eco-Green',
    image: '/assets/garden.png',
    price: '₹1,999',
    description: 'Targeted eco-friendly misting on foliage, bushes, flowerbeds, and shade zones where adult mosquitoes rest during daylight.',
    features: [
      'Plant-Safe Natural Actives',
      'Protects Beneficial Bees & Ladybugs',
      'Foliage Residual Barrier (30 Days)',
      'Ideal Before Outdoor Parties'
    ]
  },
  {
    id: 'fogging',
    title: 'Outdoor Thermal Heavy Fogging',
    category: 'outdoor',
    tag: 'High Capacity',
    image: '/assets/garden.png',
    price: '₹2,199',
    description: 'Rapid dense fogging designed to knock down massive adult mosquito swarms in outdoor open spaces & construction sites.',
    features: [
      'Instant Knockdown Technology',
      'High-Density Fog Penetration',
      'Covers Up to 20,000 Sq. Ft.',
      'Ideal for Events & Gatherings'
    ]
  },
  {
    id: 'mist_system',
    title: 'Automated Mosquito Mist Systems',
    category: 'outdoor',
    tag: 'Smart Tech',
    image: '/assets/garden.png',
    price: '₹14,999',
    description: 'Smart IoT automated perimeter misting nozzles installed around villa garden fences that spray automatically twice daily.',
    features: [
      'Mobile App Controlled Timer',
      'Discreet Precision Nozzles',
      'Automated Refill Service',
      'Permanent Outdoor Solution'
    ]
  },
  {
    id: 'larvae',
    title: 'Anti-Larval Bio-Control Treatment',
    category: 'specialized',
    tag: 'Preventative',
    image: '/assets/hero.png',
    price: '₹999',
    description: 'Biological BTI larvicide application in sumps, overhead tanks, stormwater drains, and stagnant water to kill larvae before hatching.',
    features: [
      'Stops Breeding Cycle at Source',
      'Potable Water Safe (BTI Spores)',
      'Treats Sumps & Overhead Tanks',
      'Environmentally Sustainable'
    ]
  }
];

export const WHY_CHOOSE_US_DATA = [
  {
    icon: 'ShieldCheck',
    title: 'Govt & CGB Licensed Experts',
    desc: 'Fully registered with Central Insecticides Board & Government health authorities for approved vector management.'
  },
  {
    icon: 'Award',
    title: '10+ Years Hyderabad Proven Track Record',
    desc: 'Over a decade of specialized mosquito eradication experience across Hyderabad’s unique micro-climates.'
  },
  {
    icon: 'Zap',
    title: 'Rapid 2-Hour Express Response',
    desc: 'Same-day emergency treatment teams dispatched across Gachibowli, Hitech City, Jubilee Hills & major hubs.'
  },
  {
    icon: 'Tag',
    title: 'Transparent & Flat Pricing',
    desc: 'Zero hidden fees, zero surprise surcharges. Transparent quotes provided up front before work begins.'
  },
  {
    icon: 'Sparkles',
    title: 'Odorless & Non-Toxic Formulas',
    desc: 'Advanced botanical micro-emulsion sprays that leave zero harsh chemical smells or residue on furniture.'
  },
  {
    icon: 'Heart',
    title: '100% Pet & Child Safe Guarantee',
    desc: 'Eco-certified formulations engineered to eliminate mosquitoes while remaining harmless to kids & pets.'
  },
  {
    icon: 'Cpu',
    title: 'German Cold Fogging Technology',
    desc: 'Utilizing ultra-low volume (ULV) cold mist machines that reach hidden cracks, foliage undersides, and vents.'
  },
  {
    icon: 'RefreshCw',
    title: '90-Day Unconditional Callback Warranty',
    desc: 'If mosquitoes reappear within your warranty period, our technicians re-treat your premises completely free of charge.'
  }
];

export const AREAS_WE_SERVE = [
  { name: 'Gachibowli', zip: '500032', time: '15-30 mins', tag: 'High Priority', hotspots: 'DLF Cyber City, Financial District, ORR Junction' },
  { name: 'Hitech City', zip: '500081', time: '15-30 mins', tag: 'Popular', hotspots: 'Cyber Towers, Mindspace, Raheja IT Park' },
  { name: 'Madhapur', zip: '500081', time: '20-30 mins', tag: 'Popular', hotspots: '100ft Road, Durgam Cheruvu View, Kavuri Hills' },
  { name: 'Kondapur', zip: '500084', time: '20-35 mins', tag: 'Popular', hotspots: 'Botanical Garden Rd, Hafeezpet, Kothaguda' },
  { name: 'Jubilee Hills', zip: '500033', time: '25-40 mins', tag: 'Luxury Estate', hotspots: 'Road No. 36, Peddamma Temple, Film Nagar' },
  { name: 'Banjara Hills', zip: '500034', time: '25-40 mins', tag: 'Luxury Estate', hotspots: 'Road No. 1, 12, GVK One Mall Area' },
  { name: 'Kukatpally', zip: '500072', time: '30-45 mins', tag: 'High Volume', hotspots: 'KPHB Colony, Forum Mall, JNTU Circle' },
  { name: 'Miyapur', zip: '500049', time: '30-45 mins', tag: 'Residential', hotspots: 'Miyapur X Roads, Bachupally Rd, Ameenpur' },
  { name: 'Financial District', zip: '500032', time: '15-30 mins', tag: 'Corporate Hub', hotspots: 'Nanakramguda, Kokapet, Neopolis' },
  { name: 'Tellapur', zip: '500019', time: '25-40 mins', tag: 'Gated Villas', hotspots: 'My Home Bhooja, Aparna Cyber Life Zone' },
  { name: 'Manikonda', zip: '500089', time: '25-45 mins', tag: 'Residential', hotspots: 'Lanco Hills, Puppalguda, Khajaguda' },
  { name: 'Begumpet & Secunderabad', zip: '500016', time: '35-50 mins', tag: 'Central Metro', hotspots: 'Penderghast Rd, M.G. Road, Paradise' }
];

export const TESTIMONIALS_DATA = [
  {
    name: 'Srikanth Reddy',
    location: 'Jubilee Hills, Villa Owner',
    rating: 5,
    date: '2 Days Ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    review: 'MosquiShield transformed our evening garden experience! Before their treatment, sitting on our lawn after 6 PM was impossible due to swarms. Their odorless mist eliminated every single mosquito without harming our pet Labrador. Highly recommended!'
  },
  {
    name: 'Priyanka Sharma',
    location: 'Gachibowli, DLF Cybercity Society',
    rating: 5,
    date: '1 Week Ago',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    review: 'During Dengue season in Hyderabad, we were terrified for our 2-year-old daughter. MosquiShield came within 2 hours of booking! The technicians were extremely polite, wore shoe covers, and explained every safety detail. Zero smell, total peace of mind.'
  },
  {
    name: 'Vikram Varma',
    location: 'Hitech City, IT Park Admin Head',
    rating: 5,
    date: '3 Weeks Ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    review: 'We hired MosquiShield for our 45,000 sq ft office facility. Their weekend treatment resulted in an immediate 100% reduction in indoor mosquito complaints. The ISO compliance certification provided to our facility team was top notch.'
  },
  {
    name: 'Ananya Rao',
    location: 'Kondapur, Apartment Secretary',
    rating: 5,
    date: '1 Month Ago',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    review: 'Our 120-flat apartment community contracted MosquiShield for quarterly anti-larval and basement fogging. Their pricing is ultra fair and their 90-day warranty service is 100% genuine. When we asked for a follow-up, they came the next morning!'
  }
];

export const FAQ_DATA = [
  {
    q: 'How safe are your mosquito control chemicals for children, elderly parents, and pets?',
    a: 'Safety is our #1 priority. We use WHO-prequalified, CIB-approved botanical micro-emulsions that are completely non-toxic and odorless once dry (approx. 20-30 minutes). Children and pets can safely return to the treated areas shortly after.'
  },
  {
    q: 'How long does a single MosquiShield treatment last in Hyderabad?',
    a: 'Our 3-Stage micro-mist creates an active residual barrier on surfaces that repels and kills adult mosquitoes for up to 45–90 days, depending on rainfall and foliage exposure. We also back all residential services with a 90-Day Guarantee.'
  },
  {
    q: 'Is there any foul smell, smoke, or oily residue left on furniture?',
    a: 'None whatsoever! Unlike traditional diesel-based outdoor thermal fogging, our indoor cold mist treatments are completely odorless, water-based, and non-staining. Your curtains, leather sofas, and walls remain 100% pristine.'
  },
  {
    q: 'Do I need to pack or cover up household items before technicians arrive?',
    a: 'Minimal preparation is needed. We ask you to store away exposed cooked food and drinking water vessels. All other furniture, electronics, and clothing can remain right where they are.'
  },
  {
    q: 'How fast can a MosquiShield technician arrive at my location in Hyderabad?',
    a: 'We offer Same-Day Express Service! Technicians are stationed across key Hyderabad hubs including Gachibowli, Hitech City, Kondapur, Jubilee Hills, and Kukatpally, enabling us to arrive within 2 hours of your booking.'
  },
  {
    q: 'What is the difference between indoor cold misting and outdoor fogging?',
    a: 'Indoor cold misting uses micro-fine droplets of eco-friendly actives that settle on resting spots like walls and under furniture without smoke. Outdoor fogging uses thermal smoke generators to quickly knock down flying swarms in large open gardens and yards.'
  },
  {
    q: 'How do you target mosquito breeding in stagnant water sumps or overhead tanks?',
    a: 'We apply specialized biological BTI (Bacillus thuringiensis israelensis) larvicides into water storage units. BTI targets mosquito and fly larvae exclusively, rendering the water 100% safe for human domestic use while killing larvae within hours.'
  },
  {
    q: 'What vector-borne diseases does MosquiShield protect against?',
    a: 'Our treatments eliminate both daytime biters (Aedes aegypti - carrier of Dengue, Chikungunya, Zika) and night biters (Anopheles - carrier of Malaria, and Culex - carrier of Filariasis).'
  },
  {
    q: 'What happens if I notice mosquitoes returning during the warranty period?',
    a: 'Simply call or WhatsApp our hotline. Under our 90-Day Callback Warranty, a certified technician will visit your site within 24 hours and perform a full re-treatment free of cost.'
  },
  {
    q: 'How much does mosquito treatment cost for a 2BHK or 3BHK flat in Hyderabad?',
    a: 'Our residential packages start at just ₹1,499 for standard apartments. We provide transparent upfront pricing with zero hidden charges before starting any work.'
  },
  {
    q: 'Are your technicians licensed and background verified?',
    a: 'Yes! Every technician is police-verified, background checked, government licensed (CGB certified), and trained in modern pest management safety standards.'
  },
  {
    q: 'Do you offer annual maintenance contracts (AMC) for apartments & villas?',
    a: 'Yes, our AMC plans offer 3 or 4 scheduled visits per year at discounted rates up to 35% off, ensuring 365-day round-the-year mosquito protection.'
  },
  {
    q: 'Is your treatment effective during the heavy monsoon season in Hyderabad?',
    a: 'Yes! Monsoon is mosquito peak season. We apply weather-resistant rain-fast micro-capsule formulas outdoors that adhere to leaf undersides even after monsoon showers.'
  },
  {
    q: 'Can I stay inside the house while the treatment is being applied?',
    a: 'We recommend stepping out into the balcony or living room for 20-30 minutes during spraying of a specific room, allowing the mist to settle before re-entering.'
  },
  {
    q: 'How do I schedule a free site inspection?',
    a: 'You can book directly via our online form, click the WhatsApp button, or call our 24/7 helpline at +91 98765 43210. Our team will instantly confirm your preferred slot.'
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Hyderabad Dengue Alert: 7 Critical Hidden Mosquito Breeding Spots in Gated Communities',
    category: 'Prevention Guide',
    date: 'Aug 04, 2026',
    readTime: '4 min read',
    image: '/assets/hero.png',
    excerpt: 'Dengue-carrying Aedes mosquitoes breed in as little as 1 tablespoon of clean water. Discover the top hidden spots in your balcony and basement.',
    content: `Dengue outbreaks in Hyderabad peak during the monsoon months between July and November. Unlike ordinary mosquitoes, Aedes aegypti mosquitoes are aggressive daytime biters that breed predominantly in clean, stagnant water inside or near human dwellings.

### Top 7 Hidden Breeding Hotspots:
1. **Air Conditioner Condensate Trays**: Water collected behind split AC units provides an ideal undisturbed nursery.
2. **Refrigerator Drip Trays**: Often overlooked, the warm tray behind your fridge accumulates stagnant defrost water.
3. **Potted Plant Saucers**: Excess irrigation water sitting under indoor pots is the #1 breeding ground in high-rise apartments.
4. **Elevator Pit Sumps**: Basements in Gachibowli and Kondapur gated societies frequently pool water in elevator shafts.
5. **Terrace Drain Gutters**: Clogged dry leaves on rooftops hold rainwater during monsoon showers.
6. **Balcony Decorative Pebbles**: Water trapped beneath decorative garden stones creates ideal micro-habitats.
7. **Overhead Water Tank Lids**: Cracked or misaligned lids allow mosquitoes to lay thousands of eggs in drinking water storage.

### Professional Defense Strategy
While emptying standing water weekly is vital, microscopic eggs can survive dry conditions for up to 8 months. Professional BTI bio-larvicide and cold misting are required to completely break the reproduction cycle.`
  },
  {
    id: 2,
    title: 'Cold Misting vs. Diesel Thermal Fogging: Which Mosquito Treatment Is Superior?',
    category: 'Tech Comparison',
    date: 'Jul 28, 2026',
    readTime: '6 min read',
    image: '/assets/garden.png',
    excerpt: 'Why modern Hyderabad homeowners are switching from smoky diesel fogging to advanced eco-friendly cold mist technology.',
    content: `For decades, municipal vector control relied on heavy diesel fogging. However, modern urban pest control has undergone a revolutionary shift toward Ultra-Low Volume (ULV) Cold Misting.

### Key Differences:
- **Droplet Size**: Cold misters generate micron-level droplets (10–30 microns) that stay suspended in the air longer and adhere to indoor foliage undersides, whereas smoke fogging dissipates into thin air within minutes.
- **Odor & Stains**: Diesel fogging leaves unpleasant oily residues on windows and pungent exhaust odors. Botanical cold misting is 100% odorless, water-based, and non-staining.
- **Indoor Safety**: Diesel smoke cannot be used safely inside bedrooms or ICUs. Cold misting is specifically engineered for safe indoor residential applications.`
  },
  {
    id: 3,
    title: 'How Botanical Bio-Larvicides Eliminate Mosquitoes Without Harming Pets or Plants',
    category: 'Eco Science',
    date: 'Jul 15, 2026',
    readTime: '5 min read',
    image: '/assets/family.png',
    excerpt: 'Explore the bio-tech science behind BTI spores and plant-derived pyrethrum extracts that keep your family 100% safe.',
    content: `Traditional chemical pesticides raised valid concerns regarding indoor air quality and toxicity to household pets. Modern eco-friendly mosquito control utilizes *Bacillus thuringiensis israelensis* (BTI) — a naturally occurring soil bacterium.

### How BTI Biological Control Works:
When BTI crystal proteins are introduced into stagnant water, mosquito and blackfly larvae ingest the proteins. The alkaline gut environment of the larva activates the protein, neutralizing the larva within 2 to 12 hours. 

Because mammals, birds, fish, and beneficial insects like honeybees have acidic digestive systems, BTI is entirely harmless to humans, pets, and non-target wildlife.`
  }
];

export const GALLERY_ITEMS = [
  { id: 1, title: 'Villa Garden Mist Barrier', category: 'Outdoor Fogging', image: '/assets/garden.png' },
  { id: 2, title: 'High-Rise Balcony Micro Misting', category: 'Residential', image: '/assets/hero.png' },
  { id: 3, title: 'IT Park Lobby Vector Sanitization', category: 'Commercial', image: '/assets/commercial.png' },
  { id: 4, title: 'Family Safe Living Room Spray', category: 'Residential', image: '/assets/family.png' },
  { id: 5, title: 'Resort Swimming Pool Mosquito Shield', category: 'Outdoor Fogging', image: '/assets/garden.png' },
  { id: 6, title: 'Corporate HQ Basement Larval Control', category: 'Larval Control', image: '/assets/commercial.png' }
];
