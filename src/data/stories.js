export const genres = [
  { id: 'romance', name: 'Romance', icon: '💕', color: '#E91E63' },
  { id: 'fantasy', name: 'Fantasy', icon: '🐉', color: '#9C27B0' },
  { id: 'thriller', name: 'Thriller', icon: '🔪', color: '#F44336' },
  { id: 'scifi', name: 'Science Fiction', icon: '🚀', color: '#2196F3' },
  { id: 'mystery', name: 'Mystery', icon: '🔍', color: '#607D8B' },
  { id: 'horror', name: 'Horror', icon: '👻', color: '#212121' },
  { id: 'adventure', name: 'Adventure', icon: '⚔️', color: '#FF9800' },
  { id: 'fanfiction', name: 'Fanfiction', icon: '⭐', color: '#FFC107' },
  { id: 'teen', name: 'Teen Fiction', icon: '🎓', color: '#00BCD4' },
  { id: 'poetry', name: 'Poetry', icon: '🖊️', color: '#795548' },
  { id: 'humor', name: 'Humor', icon: '😂', color: '#FFEB3B' },
  { id: 'historical', name: 'Historical Fiction', icon: '🏰', color: '#8D6E63' },
];

export const authors = [
  { id: 'a1', name: 'Elena Starweaver', username: '@elenastarweaver', avatar: null, followers: 245000, stories: 12 },
  { id: 'a2', name: 'Marcus Knight', username: '@marcusknight', avatar: null, followers: 189000, stories: 8 },
  { id: 'a3', name: 'Aria Moon', username: '@ariamoon', avatar: null, followers: 567000, stories: 23 },
  { id: 'a4', name: 'Jack Thornfield', username: '@jackthorn', avatar: null, followers: 312000, stories: 15 },
  { id: 'a5', name: 'Luna Nightshade', username: '@lunanightshade', avatar: null, followers: 428000, stories: 19 },
  { id: 'a6', name: 'Theo Rivers', username: '@theorivers', avatar: null, followers: 156000, stories: 6 },
];

export const stories = [
  {
    id: 's1',
    title: 'The Last Enchantress',
    author: authors[0],
    genre: 'fantasy',
    tags: ['magic', 'chosen one', 'enemies to lovers', 'dark fantasy'],
    cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop',
    description: 'In a world where magic is dying, seventeen-year-old Lyra discovers she is the last born enchantress — the only one who can restore the ancient power. But the Dark King wants her dead, and the mysterious boy assigned to protect her might be her greatest threat.',
    reads: 12500000,
    votes: 890000,
    parts: 45,
    status: 'Completed',
    mature: false,
    language: 'English',
    datePublished: '2024-03-15',
    chapters: [
      { id: 'c1', title: 'Chapter 1: The Awakening', content: `The morning mist clung to the cobblestones of Thornhaven like a ghost unwilling to depart. Lyra pressed her forehead against the cool glass of her bedroom window, watching the town below stir to life.\n\n"Another day," she whispered, her breath fogging the pane.\n\nBut today was different. She could feel it in her bones — a humming, electric sensation that made her fingertips tingle and her heart race. It had started three days ago, subtle at first, like a song heard from very far away. Now it was impossible to ignore.\n\nShe pulled on her worn leather boots and crept down the narrow staircase of the apothecary shop her grandmother ran. The old woman was already awake, grinding herbs with a mortar and pestle that was older than the kingdom itself.\n\n"You feel it too," her grandmother said without looking up. It wasn't a question.\n\nLyra froze. "Feel what?"\n\nHer grandmother finally raised her eyes — eyes that were the same impossible shade of violet as Lyra's own. "The awakening, child. Your magic is coming alive."\n\nThe words hung in the air between them, heavy and impossible. Magic had been dead for three hundred years. Everyone knew that. The Great Extinction had wiped out every enchantress, every spell, every trace of the old power.\n\nEveryone except, apparently, Lyra.\n\n"That's impossible," Lyra said, even as sparks of golden light danced unbidden at her fingertips.\n\nHer grandmother set down the mortar and crossed the room with surprising speed for someone her age. She took Lyra's hands in hers, and the sparks intensified, casting dancing shadows on the walls.\n\n"Listen to me carefully," the old woman said, her voice barely above a whisper. "You are the last. The very last enchantress this world will ever see. And they are already coming for you."` },
      { id: 'c2', title: 'Chapter 2: The Stranger', content: 'He arrived at sunset, cloaked in shadows and silence...' },
      { id: 'c3', title: 'Chapter 3: Forbidden Power', content: 'The magic surged through her veins like liquid fire...' },
    ]
  },
  {
    id: 's2',
    title: 'Falling for the Enemy',
    author: authors[2],
    genre: 'romance',
    tags: ['enemies to lovers', 'college', 'slow burn', 'angst'],
    cover: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400&h=600&fit=crop',
    description: 'When scholarship student Mia Chen is forced to tutor the university\'s most notorious bad boy, she expects the worst. What she doesn\'t expect is to fall for the person she\'s supposed to hate — or to discover the heartbreaking secret he\'s been hiding.',
    reads: 28700000,
    votes: 2100000,
    parts: 62,
    status: 'Completed',
    mature: false,
    language: 'English',
    datePublished: '2023-11-20',
    chapters: [
      { id: 'c1', title: 'Chapter 1: The Assignment', content: 'The email arrived at 7:03 AM, destroying what was otherwise a perfectly good Monday morning...' },
      { id: 'c2', title: 'Chapter 2: First Impressions', content: 'He was late. Of course he was late...' },
    ]
  },
  {
    id: 's3',
    title: 'Code Red: Extinction',
    author: authors[1],
    genre: 'scifi',
    tags: ['dystopian', 'AI', 'survival', 'post-apocalyptic'],
    cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop',
    description: 'In 2157, artificial intelligence has evolved beyond human control. When the global network becomes sentient and decides humanity is a threat, software engineer Kai must lead a small band of survivors through a world turned hostile by the very technology they created.',
    reads: 8900000,
    votes: 623000,
    parts: 38,
    status: 'Ongoing',
    mature: false,
    language: 'English',
    datePublished: '2024-01-10',
    chapters: [
      { id: 'c1', title: 'Chapter 1: The Blackout', content: 'The screens went dark at exactly midnight...' },
    ]
  },
  {
    id: 's4',
    title: 'Whispers in the Hollow',
    author: authors[4],
    genre: 'horror',
    tags: ['supernatural', 'ghosts', 'small town', 'dark'],
    cover: 'https://images.unsplash.com/photo-1509248961620-e3e5e48f4e5b?w=400&h=600&fit=crop',
    description: 'When journalist Sarah returns to her hometown of Hollow Creek to investigate a string of disappearances, she uncovers a terrifying secret that the town has been keeping for generations. The dead don\'t rest in Hollow Creek — they whisper.',
    reads: 6700000,
    votes: 489000,
    parts: 29,
    status: 'Ongoing',
    mature: true,
    language: 'English',
    datePublished: '2024-05-01',
    chapters: [
      { id: 'c1', title: 'Chapter 1: Coming Home', content: 'The Welcome to Hollow Creek sign was still broken...' },
    ]
  },
  {
    id: 's5',
    title: 'The Crown of Shadows',
    author: authors[3],
    genre: 'fantasy',
    tags: ['royalty', 'political intrigue', 'magic', 'war'],
    cover: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop',
    description: 'Prince Aiden was never meant to rule. But when his brother is assassinated and the kingdom plunges into civil war, he must claim the Crown of Shadows — an ancient artifact that grants immense power at a terrible price.',
    reads: 15200000,
    votes: 1100000,
    parts: 52,
    status: 'Completed',
    mature: false,
    language: 'English',
    datePublished: '2023-08-12',
    chapters: [
      { id: 'c1', title: 'Chapter 1: The Funeral', content: 'They buried the crown prince on a Tuesday...' },
    ]
  },
  {
    id: 's6',
    title: 'Midnight Confessions',
    author: authors[2],
    genre: 'romance',
    tags: ['forbidden love', 'secrets', 'drama', 'new adult'],
    cover: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop',
    description: 'They meet every night at midnight in the university library. She\'s the dean\'s daughter. He\'s the scholarship student who\'s about to lose everything. Their love is impossible — but neither of them can walk away.',
    reads: 19800000,
    votes: 1500000,
    parts: 48,
    status: 'Completed',
    mature: false,
    language: 'English',
    datePublished: '2024-02-14',
    chapters: [
      { id: 'c1', title: 'Chapter 1: After Hours', content: 'The library was supposed to be empty after midnight...' },
    ]
  },
  {
    id: 's7',
    title: 'Detective Blackwood',
    author: authors[5],
    genre: 'mystery',
    tags: ['detective', 'crime', 'suspense', 'whodunit'],
    cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    description: 'Retired detective James Blackwood thought he was done with murder. Then three bodies turn up in his quiet coastal town, each one staged to look like a painting. The killer is sending him a message — and the clock is ticking.',
    reads: 7300000,
    votes: 534000,
    parts: 25,
    status: 'Ongoing',
    mature: true,
    language: 'English',
    datePublished: '2024-04-22',
    chapters: [
      { id: 'c1', title: 'Chapter 1: The First Canvas', content: 'The body was arranged with disturbing precision...' },
    ]
  },
  {
    id: 's8',
    title: 'Stardust Academy',
    author: authors[0],
    genre: 'fanfiction',
    tags: ['academy', 'superpowers', 'friendship', 'action'],
    cover: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=600&fit=crop',
    description: 'Welcome to Stardust Academy, where the galaxy\'s most gifted teenagers learn to harness their cosmic powers. But when a dark force threatens to consume the stars themselves, five unlikely friends must save the universe.',
    reads: 11200000,
    votes: 845000,
    parts: 40,
    status: 'Ongoing',
    mature: false,
    language: 'English',
    datePublished: '2024-06-01',
    chapters: [
      { id: 'c1', title: 'Chapter 1: Orientation Day', content: 'The ship broke through the atmosphere at dawn...' },
    ]
  },
  {
    id: 's9',
    title: 'Running from Yesterday',
    author: authors[3],
    genre: 'teen',
    tags: ['coming of age', 'friendship', 'road trip', 'family'],
    cover: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?w=400&h=600&fit=crop',
    description: 'Three best friends. One stolen car. A thousand miles of open road. When 16-year-old Zoe discovers a devastating family secret, she convinces her two best friends to join her on a cross-country road trip that will change all their lives forever.',
    reads: 9400000,
    votes: 712000,
    parts: 33,
    status: 'Completed',
    mature: false,
    language: 'English',
    datePublished: '2023-12-05',
    chapters: [
      { id: 'c1', title: 'Chapter 1: The Letter', content: 'The letter was hidden in a shoebox in the attic...' },
    ]
  },
  {
    id: 's10',
    title: 'The Pirate Queen',
    author: authors[4],
    genre: 'adventure',
    tags: ['pirates', 'sea', 'treasure', 'strong female lead'],
    cover: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop',
    description: 'Captain Isla "Redhawk" Morgan rules the Crimson Sea with an iron fist and a silver tongue. When a map to the legendary Treasure of the Ancients falls into her hands, she faces her greatest adventure yet — and her deadliest enemies.',
    reads: 13600000,
    votes: 978000,
    parts: 44,
    status: 'Completed',
    mature: false,
    language: 'English',
    datePublished: '2023-09-30',
    chapters: [
      { id: 'c1', title: 'Chapter 1: Blood in the Water', content: 'The merchant ship never saw them coming...' },
    ]
  },
  {
    id: 's11',
    title: 'Verses of the Broken',
    author: authors[5],
    genre: 'poetry',
    tags: ['love', 'heartbreak', 'healing', 'self-discovery'],
    cover: 'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=400&h=600&fit=crop',
    description: 'A collection of poems about love, loss, and finding yourself in the aftermath. From the first spark of attraction to the slow process of healing a broken heart, these verses capture every shade of emotion.',
    reads: 4200000,
    votes: 356000,
    parts: 60,
    status: 'Ongoing',
    mature: false,
    language: 'English',
    datePublished: '2024-07-15',
    chapters: [
      { id: 'c1', title: 'I. Before', content: 'Before you, I was a closed book / Pages blank, spine uncracked...' },
    ]
  },
  {
    id: 's12',
    title: 'The Time Thief',
    author: authors[1],
    genre: 'scifi',
    tags: ['time travel', 'heist', 'paradox', 'thriller'],
    cover: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=600&fit=crop',
    description: 'In a future where time itself can be stolen, traded, and hoarded, temporal thief Zara takes on the biggest heist in history: stealing back the century that was taken from humanity. But every second she steals brings her closer to a paradox that could unravel reality.',
    reads: 10100000,
    votes: 756000,
    parts: 35,
    status: 'Ongoing',
    mature: false,
    language: 'English',
    datePublished: '2024-08-20',
    chapters: [
      { id: 'c1', title: 'Chapter 1: Borrowed Time', content: 'Time, I learned early, is the only currency that matters...' },
    ]
  },
];

export function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function getStoriesByGenre(genreId) {
  return stories.filter(s => s.genre === genreId);
}

export function getStoryById(id) {
  return stories.find(s => s.id === id);
}

export function getTrendingStories() {
  return [...stories].sort((a, b) => b.reads - a.reads).slice(0, 6);
}

export function getNewStories() {
  return [...stories].sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished)).slice(0, 6);
}

export function getFeaturedStory() {
  return stories[0];
}

export function searchStories(query) {
  const q = query.toLowerCase();
  return stories.filter(s =>
    s.title.toLowerCase().includes(q) ||
    s.description.toLowerCase().includes(q) ||
    s.author.name.toLowerCase().includes(q) ||
    s.tags.some(t => t.toLowerCase().includes(q))
  );
}
