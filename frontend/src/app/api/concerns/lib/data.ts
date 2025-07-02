// Define a type for our Garden items for type safety
export interface ConcernItem {
  id: string;
  name: string; // Name of the person reporting the concern
  mobileNumber: string;
  concernTitle: string; 
  affectedGarden: string; // The garden this concern relates to
  description: string;
  acknowledgeSelection: boolean;
  attachedFile: File | null; // In mock data, this will typically be null
  status: string;
}

// This array acts as our in-memory database for submitted concerns.
// In a real application, this data would be submitted via a form and stored in a database.
export const concernData: ConcernItem[] = [
  {
    id: 'tengah-concern-001',
    name: 'Tan Wei Ling',
    mobileNumber: '+65 9876 5432',
    concernTitle: 'Automated Sprinkler System Malfunction',
    affectedGarden: 'Plantation Grove',
    description: 'The "smart" sprinkler for Plot 7 did not activate this morning at 7 AM. My kangkong and chai sim are wilting from the heat. The other plots seem fine. Could be a faulty valve or sensor?',
    acknowledgeSelection: true,
    // Note: It's not practical to create a static File object here.
    // In a real app, this would be an uploaded file object. For mock data, null is appropriate.
    attachedFile: null, 
    status: 'resolved'
  },
  {
    id: 'tengah-concern-002',
    name: 'Siti binti Ahmad',
    mobileNumber: '+65 8123 4567',
    concernTitle: 'Severe Mealybug Infestation',
    affectedGarden: 'Plantation Grove',
    description: 'The row of brinjal (eggplant) plants is covered in white, fuzzy mealybugs. The leaves are turning yellow and sticky. We need organic pest control before it spreads to the other vegetable beds.',
    acknowledgeSelection: true,
    attachedFile: null,
    status: 'in-progress'
  },
  {
    id: 'tengah-concern-003',
    name: 'Suresh Kumar',
    mobileNumber: '+65 9234 5678',
    concernTitle: 'Waterlogging and Poor Drainage in Plot C-4',
    affectedGarden: 'Plantation Grove',
    description: 'After the heavy rain last night, my plot (C-4) is completely flooded. The drain at the end of the row seems clogged with soil and leaves. My sweet potato roots might rot if this is not fixed soon.',
    acknowledgeSelection: true,
    attachedFile: null,
    status: 'looked-on'
  },
  // {
  //   id: 'tengah-concern-004',
  //   name: 'Joanna Lim',
  //   mobileNumber: '+65 8876 5432',
  //   concernTitle: 'Unauthorised Harvesting of Communal Herbs',
  //   affectedGarden: 'Tengah Forest Fringe Herb Spiral',
  //   description: "Someone has been cutting large amounts from the communal pandan and curry leaf plants, leaving very little for other residents. Can we put up a sign about responsible harvesting?",
  //   acknowledgeSelection: false,
  //   attachedFile: null,
  // },
  // {
  //   id: 'tengah-concern-005',
  //   name: 'Uncle David (Blk 123A)',
  //   mobileNumber: '+65 9111 2222',
  //   concernTitle: 'Community Tools are Rusty and Broken',
  //   affectedGarden: 'Plantation Grange Allotment Shed',
  //   description: "The shared changkols (hoes) and garden forks in the tool shed are very rusty, and one of the watering can handles is broken. It's becoming unsafe to use them. Hope the committee can replace them.",
  //   acknowledgeSelection: true,
  //   attachedFile: null,
  // },
  // {
  //   id: 'tengah-concern-006',
  //   name: 'Aisha',
  //   mobileNumber: '+65 8321 9876',
  //   concernTitle: 'Mynah Birds Eating Chilli Padi',
  //   affectedGarden: 'Copen Grand Sky Garden (Level 5)',
  //   description: 'Every morning, the mynah birds are landing and eating all the ripe chilli padi from my plants. Is it possible to install some bird netting or reflective tape to scare them away?',
  //   acknowledgeSelection: true,
  //   attachedFile: null,
  // },
];