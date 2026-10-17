export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  location: string;
  geography: string;
  year: string;
  scale: string;
  scaleMetric: string;
  status: string;
  heroImage: string;
  galleryImages: { url: string; caption: string }[];
  overview: string;
  architecturalChallenge: string;
  materials: { name: string; code: string; role: string }[];
  blueprintUrl?: string;
  photographer?: string;
  curator?: string;
}

export interface MaterialItem {
  code: string;
  name: string;
  subtitle: string;
  origin: string;
  imageUrl: string;
  description: string;
  technicalSpecs: {
    acousticCoefficient: string;
    thermalMass: string;
    finish: string;
    patinaEvolution: string;
    maintenance: string;
  };
  provenanceDetails: string;
  relatedProjects: string[];
}

export interface PracticeDiscipline {
  number: string;
  iconName: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface MonographEssay {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  role: string;
  readTime: string;
  date: string;
  excerpt: string;
  fullText: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'villa-cap-dantibes',
    title: "Villa Cap d'Antibes",
    subtitle: "Private Maritime Residence & Coastal Sanctuary",
    category: "Residential Architecture",
    tags: ["Residential Architecture", "Coastal Sanctuary", "Limestone Monolith"],
    location: "Antibes, Côte d'Azur",
    geography: "Côte d'Azur, France",
    year: "2024",
    scale: "780 m²",
    scaleMetric: "780 m² / Complete Architecture & Landscape",
    status: "Completed",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNI-p3g4uadurUrj9iXuh0toTtju36tqacRfthdv9l8zNzbkQj6lRDX35iJcj_a6IdpuOvGj5rzF6jQNNvzDVKHIx_9MhocpB-GRCsxMCjgP6s2Czm7o-w9ecYnEdzdJUVE-L4YCfbwMQqWCTR-NsBkTYOqijBsXhfK9rr3E3Y-L3c2EtZMNQsALxD8T9Votvuof5OxVeGk6uxgvFPiXIIAxBrsg9njDg46fmersNHb--PYhHslFg3",
    galleryImages: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNI-p3g4uadurUrj9iXuh0toTtju36tqacRfthdv9l8zNzbkQj6lRDX35iJcj_a6IdpuOvGj5rzF6jQNNvzDVKHIx_9MhocpB-GRCsxMCjgP6s2Czm7o-w9ecYnEdzdJUVE-L4YCfbwMQqWCTR-NsBkTYOqijBsXhfK9rr3E3Y-L3c2EtZMNQsALxD8T9Votvuof5OxVeGk6uxgvFPiXIIAxBrsg9njDg46fmersNHb--PYhHslFg3",
        caption: "Main salon overlooking Mediterranean pine canopies with low washed linen furnishings."
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg98kbJKc2FavBa0_8n4iJeG0Ob2KO1sNna8cFAnOlDUaHnGPKN_3La1eEr54-jsOZ7egX9pbk8pmtvoq7WVZ4yAywNwVWMjcArW4W8ZfASkVbyTksnZTAHWSrBRPkWec0H8ZapRehknZR_V3nTf9ARQXHX6zZyyJZ89r_3KRV9xmSruDnNzCDZspOu2KvOVxatjAk3ZutfvLIlPad4fypm88Kv7ZuoSdPRGTZt8OQOaGlpcQDPi16",
        caption: "Honed porous travertine flooring transition connecting interior colonnade to exterior terrace."
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjbkTbkZBR_KpRTn2Ye6X3g_3sGK3UK4Gg1NH2XKWcKZc8yimXK0SoAQKPdMXKvv4Hg9sy1fVsMrng_YepMhBMSlGHBun1Y9ejGI07LWa_6L4r4IQNoXeaTuikuLR_BmGXqB85mL_Q9l-qoCgOTgWk7haHCmsjDjNTe0U9EvzuqBDeeBMoWE8zLSuPlBvf9A9gXQCGx-mlAurGQ7f-wyCCU8DtTaMa3zez2alatxLkHUvrN5AiBtmg",
        caption: "Seven-layer artisanal lime plaster interior envelope absorbing harsh southern sunlight."
      }
    ],
    overview: "Set upon a pine-crested promontory above the Mediterranean, Villa Cap d'Antibes is conceived as a habitable stone outcropping. Honed French travertine floors run without threshold from sheltered interior courtyards into open terraces, creating continuous thermal mass that stabilizes the microclimate throughout summer days.",
    architecturalChallenge: "Mitigating intense maritime glare while orchestrating cooling cross-ventilation breezes across 780 square meters of stepped terrain without mechanical intrusion.",
    materials: [
      { name: "Raw French Travertine", code: "M-01", role: "Continuous monolithic flooring and cantilevered steps" },
      { name: "Slaked Lime Plaster", code: "M-03", role: "Acoustic envelope and mineral walls" },
      { name: "Antiqued Living Brass", code: "M-04", role: "Bespoke recessed pivot door fittings" }
    ],
    photographer: "François Halard",
    curator: "Atelier Vaucluse Paris"
  },
  {
    id: 'tribeca-penthouse',
    title: "The Tribeca Penthouse",
    subtitle: "Duplex Sanctuary Above Franklin Street",
    category: "Residential Architecture",
    tags: ["Residential Architecture", "Interior Curation"],
    location: "New York • 2024",
    geography: "SoHo / Tribeca, New York",
    year: "2024",
    scale: "480 m² (5,200 sq ft)",
    scaleMetric: "Scale: 480 m² / Complete Renovation",
    status: "Completed",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmpchcpYrIZeRDj7JFsF4uBsZtwSNnAr3IHGmCs4kNSSFRD1O6pNf-IPgmbN3aT6nTqFmd7J4d_qvebNr2BWoxf0DkYTT4RB8Ng5ORqnlLGDxD9KWzeUPcwVbNTeErQP3CCeeSS8h82EtJKyPXHy3dq7DabX3gtlWNzSezvaLiezfpNUQfY5fH0aKGiNutJ3XG-ATYyWzS-_ir-OkP6_SzR8csRN71JbPq3Cjr9zWAixqe1NIJvTk1",
    galleryImages: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmpchcpYrIZeRDj7JFsF4uBsZtwSNnAr3IHGmCs4kNSSFRD1O6pNf-IPgmbN3aT6nTqFmd7J4d_qvebNr2BWoxf0DkYTT4RB8Ng5ORqnlLGDxD9KWzeUPcwVbNTeErQP3CCeeSS8h82EtJKyPXHy3dq7DabX3gtlWNzSezvaLiezfpNUQfY5fH0aKGiNutJ3XG-ATYyWzS-_ir-OkP6_SzR8csRN71JbPq3Cjr9zWAixqe1NIJvTk1",
        caption: "Double-height salon with bespoke smoked walnut paneling and monumental Belgian bluestone hearth."
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4B6AWojuAl4pxeRuXMlilOlJq3-hYqT9COYSiU1uP4isxPpv-rdUXdPWomkp6lICbruvJVmQ5H6i5_IS0RZYJxaO1QHHHPh8jtUIk2rHCXH3fCSmOHOiabohyb80xvkE-H-ef2v88h1zRHxvi_rN0Ou-j1xoT-AKCDtwmXM7nPWBydnX7layOZAzLkY5causw2LvkSfuUZuXb6y3IcML5p37H9G0j88oiHCgDSVqtVRqeR23Xe0IU",
        caption: "Smoked oak custom joinery details fumed with natural vapors in our Swiss workshop."
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX0wQbyvWYe4aJmN1KRZ3lfxbB3Y573L0mfqO6MpnPqvRkQww9JyGeXVj_923bcJFqRCJgpgthitXmLLIor9X_lu6hqKMpR7Y_TpXKOVPAUc5locroHMh9ITE3pMqAjxD33LdzhF8n0mwMsOmvgU_IFaXQYfZLs2NCLgN7Ode9I7LMDpr6BlpWFSJ8c6lTtYzgZ4sPSNKochjC2Ri80n9h2YFc0MfKY0RQAwQdZWpIV_iR52tcmjRW",
        caption: "Bespoke unlacquered brass pivot hardware created specifically for the penthouse library."
      }
    ],
    overview: "5,200 sq ft duplex loft synthesized through bespoke smoked walnut partitions, honed Belgian blue stone hearths, and handcrafted patinated brass fittings. The architectural scheme strips away cosmetic embellishments to establish a quiet sanctuary high above Lower Manhattan.",
    architecturalChallenge: "Integrating acoustic insulation rated to STC 64 within historic cast-iron shell structural columns without decreasing visible volumetric ceiling heights.",
    materials: [
      { name: "Smoked White Oak", code: "M-02", role: "Continuous floorboards and wall linings" },
      { name: "Belgian Blue Stone", code: "M-05", role: "Suspended monolithic hearth and kitchen counters" },
      { name: "Cold-Forged Brass", code: "M-04", role: "Handcrafted architectural ironmongery" }
    ],
    photographer: "Stephen Kent Johnson",
    curator: "Atelier Vaucluse New York"
  },
  {
    id: 'residence-de-provence',
    title: "Résidence de Provence",
    subtitle: "Restoration of a 17th-Century Bastide",
    category: "Heritage Adaptive Reuse",
    tags: ["Heritage Adaptive Reuse", "Bastide Restoration", "Dry-Stacked Stone"],
    location: "Gordes, FR",
    geography: "Gordes, Luberon",
    year: "2023",
    scale: "620 m²",
    scaleMetric: "Scale: 620 m² / Historic Conservation",
    status: "Completed",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_gMt04wz1E2L0bYFPT4DK9dGrnMxG77-p0lDYJKQE_NB5rTtL9OcU9odkPDLxKynaDK212cFoLZvv__-c8C2KX1GbGTDEimQWKRLKzUqLvsX8LjBLWWX0fa_OmQ1y0vkxHyIBx0WshlUWwRaYji24jukxxPpA9yIk8acxu7QMIEBPLlhjbMRxpZEajBtZDecq3czi1ebV3-SivOWnWcQqhMfk9c8G_p7w4qvfKiCHMNsXcNq-l0kR",
    galleryImages: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_gMt04wz1E2L0bYFPT4DK9dGrnMxG77-p0lDYJKQE_NB5rTtL9OcU9odkPDLxKynaDK212cFoLZvv__-c8C2KX1GbGTDEimQWKRLKzUqLvsX8LjBLWWX0fa_OmQ1y0vkxHyIBx0WshlUWwRaYji24jukxxPpA9yIk8acxu7QMIEBPLlhjbMRxpZEajBtZDecq3czi1ebV3-SivOWnWcQqhMfk9c8G_p7w4qvfKiCHMNsXcNq-l0kR",
        caption: "Minimalist kitchen intervention featuring blackened bronze island and antique Luberon stone."
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjbkTbkZBR_KpRTn2Ye6X3g_3sGK3UK4Gg1NH2XKWcKZc8yimXK0SoAQKPdMXKvv4Hg9sy1fVsMrng_YepMhBMSlGHBun1Y9ejGI07LWa_6L4r4IQNoXeaTuikuLR_BmGXqB85mL_Q9l-qoCgOTgWk7haHCmsjDjNTe0U9EvzuqBDeeBMoWE8zLSuPlBvf9A9gXQCGx-mlAurGQ7f-wyCCU8DtTaMa3zez2alatxLkHUvrN5AiBtmg",
        caption: "Restored slaked lime mortar jointing in the vaulted subterranean cellar."
      }
    ],
    overview: "17th-century stone bastide transformed into a tranquil contemporary retreat, honoring dry-stacked lime masonry and raw timber trusses. Every stone was dismantled, catalogued, and re-bedded in traditional hydraulic lime according to Bâtiments de France conservation standards.",
    architecturalChallenge: "Introducing modern underfloor geothermal conditioning beneath 300-year-old terracotta tiles without disturbing historic foundations.",
    materials: [
      { name: "Dry-Stacked Luberon Stone", code: "M-06", role: "Structural perimeter walls" },
      { name: "Slaked Hydraulic Lime", code: "M-03", role: "Breathing mortar and interior plaster" },
      { name: "Aged Provençal Chestnut", code: "M-07", role: "Exposed roof timbers and interior portals" }
    ],
    photographer: "Romain Laprade",
    curator: "Atelier Vaucluse Paris"
  },
  {
    id: 'casa-sylvan',
    title: "Casa Sylvan",
    subtitle: "Kyoto Forest Pavilion & Bathhouse",
    category: "Pavilion Architecture",
    tags: ["Pavilion Architecture", "Japanese Joinery", "Wood & Stone"],
    location: "Kyoto, JP",
    geography: "Higashiyama Foothills",
    year: "2023",
    scale: "320 m²",
    scaleMetric: "Scale: 320 m² / New Construction",
    status: "Completed",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf9c3WiseegVbKsV1oVEMojYYZYcIBHR3zlrY2z0XWBAT9WQ3U2OMWCCQV3g9Nhmq8i3MEnos7TES_g3qbB8CSCRAK6ENF2f6c5IKroSS5ITAN23XW_EF5jInZtOnu6-Fcqg_vaIWN5NeV-x6_w2psdk2Z8a_a-d46blyb5Fy6SSU5MMVmeJV0j2A0DbQjVV4fb2JTTPMzep6pG0cpkL9RWcA_Ck0kAo0ues1d7ioGEvSoKToEYHo-",
    galleryImages: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf9c3WiseegVbKsV1oVEMojYYZYcIBHR3zlrY2z0XWBAT9WQ3U2OMWCCQV3g9Nhmq8i3MEnos7TES_g3qbB8CSCRAK6ENF2f6c5IKroSS5ITAN23XW_EF5jInZtOnu6-Fcqg_vaIWN5NeV-x6_w2psdk2Z8a_a-d46blyb5Fy6SSU5MMVmeJV0j2A0DbQjVV4fb2JTTPMzep6pG0cpkL9RWcA_Ck0kAo0ues1d7ioGEvSoKToEYHo-",
        caption: "Living pavilion framed with Japanese cedar post-and-beam joinery facing courtyard moss garden."
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg98kbJKc2FavBa0_8n4iJeG0Ob2KO1sNna8cFAnOlDUaHnGPKN_3La1eEr54-jsOZ7egX9pbk8pmtvoq7WVZ4yAywNwVWMjcArW4W8ZfASkVbyTksnZTAHWSrBRPkWec0H8ZapRehknZR_V3nTf9ARQXHX6zZyyJZ89r_3KRV9xmSruDnNzCDZspOu2KvOVxatjAk3ZutfvLIlPad4fypm88Kv7ZuoSdPRGTZt8OQOaGlpcQDPi16",
        caption: "Solid carved travertine ofuro tub with thermal mineral circulation."
      }
    ],
    overview: "A synthesis of Scandinavian restraint and Japanese joinery, framed in local Yoshino cedar and monolithic travertine bath plinths. The pavilion sits silently in the Higashiyama foothills, allowing seasonal mist and filtered daylight to act as the primary interior ornaments.",
    architecturalChallenge: "Precision joinery executed completely fastener-free by master Daiku carpenters, engineered to withstand Kansai seismic forces.",
    materials: [
      { name: "Yoshino Cedar (Sugi)", code: "M-08", role: "Primary post-and-beam frame" },
      { name: "Raw Roman Travertine", code: "M-01", role: "Monolithic bath plinth and vanity" },
      { name: "Washi Paper Panels", code: "M-09", role: "Acoustic sliding screens" }
    ],
    photographer: "Katsuhisa Kida",
    curator: "Atelier Vaucluse Tokyo & Paris"
  },
  {
    id: 'hotel-particulier-luynes',
    title: "Hôtel Particulier Luynes",
    subtitle: "18th-Century Boiserie Intervention",
    category: "Private Salon",
    tags: ["Private Salon", "Heritage Restoration", "Acoustic Boiserie"],
    location: "Saint-Germain, Paris",
    geography: "Paris VII • Private Client",
    year: "2024",
    scale: "390 m²",
    scaleMetric: "Scale: 390 m² / Historic Interior Intervention",
    status: "Completed",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcSkU6nMFX5RGuJqN5aGpfs3ckk388ULbMtxpSq5JudrHFHcFEbOjdixl6uywzQAPDKgJeUArFu0RRxuZWnBZi51dg-60UENfY5hvhaknt7ELiCFV9H6NFmCQvPbHTKyuOXxqrqSaQPLPMCHIYLKZMly_ydPL-rQDmmoOnNpqQuce47EqevAZaVfZlYycJFXM6MPDeiwQ-DAuTMxCiq7CRRE5XuNlPlCodaVQc2jnE8LNoTM-UNlKe",
    galleryImages: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcSkU6nMFX5RGuJqN5aGpfs3ckk388ULbMtxpSq5JudrHFHcFEbOjdixl6uywzQAPDKgJeUArFu0RRxuZWnBZi51dg-60UENfY5hvhaknt7ELiCFV9H6NFmCQvPbHTKyuOXxqrqSaQPLPMCHIYLKZMly_ydPL-rQDmmoOnNpqQuce47EqevAZaVfZlYycJFXM6MPDeiwQ-DAuTMxCiq7CRRE5XuNlPlCodaVQc2jnE8LNoTM-UNlKe",
        caption: "Grand salon harmonizing Louis XV boiserie panels with minimalist bronze chandelier and brushed quartzite."
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4B6AWojuAl4pxeRuXMlilOlJq3-hYqT9COYSiU1uP4isxPpv-rdUXdPWomkp6lICbruvJVmQ5H6i5_IS0RZYJxaO1QHHHPh8jtUIk2rHCXH3fCSmOHOiabohyb80xvkE-H-ef2v88h1zRHxvi_rN0Ou-j1xoT-AKCDtwmXM7nPWBydnX7layOZAzLkY5causw2LvkSfuUZuXb6y3IcML5p37H9G0j88oiHCgDSVqtVRqeR23Xe0IU",
        caption: "Smoked French oak chevron parquet finished with pure beeswax and natural pigment."
      }
    ],
    overview: "Restrained Haussmannian intervention weaving 18th-century boiserie restoration with contemporary acoustic ceiling panels and unlacquered nickel. The project honors aristocratic classical moldings while calibrating spatial acoustics for chamber music and contemporary art collection.",
    architecturalChallenge: "Secret integration of HVAC distribution within historic ornate plaster ceiling cornices without modifying visible gilding or timber moldings.",
    materials: [
      { name: "Restored French Boiserie", code: "M-10", role: "Perimeter salon wall lining" },
      { name: "Smoked French Oak", code: "M-02", role: "Chevron parquet with wax finish" },
      { name: "Unlacquered Nickel", code: "M-11", role: "Hand-cast spatial hardware" }
    ],
    photographer: "Ambroise Tézenas",
    curator: "Atelier Vaucluse Paris"
  }
];

export const MATERIAL_STUDIES: MaterialItem[] = [
  {
    code: "M-01",
    name: "Raw Travertine",
    subtitle: "Quarried in Tivoli & Vaucluse",
    origin: "Tivoli Basins, Rome & Monts de Vaucluse",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg98kbJKc2FavBa0_8n4iJeG0Ob2KO1sNna8cFAnOlDUaHnGPKN_3La1eEr54-jsOZ7egX9pbk8pmtvoq7WVZ4yAywNwVWMjcArW4W8ZfASkVbyTksnZTAHWSrBRPkWec0H8ZapRehknZR_V3nTf9ARQXHX6zZyyJZ89r_3KRV9xmSruDnNzCDZspOu2KvOVxatjAk3ZutfvLIlPad4fypm88Kv7ZuoSdPRGTZt8OQOaGlpcQDPi16",
    description: "Unfilled open cavities that register shadows. Cool under bare feet in high summer, gathering a quiet golden luster across generations.",
    technicalSpecs: {
      acousticCoefficient: "NRC 0.35 (Cavity Depth Calibrated)",
      thermalMass: "High (Volumetric heat capacity ~2.1 MJ/m³·K)",
      finish: "Raw honed dry diamond cut, unfilled fissures",
      patinaEvolution: "Deepens into honeyed amber tones over 20+ years",
      maintenance: "Pure neutral beeswax seal; breathable pore preservation"
    },
    provenanceDetails: "Extracted from ancient sedimentary limestone beds formed by geothermal hot springs. We select slabs with directional sediment veining that mirrors the natural incline of site topography.",
    relatedProjects: ["villa-cap-dantibes", "casa-sylvan"]
  },
  {
    code: "M-02",
    name: "Smoked White Oak",
    subtitle: "Slow-Fumed European Timber",
    origin: "Sustainable Spessart & Jura Forests",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4B6AWojuAl4pxeRuXMlilOlJq3-hYqT9COYSiU1uP4isxPpv-rdUXdPWomkp6lICbruvJVmQ5H6i5_IS0RZYJxaO1QHHHPh8jtUIk2rHCXH3fCSmOHOiabohyb80xvkE-H-ef2v88h1zRHxvi_rN0Ou-j1xoT-AKCDtwmXM7nPWBydnX7layOZAzLkY5causw2LvkSfuUZuXb6y3IcML5p37H9G0j88oiHCgDSVqtVRqeR23Xe0IU",
    description: "Treated with natural ammonia vapor rather than synthetic stains. Rich tonal depth penetrating through the full heartwood core.",
    technicalSpecs: {
      acousticCoefficient: "NRC 0.22 (Low reverberation resonance)",
      thermalMass: "Moderate insulation with tactile warmth",
      finish: "Raw cold-pressed linseed & carnauba wax",
      patinaEvolution: "Mellows into subtle charcoal-espresso luster",
      maintenance: "Quarterly nourishing oil re-application"
    },
    provenanceDetails: "Slow-grown for 120+ years in cold alpine climes, guaranteeing dense annual growth rings. Fuming reacts with the wood's inherent tannic acid, ensuring that scratches or wear reveal identical dark wood rather than light substrate.",
    relatedProjects: ["tribeca-penthouse", "hotel-particulier-luynes"]
  },
  {
    code: "M-03",
    name: "Lime Plaster",
    subtitle: "Slaked Mineral Pigments",
    origin: "Saint-Astier, Dordogne & Kyoto Clays",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjbkTbkZBR_KpRTn2Ye6X3g_3sGK3UK4Gg1NH2XKWcKZc8yimXK0SoAQKPdMXKvv4Hg9sy1fVsMrng_YepMhBMSlGHBun1Y9ejGI07LWa_6L4r4IQNoXeaTuikuLR_BmGXqB85mL_Q9l-qoCgOTgWk7haHCmsjDjNTe0U9EvzuqBDeeBMoWE8zLSuPlBvf9A9gXQCGx-mlAurGQ7f-wyCCU8DtTaMa3zez2alatxLkHUvrN5AiBtmg",
    description: "Breathable, hypoallergenic walls applied in seven microscopic layers with round-edge Japanese spatulas to soften acoustic resonance.",
    technicalSpecs: {
      acousticCoefficient: "NRC 0.40 (Sound-softening micro-texture)",
      thermalMass: "Regulates indoor humidity via vapor permeability",
      finish: "Troweled matte finish with organic light refraction",
      patinaEvolution: "Carbonates over 50 years, continually hardening",
      maintenance: "Self-sanitizing naturally high pH (~12), dust with goat-hair brush"
    },
    provenanceDetails: "Calcinated limestone slaked in pure water for a minimum of 24 months before blending with volcanic pozzolana and crushed marble flour. Absorbs ambient carbon dioxide throughout its functional lifespan.",
    relatedProjects: ["villa-cap-dantibes", "residence-de-provence"]
  },
  {
    code: "M-04",
    name: "Antiqued Brass",
    subtitle: "Unlacquered Living Finish",
    origin: "Artisanal Foundries in Birmingham & Lyon",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX0wQbyvWYe4aJmN1KRZ3lfxbB3Y573L0mfqO6MpnPqvRkQww9JyGeXVj_923bcJFqRCJgpgthitXmLLIor9X_lu6hqKMpR7Y_TpXKOVPAUc5locroHMh9ITE3pMqAjxD33LdzhF8n0mwMsOmvgU_IFaXQYfZLs2NCLgN7Ode9I7LMDpr6BlpWFSJ8c6lTtYzgZ4sPSNKochjC2Ri80n9h2YFc0MfKY0RQAwQdZWpIV_iR52tcmjRW",
    description: "Cold-forged ironmongery left without artificial lacquer, deliberately engineered to darken and mirror the touch of the inhabitant's hand.",
    technicalSpecs: {
      acousticCoefficient: "Damped mass resonance (heavy solid ingot)",
      thermalMass: "Rapid conductive response to human skin",
      finish: "Hand-oxidized liver of sulphur wash, unlacquered",
      patinaEvolution: "High touch points shine golden; recesses deepen to bronze",
      maintenance: "Occasional dry cotton buffing; no synthetic brass polish"
    },
    provenanceDetails: "Poured and sand-cast in small batches using 70/30 copper-zinc alloy. Free from synthetic polyurethane coatings, allowing natural oligodynamic antimicrobial properties to remain active.",
    relatedProjects: ["tribeca-penthouse", "hotel-particulier-luynes"]
  }
];

export const DISCIPLINES: PracticeDiscipline[] = [
  {
    number: "01",
    iconName: "architecture",
    title: "Spatial Architecture & Master Planning",
    description: "Structural reorganizations, circadian lighting studies, sightline calibrations, and complete residential programming that optimize flow and spatial repose.",
    deliverables: [
      "Monolithic Volumetric Reconfiguration",
      "Acoustic Envelope Engineering",
      "Solar & Shadow Path Studies"
    ]
  },
  {
    number: "02",
    iconName: "chair",
    title: "Bespoke Interior Curation & Custom Millwork",
    description: "Unique collector furnishings, site-specific joinery, and private gallery collaborations created in partnership with Europe's finest master craftsmen.",
    deliverables: [
      "Numbered Furniture Editions",
      "Art Procurement & Installation",
      "Natural Textile & Raw Linen Programs"
    ]
  },
  {
    number: "03",
    iconName: "foundation",
    title: "Historic Preservation & Adaptive Reuse",
    description: "Rigorous conservation of protected landmarks, historic bastides, and Haussmannian properties, executing contemporary insertions with scholarly reverence.",
    deliverables: [
      "Heritage Archival Research",
      "French Monuments Nationaux Compliance",
      "Artisanal Lime & Dry Masonry Restoration"
    ]
  }
];

export const MONOGRAPH_ESSAYS: MonographEssay[] = [
  {
    id: "materiality-treatise",
    title: "The Materiality Treatise",
    subtitle: "Architecture begins where daylight strikes honest stone.",
    author: "Jean-Marc Vaucluse",
    role: "Design Principal, Atelier Vaucluse",
    readTime: "6 min read",
    date: "Monograph Vol. IV • Paris",
    excerpt: "We reject synthetic perfection. Our spaces celebrate the geological epoch of unpolished stone, the living breath of naturally seasoned hardwoods, and the patinated traces left by time and touch.",
    fullText: [
      "When daylight touches a synthetic surface, it encounters an impermeable barrier: flat, sterile, and indifferent to the passage of solar hours. But when morning rays graze a wall of hand-troweled slaked lime plaster or unfilled travertine, light enters a micro-canyon of mineral crystalline formations. It softens, scatters, and creates a living gradient of shadow that grounds the occupant in natural time.",
      "In our ateliers in Paris and SoHo, every project begins not with two-dimensional computer drawings, but with a tactile crate. Inside are samples of quarried minerals, unlacquered metals, and untreated linen fibers harvested within seasonal rhythms.",
      "We design against the ephemeral obsolescence of contemporary interior trends. A residence should be capable of aging with dignity. The brass handle should darken where thumb meets latch. The stone threshold should subtly hollow where three generations cross from terrace to hearth.",
      "This is what we define as 'Tactile Resonance'—a spatial condition where sound is softened, glare is neutralized, and the eye finds rest in the honest materiality of the earth."
    ]
  },
  {
    id: "acoustic-sanctuary",
    title: "The Acoustic Sanctuary",
    subtitle: "Why unpolished minerals quiet modern living.",
    author: "Hélène de Courcelles",
    role: "Partner & Head of Spatial Research",
    readTime: "4 min read",
    date: "Monograph Vol. IV • Zurich",
    excerpt: "True luxury in the 21st century is acoustic repose. By manipulating micro-perforated wood and porous lime matrices, we eliminate flutter echo without synthetic foam panels.",
    fullText: [
      "Urban life bombards the human sensory envelope with hard-edge acoustic reflections: glass curtain walls, polished concrete, and synthetic veneers. This creates an invisible cognitive fatigue.",
      "At Atelier Vaucluse, our acoustic engineering is invisible. By employing unfilled travertine and micro-porous slaked lime, we calibrate the reverberation time of grand salons to precisely 0.55 seconds—the exact resonance that allows spoken conversation to feel intimate, soothing, and effortlessly clear.",
      "Coupled with deep air cavities concealed behind fumed oak boiserie, our rooms absorb disruptive low-frequency traffic rumble while preserving the delicate high harmonics of acoustic instruments."
    ]
  }
];
