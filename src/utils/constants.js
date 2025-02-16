export const POSSILBE_ALERGIES = [
  // Food Allergies
  { id: 'milk', category: 'Food', name: 'Milk/Dairy' },
  { id: 'eggs', category: 'Food', name: 'Eggs' },
  { id: 'peanuts', category: 'Food', name: 'Peanuts' },
  { id: 'treenuts', category: 'Food', name: 'Tree Nuts' },
  { id: 'soy', category: 'Food', name: 'Soy' },
  { id: 'wheat', category: 'Food', name: 'Wheat' },
  { id: 'fish', category: 'Food', name: 'Fish' },
  { id: 'shellfish', category: 'Food', name: 'Shellfish' },

  // Drug Allergies
  { id: 'penicillin', category: 'Medication', name: 'Penicillin' },
  { id: 'aspirin', category: 'Medication', name: 'Aspirin' },
  { id: 'nsaids', category: 'Medication', name: 'NSAIDs' },
  { id: 'sulfa', category: 'Medication', name: 'Sulfa Drugs' },

  // Environmental Allergies
  { id: 'pollen', category: 'Environmental', name: 'Pollen' },
  { id: 'dust', category: 'Environmental', name: 'Dust Mites' },
  { id: 'mold', category: 'Environmental', name: 'Mold' },
  { id: 'pet_dander', category: 'Environmental', name: 'Pet Dander' },
  { id: 'latex', category: 'Environmental', name: 'Latex' },
  { id: 'insect_stings', category: 'Environmental', name: 'Insect Stings' },
];

export const SIDE_NAV_ROUTES = [
  {
    name: 'Dashboard',
    route: '/dashboard',
  },
  {
    name: 'Profile',
    route: '/profile',
  },
  {
    name: 'Health Service',
    route: '/healthService',
  },
  {
    name: 'Messages',
    route: '/messages',
  },
];
