const GRID_SIZE = 16;
const PIXEL_COUNT = GRID_SIZE * GRID_SIZE;

const SKIN_TONES = ['#f5d0b5', '#e8b89d', '#d4a574', '#c68642', '#8d5524', '#5c3d2e'];
const HAIR_COLORS = ['#2c2c2c', '#5c3d2e', '#d4a574', '#e94560', '#3498db', '#f1c40f', '#9b59b6', '#ffffff'];
const EYE_COLORS = ['#2c2c2c', '#3498db', '#2ecc71', '#9b59b6', '#f39c12'];
const CLOTHING_COLORS = ['#e94560', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#e74c3c', '#1abc9c'];
const BG_COLORS = ['#1a1a2e', '#16213e', '#0f3460', '#2c3e50', '#34495e'];

const HAIR_STYLES = [
    { name: 'short', pixels: [[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[3,5],[3,6],[3,7],[3,8],[3,9]] },
    { name: 'long', pixels: [[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10]] },
    { name: 'spiky', pixels: [[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[3,5],[3,6],[3,7],[3,8],[3,9]] },
    { name: 'mohawk', pixels: [[0,6],[0,7],[0,8],[1,6],[1,7],[1,8],[2,6],[2,7],[2,8],[3,6],[3,7],[3,8]] },
    { name: 'curly', pixels: [[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[1,3],[1,4],[1,5],[1,11],[1,12],[2,3],[2,4],[2,11],[2,12],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[4,4],[4,5],[4,10],[4,11]] },
    { name: 'bald', pixels: [] },
    { name: 'afro', pixels: [[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11]] },
    { name: 'ponytail', pixels: [[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[15,6],[15,7],[15,8],[15,9]] },
    { name: 'braids', pixels: [[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[14,4],[14,5],[15,4],[15,5]] },
    { name: 'flat', pixels: [[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11]] },
    { name: 'slicked', pixels: [[0,5],[0,6],[0,7],[0,8],[0,9],[1,5],[1,6],[1,7],[1,8],[1,9],[2,5],[2,6],[2,7],[2,8],[2,9]] },
    { name: 'messy', pixels: [[0,4],[0,5],[0,7],[0,8],[0,10],[1,3],[1,4],[1,6],[1,7],[1,9],[1,10],[1,12],[2,4],[2,5],[2,6],[2,8],[2,9],[2,10],[2,11],[3,4],[3,5],[3,6],[3,7],[3,9],[3,10],[3,11]] },
    { name: 'pigtails', pixels: [[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[14,2],[14,3],[15,2],[15,3],[14,12],[14,13],[15,12],[15,13]] },
    { name: 'bun', pixels: [[0,5],[0,6],[0,7],[0,8],[0,9],[1,5],[1,6],[1,7],[1,8],[1,9],[2,5],[2,6],[2,7],[2,8],[2,9],[3,6],[3,7],[3,8]] },
    { name: 'dreads', pixels: [[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[14,3],[14,4],[14,11],[14,12],[15,3],[15,4],[15,11],[15,12]] },
    { name: 'cornrows', pixels: [[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11]] },
    { name: 'crewcut', pixels: [[0,5],[0,6],[0,7],[0,8],[0,9],[1,5],[1,6],[1,7],[1,8],[1,9],[2,5],[2,6],[2,7],[2,8],[2,9],[3,6],[3,7],[3,8]] },
    { name: 'caesar', pixels: [[0,5],[0,6],[0,7],[0,8],[0,9],[1,5],[1,6],[1,7],[1,8],[1,9],[2,5],[2,6],[2,7],[2,8],[2,9]] },
    { name: 'fauxhawk', pixels: [[0,6],[0,7],[0,8],[1,5],[1,6],[1,7],[1,8],[1,9],[2,5],[2,6],[2,7],[2,8],[2,9],[3,6],[3,7],[3,8]] },
    { name: 'undercut', pixels: [[0,6],[0,7],[0,8],[1,6],[1,7],[1,8],[2,6],[2,7],[2,8]] },
    { name: 'sidepart', pixels: [[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[2,5],[2,6],[2,7],[2,8],[2,9]] },
    { name: 'combover', pixels: [[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10]] },
    { name: 'shaggy', pixels: [[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11]] },
    { name: 'layers', pixels: [[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10]] },
    { name: 'waves', pixels: [[0,5],[0,6],[0,7],[0,8],[0,9],[1,5],[1,6],[1,7],[1,8],[1,9],[2,5],[2,6],[2,7],[2,8],[2,9],[3,5],[3,6],[3,7],[3,8],[3,9],[4,5],[4,6],[4,7],[4,8],[4,9]] },
    { name: 'highfade', pixels: [[0,5],[0,6],[0,7],[0,8],[0,9],[1,6],[1,7],[1,8],[2,6],[2,7],[2,8]] },
    { name: 'lowfade', pixels: [[0,5],[0,6],[0,7],[0,8],[0,9],[1,5],[1,6],[1,7],[1,8],[1,9],[2,5],[2,6],[2,7],[2,8],[2,9],[3,5],[3,6],[3,7],[3,8],[3,9]] },
    { name: 'temple', pixels: [[0,3],[0,4],[0,5],[1,3],[1,4],[1,5],[1,11],[1,12],[2,3],[2,4],[2,5],[2,11],[2,12]] },
    { name: 'fringe', pixels: [[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10]] },
    { name: 'bangs', pixels: [[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11]] },
    { name: 'crown', pixels: [[0,5],[0,6],[0,7],[0,8],[0,9],[1,4],[1,5],[1,10],[1,11],[2,4],[2,11]] },
    { name: 'topknot', pixels: [[0,6],[0,7],[0,8],[1,6],[1,7],[1,8],[2,6],[2,7],[2,8]] }
];

const EYE_STYLES = [
    { name: 'dot', left: [5,6], right: [5,9] },
    { name: 'oval', left: [5,5], right: [5,9], extra: [[5,6],[5,8]] },
    { name: 'happy', left: [5,5], right: [5,9], extra: [[4,6],[4,8]] },
    { name: 'closed', left: [5,5], right: [5,9], extra: [[5,4],[5,10]] },
    { name: 'big', left: [5,4], right: [5,9], extra: [[5,5],[5,6],[5,7],[5,8]] },
    { name: 'wide', left: [5,4], right: [5,10], extra: [[5,5],[5,6],[5,7],[5,8],[5,9]] },
    { name: 'sleepy', left: [6,5], right: [6,9], extra: [[5,5],[5,6],[5,7],[5,8],[5,9]] },
    { name: 'angry', left: [4,5], right: [4,9], extra: [[5,5],[5,6],[5,7],[5,8],[5,9]] },
    { name: 'surprised', left: [5,5], right: [5,9], extra: [[4,4],[4,5],[4,9],[4,10],[5,6],[5,7],[5,8]] },
    { name: 'cat', left: [5,5], right: [5,9], extra: [[4,4],[4,10],[5,4],[5,10]] },
    { name: 'heart', left: [5,5], right: [5,9], extra: [[4,4],[4,5],[4,9],[4,10],[5,4],[5,10]] },
    { name: 'star', left: [5,5], right: [5,9], extra: [[4,5],[4,9],[5,4],[5,10]] },
    { name: 'glasses', left: [4,4], right: [4,10], extra: [[4,5],[4,6],[4,7],[4,8],[4,9],[5,4],[5,5],[5,9],[5,10]] },
    { name: 'sunglasses', left: [4,4], right: [4,10], extra: [[4,5],[4,6],[4,7],[4,8],[4,9],[5,4],[5,5],[5,9],[5,10]] },
    { name: 'monocle', left: [4,4], right: [5,9], extra: [[4,5],[4,6],[4,7],[4,8],[5,4],[5,5],[5,6],[5,7],[5,8]] },
    { name: 'brow', left: [4,5], right: [4,9], extra: [[4,4],[4,6],[4,8],[4,10],[5,5],[5,6],[5,7],[5,8],[5,9]] },
    { name: 'squint', left: [6,5], right: [6,9], extra: [[5,5],[5,6],[5,7],[5,8],[5,9]] },
    { name: 'teardrop', left: [5,5], right: [5,9], extra: [[4,5],[6,5],[6,9]] },
    { name: 'cute', left: [5,5], right: [5,9], extra: [[4,5],[4,6],[4,8],[4,9],[6,6],[6,8]] },
    { name: 'evil', left: [4,5], right: [4,9], extra: [[5,4],[5,5],[5,6],[5,9],[5,10]] },
    { name: 'cyclops', left: [5,7], right: [5,7], extra: [[4,6],[4,7],[4,8],[5,6],[5,8],[6,6],[6,7],[6,8]] },
    { name: 'blind', left: [5,5], right: [5,9], extra: [[4,4],[4,5],[4,9],[4,10]] },
    { name: 'tired', left: [6,5], right: [6,9], extra: [[5,4],[5,5],[5,9],[5,10]] },
    { name: 'determined', left: [5,5], right: [5,9], extra: [[4,4],[4,5],[4,9],[4,10],[5,4],[5,10]] },
    { name: 'suspicious', left: [5,5], right: [5,9], extra: [[4,4],[4,6],[4,8],[4,10]] },
    { name: 'dreamy', left: [5,5], right: [5,9], extra: [[4,4],[4,5],[4,9],[4,10],[6,6],[6,7],[6,8]] },
    { name: 'furious', left: [4,5], right: [4,9], extra: [[4,4],[4,6],[4,8],[4,10],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10]] },
    { name: 'laughing', left: [5,5], right: [5,9], extra: [[6,5],[6,6],[6,7],[6,8],[6,9]] },
    { name: 'winking', left: [5,6], right: [5,9], extra: [[5,10]] },
    { name: 'cheating', left: [5,5], right: [5,9], extra: [[4,5],[4,9],[5,4],[5,10],[6,6],[6,8]] }
];

const MOUTH_STYLES = [
    { name: 'smile', pixels: [[10,6],[10,7],[10,8],[10,9]] },
    { name: 'neutral', pixels: [[10,7],[10,8]] },
    { name: 'surprised', pixels: [[10,7]] },
    { name: 'frown', pixels: [[10,8],[10,9]] },
    { name: 'open', pixels: [[10,6],[10,7],[10,8],[10,9]] },
    { name: 'smilebig', pixels: [[10,5],[10,6],[10,7],[10,8],[10,9],[10,10]] },
    { name: 'smirk', pixels: [[10,7],[10,8],[10,9]] },
    { name: 'grimace', pixels: [[10,6],[10,7],[10,8],[10,9]] },
    { name: 'teeth', pixels: [[10,6],[10,7],[10,8],[10,9]] },
    { name: 'tongue', pixels: [[10,6],[10,7],[10,8],[10,9]] },
    { name: 'bleek', pixels: [[10,6],[10,7],[10,8],[10,9]] },
    { name: 'catmouth', pixels: [[10,7]] },
    { name: 'sad', pixels: [[10,8],[10,9]] },
    { name: 'happy', pixels: [[10,5],[10,6],[10,7],[10,8],[10,9],[10,10]] },
    { name: 'laughing', pixels: [[10,5],[10,6],[10,7],[10,8],[10,9],[10,10]] },
    { name: 'oh', pixels: [[10,7]] },
    { name: 'hm', pixels: [[10,7],[10,8]] },
    { name: 'mm', pixels: [[10,7],[10,8]] },
    { name: 'd', pixels: [[10,7]] },
    { name: 'pout', pixels: [[10,6],[10,7],[10,8],[10,9]] },
    { name: 'sneer', pixels: [[10,6],[10,7],[10,8]] },
    { name: 'grimace2', pixels: [[10,6],[10,7],[10,8],[10,9]] },
    { name: 'scream', pixels: [[10,6],[10,7],[10,8]] },
    { name: 'whistle', pixels: [[10,7],[10,8]] },
    { name: 'giggle', pixels: [[10,6],[10,7],[10,8],[10,9]] },
    { name: 'grin', pixels: [[10,5],[10,6],[10,7],[10,8],[10,9],[10,10]] },
    { name: 'cheese', pixels: [[10,5],[10,6],[10,7],[10,8],[10,9],[10,10]] },
    { name: 'squish', pixels: [[10,7],[10,8]] },
    { name: 'flat', pixels: [[10,6],[10,7],[10,8],[10,9]] },
    { name: 'lipbite', pixels: [[10,7],[10,8]] }
];

const BODY_STYLES = [
    { name: 'tshirt', rows: [[12,4],[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[12,11],[13,3],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[13,11],[13,12],[14,3],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[14,11],[14,12],[15,3],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10],[15,11],[15,12]] },
    { name: 'simple', rows: [[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[14,11],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10],[15,11]] },
    { name: 'suit', rows: [[12,6],[12,7],[12,8],[12,9],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10]] },
    { name: 'hoodie', rows: [[12,4],[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[12,11],[13,3],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[13,11],[13,12],[14,3],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[14,11],[14,12],[15,3],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10],[15,11],[15,12]] },
    { name: 'dress', rows: [[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[13,11],[14,3],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[14,11],[14,12],[15,2],[15,3],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10],[15,11],[15,12],[15,13]] },
    { name: 'tank', rows: [[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[14,11],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10],[15,11]] },
    { name: 'polo', rows: [[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[13,11],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[14,11],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10],[15,11]] },
    { name: 'sweater', rows: [[12,4],[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[12,11],[13,3],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[13,11],[13,12],[14,3],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[14,11],[14,12],[15,3],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10],[15,11],[15,12]] },
    { name: 'jacket', rows: [[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[13,11],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[14,11],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10],[15,11]] },
    { name: 'vest', rows: [[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[14,11],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10],[15,11]] },
    { name: 'scarf', rows: [[12,5],[12,6],[12,7],[12,8],[12,9],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10]] },
    { name: 'coat', rows: [[12,4],[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[12,11],[13,3],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[13,11],[13,12],[14,3],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[14,11],[14,12],[15,3],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10],[15,11],[15,12]] },
    { name: 'blazer', rows: [[12,5],[12,6],[12,7],[12,8],[12,9],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10]] },
    { name: 'kimono', rows: [[12,4],[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[12,11],[13,3],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[13,11],[13,12],[14,3],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[14,11],[14,12],[15,3],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10],[15,11],[15,12]] },
    { name: 'overall', rows: [[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[13,11],[14,3],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[14,11],[14,12],[15,3],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10],[15,11],[15,12]] },
    { name: 'apron', rows: [[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10]] },
    { name: 'cape', rows: [[12,5],[12,6],[12,7],[12,8],[12,9],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10]] },
    { name: 'tie', rows: [[12,7],[12,8],[13,7],[13,8],[14,7],[14,8],[15,7],[15,8]] },
    { name: 'bowtie', rows: [[13,6],[13,7],[13,8],[13,9],[14,7],[14,8]] },
    { name: 'bow', rows: [[13,5],[13,6],[13,9],[13,10],[14,6],[14,7],[14,8],[14,9]] },
    { name: 'necklace', rows: [[13,6],[13,7],[13,8],[13,9],[14,7],[14,8]] },
    { name: 'choker', rows: [[13,7],[13,8]] },
    { name: 'bandana', rows: [[12,4],[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[12,11],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[13,11]] },
    { name: 'medal', rows: [[13,7],[13,8],[14,7]] },
    { name: 'sash', rows: [[12,6],[12,7],[12,8],[13,5],[13,6],[13,7],[13,8],[13,9],[14,5],[14,6],[14,7],[14,8],[14,9],[15,5],[15,6],[15,7],[15,8],[15,9]] },
    { name: 'shoulderpads', rows: [[12,3],[12,4],[12,11],[12,12],[13,3],[13,4],[13,11],[13,12]] },
    { name: 'cuff', rows: [[15,4],[15,5],[15,10],[15,11]] },
    { name: 'sleeves', rows: [[12,3],[12,4],[12,11],[12,12],[13,3],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[13,11],[13,12],[14,3],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[14,11],[14,12],[15,3],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10],[15,11],[15,12]] },
    { name: 'toga', rows: [[12,5],[12,6],[12,7],[12,8],[12,9],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10]] },
    { name: 'armor', rows: [[12,5],[12,6],[12,7],[12,8],[12,9],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10]] }
];

let currentPixels = [];
let currentSkinTone, currentHairColor, currentClothingColor, currentBgColor;
let currentHairIndex, currentEyeIndex, currentMouthIndex, currentBodyIndex;
let currentSkinIndex, currentHairColorIndex, currentClothingColorIndex, currentBgColorIndex;

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

function getRandomColor(arr) {
    return getRandomItem(arr);
}

function generateAvatar() {
    currentSkinIndex = getRandomIndex(SKIN_TONES);
    currentHairColorIndex = getRandomIndex(HAIR_COLORS);
    currentClothingColorIndex = getRandomIndex(CLOTHING_COLORS);
    currentBgColorIndex = getRandomIndex(BG_COLORS);
    
    currentSkinTone = SKIN_TONES[currentSkinIndex];
    currentHairColor = HAIR_COLORS[currentHairColorIndex];
    currentClothingColor = CLOTHING_COLORS[currentClothingColorIndex];
    currentBgColor = BG_COLORS[currentBgColorIndex];
    
    currentHairIndex = getRandomIndex(HAIR_STYLES);
    currentEyeIndex = getRandomIndex(EYE_STYLES);
    currentMouthIndex = getRandomIndex(MOUTH_STYLES);
    currentBodyIndex = getRandomIndex(BODY_STYLES);
    
    const pixels = new Array(PIXEL_COUNT).fill(currentBgColor);
    
    const hairStyle = HAIR_STYLES[currentHairIndex];
    hairStyle.pixels.forEach(([row, col]) => {
        pixels[row * GRID_SIZE + col] = currentHairColor;
    });
    
    for (let row = 4; row < 12; row++) {
        for (let col = 4; col < 12; col++) {
            pixels[row * GRID_SIZE + col] = currentSkinTone;
        }
    }
    
    const eyeStyle = EYE_STYLES[currentEyeIndex];
    const eyeColor = getRandomColor(EYE_COLORS);
    pixels[eyeStyle.left[0] * GRID_SIZE + eyeStyle.left[1]] = eyeColor;
    pixels[eyeStyle.right[0] * GRID_SIZE + eyeStyle.right[1]] = eyeColor;
    if (eyeStyle.extra) {
        eyeStyle.extra.forEach(([row, col]) => {
            pixels[row * GRID_SIZE + col] = eyeColor;
        });
    }
    
    const mouthStyle = MOUTH_STYLES[currentMouthIndex];
    mouthStyle.pixels.forEach(([row, col]) => {
        pixels[row * GRID_SIZE + col] = '#2c2c2c';
    });
    
    const bodyStyle = BODY_STYLES[currentBodyIndex];
    bodyStyle.rows.forEach(([row, col]) => {
        pixels[row * GRID_SIZE + col] = currentClothingColor;
    });
    
    currentPixels = pixels;
    renderAvatar(pixels);
}

function renderAvatar(pixels) {
    const grid = document.getElementById('avatarGrid');
    grid.innerHTML = '';
    
    pixels.forEach((color, index) => {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = color;
        grid.appendChild(pixel);
    });
}

function getTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}${month}${day}-${hours}${minutes}`;
}

function saveAvatar() {
    const canvas = document.createElement('canvas');
    const scale = 32;
    canvas.width = GRID_SIZE * scale;
    canvas.height = GRID_SIZE * scale;
    
    const ctx = canvas.getContext('2d');
    
    currentPixels.forEach((color, index) => {
        const x = (index % GRID_SIZE) * scale;
        const y = Math.floor(index / GRID_SIZE) * scale;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, scale, scale);
    });
    
    const link = document.createElement('a');
    link.download = `pixel-${getTimestamp()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

let isGenerating = false;
function handleGenerate() {
    if (isGenerating) return;
    isGenerating = true;
    generateAvatar();
    setTimeout(() => { isGenerating = false; }, 300);
}

document.getElementById('generateBtn').addEventListener('click', handleGenerate);
document.getElementById('saveBtn').addEventListener('click', saveAvatar);

function encodeAvatarToBase64() {
    const data = {
        skin: currentSkinIndex,
        hair: currentHairIndex,
        hairColor: currentHairColorIndex,
        eye: currentEyeIndex,
        mouth: currentMouthIndex,
        body: currentBodyIndex,
        clothingColor: currentClothingColorIndex,
        bg: currentBgColorIndex
    };
    return btoa(JSON.stringify(data));
}

function decodeAvatarFromBase64(encoded) {
    try {
        return JSON.parse(atob(encoded));
    } catch (e) {
        return null;
    }
}

function generateAvatarFromSeed(data) {
    currentSkinIndex = data.skin;
    currentHairColorIndex = data.hairColor;
    currentClothingColorIndex = data.clothingColor;
    currentBgColorIndex = data.bg;
    
    currentSkinTone = SKIN_TONES[currentSkinIndex];
    currentHairColor = HAIR_COLORS[currentHairColorIndex];
    currentClothingColor = CLOTHING_COLORS[currentClothingColorIndex];
    currentBgColor = BG_COLORS[currentBgColorIndex];
    
    currentHairIndex = data.hair;
    currentEyeIndex = data.eye;
    currentMouthIndex = data.mouth;
    currentBodyIndex = data.body;
    
    const pixels = new Array(PIXEL_COUNT).fill(currentBgColor);
    
    const hairStyle = HAIR_STYLES[currentHairIndex];
    hairStyle.pixels.forEach(([row, col]) => {
        pixels[row * GRID_SIZE + col] = currentHairColor;
    });
    
    for (let row = 4; row < 12; row++) {
        for (let col = 4; col < 12; col++) {
            pixels[row * GRID_SIZE + col] = currentSkinTone;
        }
    }
    
    const eyeStyle = EYE_STYLES[currentEyeIndex];
    const eyeColor = EYE_COLORS[Math.floor(Math.random() * EYE_COLORS.length)];
    pixels[eyeStyle.left[0] * GRID_SIZE + eyeStyle.left[1]] = eyeColor;
    pixels[eyeStyle.right[0] * GRID_SIZE + eyeStyle.right[1]] = eyeColor;
    if (eyeStyle.extra) {
        eyeStyle.extra.forEach(([row, col]) => {
            pixels[row * GRID_SIZE + col] = eyeColor;
        });
    }
    
    const mouthStyle = MOUTH_STYLES[currentMouthIndex];
    mouthStyle.pixels.forEach(([row, col]) => {
        pixels[row * GRID_SIZE + col] = '#2c2c2c';
    });
    
    const bodyStyle = BODY_STYLES[currentBodyIndex];
    bodyStyle.rows.forEach(([row, col]) => {
        pixels[row * GRID_SIZE + col] = currentClothingColor;
    });
    
    currentPixels = pixels;
    renderAvatar(pixels);
}

function shareAvatar() {
    const encoded = encodeAvatarToBase64();
    const url = window.location.origin + window.location.pathname + '?avatar=' + encoded;
    
    if (navigator.share) {
        navigator.share({
            title: '我的像素头像',
            text: '快来看看我的像素头像！',
            url: url
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(url).then(() => {
            alert('链接已复制到剪贴板！');
        }).catch(() => {
            prompt('复制以下链接分享:', url);
        });
    }
}

function loadAvatarFromURL() {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get('avatar');
    if (encoded) {
        const data = decodeAvatarFromBase64(encoded);
        if (data) {
            generateAvatarFromSeed(data);
            return true;
        }
    }
    return false;
}

document.getElementById('shareBtn').addEventListener('click', shareAvatar);

let touchTimer;
const avatarGrid = document.getElementById('avatarGrid');

avatarGrid.addEventListener('touchstart', function(e) {
    touchTimer = setTimeout(() => {
        saveAvatar();
        touchTimer = null;
    }, 500);
});

avatarGrid.addEventListener('touchend', function() {
    if (touchTimer) {
        clearTimeout(touchTimer);
    }
});

avatarGrid.addEventListener('touchmove', function() {
    if (touchTimer) {
        clearTimeout(touchTimer);
    }
});

avatarGrid.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    saveAvatar();
});

if (!loadAvatarFromURL()) {
    generateAvatar();
}
