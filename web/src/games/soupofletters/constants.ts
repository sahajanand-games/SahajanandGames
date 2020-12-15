import { red, blue, green, orange, yellow } from '@material-ui/core/colors';

export const MAX_WORDS_IN_GAME = 20;
export const MAX_WORD_LEN = 12;
export const DRAW_AFTER_N_TIMERS = 2;
export const TIME_OUT = 20;
export const TIME_BUFF = 1.5;

export const BOARD_SIZE = 500;
export const SOLUTION_COLOR = yellow[800];

export const playerColors = {
  '0': red[500],
  '1': blue[500],
  '2': green[700],
  '3': orange[700],
};

export const validOrientations = [
  'horizontal',
  'diagonal',
  'diagonalUp',
  'vertical',
  'verticalUp',
  // 'diagonalBack',
  // 'horizontalBack',
  // 'diagonalUpBack',
];

export const globalWordList = [
  'Sahajanand',
  'Harikrushna',
  'Nilkanth',
  'Swaminarayan',
  'Sarjudas',
  'Ghanshyam',
  'Narayanmuni',
  'Hari',
  'Premanand',
  'Muktanand',
  'Brahmanand',
  'Shukanand',
  'Gopalanand',
  'Gunatitanand',
  'Nishkulanand',
  'Nityanand',
  'Atmanand',
  'Adbhutanand',
  'Sachidanand',
  'Krupanand',
  'Vyapkanand',
  'Raguvirprasad',
  'Ayodhyaprasad',
  'Dharmadev',
  'Bhaktimata',
  'IchchhaRam',
  'Rampratap',
  'Suvasani',
  'Vadtal',
  'Ahmedabad',
  'Gadhpur',
  'Chhapaiya',
  'Junagadh',
  'Dholera',
  'Bhuj',
  'Bhadra',
  'Fareni',
  'Todla',
  'Amrapur',
  'Amreli',
  'Karyani',
  'Sarangpur',
  'Mangrol',
  'Jetpur',
  'Gondal',
  'Loej',
  'Panchala',
  'Kalvani',
  'Sardhar',
  'Rajkot',
  'Surat',
  'Parvatbhai',
  'Jinabhai',
  'Manorama',
  'Narmada',
  'Ganga',
  'Yamuna',
  'Saryu',
  'Badrinath',
  'Mathura',
  'Dwarka',
  'Ayodhya',
  'Rameshwaram',
  'Jagganath',
  'Burhanpur',
  'Kashi',
  'Kedarnath',
  'Ramanand',
  'Valbhacharya',
  'Ramanujacharya',
  'Uddhavji',
  'Vyasji',
  'Gopinathji',
  'NarNarayan',
  'LaxmiNarayan',
  'MadanMohan',
  'RadhaRaman',
  'RanchodTrikam',
  'SuryaNarayan',
  'Shikshapatri',
  'Vachnamrut',
  'ChosathPadi',
  'Harililamrut',
  'Krishna',
  'Ram',
  'KapilDev',
  'Vaman',
  'Nurshi',
  'Hanuman',
  'Mahadev',
  'Parvatiji',
  'Ganpati',
  'JadBharat',
  'Sita',
  'Narad',
  'Dhruv',
  'Prahlad',
  'NarshiMehta',
  'Arjun',
  'Dhraupadi',
  'Abhimanyu',
  'Ekalavya',
  'Balram',
  'Kunti',
  'Drona',
  'Bhishma',
  'PanduRaja',
  'Bhim',
  'Yudhisthir',
  'Nakul',
].map((word: string) => word.toUpperCase());
