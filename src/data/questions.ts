import { Question } from '../types';

export const questionsData: Question[] = [
  // Actualidad
  {
    id: 'act1',
    topic: 'Actualidad',
    text: '¿Qué tecnología ha tenido un crecimiento acelerado desde 2023?',
    options: ['Fax', 'Inteligencia Artificial Generativa', 'Disquetes', 'Pagers'],
    correctAnswerIndex: 1,
    justification: 'La IA generativa ha experimentado una rápida adopción.'
  },
  {
    id: 'act2',
    topic: 'Actualidad',
    text: '¿Qué fenómeno está relacionado con el aumento de la temperatura promedio del planeta?',
    options: ['Cambio climático', 'Lluvia ácida', 'Erosión', 'Tornados'],
    correctAnswerIndex: 0,
    justification: 'El cambio climático implica un calentamiento global sostenido.'
  },
  {
    id: 'act3',
    topic: 'Actualidad',
    text: '¿Cuál de estas fuentes genera electricidad sin emitir CO₂ durante su operación?',
    options: ['Carbón', 'Petróleo', 'Energía solar', 'Diésel'],
    correctAnswerIndex: 2,
    justification: 'La energía solar no produce emisiones directas durante la generación.'
  },
  {
    id: 'act4',
    topic: 'Actualidad',
    text: '¿Qué término describe el aumento general de precios?',
    options: ['Deflación', 'Inflación', 'Recesión', 'Devaluación'],
    correctAnswerIndex: 1,
    justification: 'La inflación refleja el incremento sostenido de precios.'
  },
  {
    id: 'act5',
    topic: 'Actualidad',
    text: '¿Qué organismo internacional coordina acciones de salud pública a nivel mundial?',
    options: ['UNESCO', 'OMS', 'FAO', 'FMI'],
    correctAnswerIndex: 1,
    justification: 'La Organización Mundial de la Salud lidera la cooperación sanitaria.'
  },

  // Ciencia y tecnología
  {
    id: 'sci1',
    topic: 'Ciencia y tecnología',
    text: '¿Cuál es el planeta más cercano al Sol?',
    options: ['Venus', 'Marte', 'Mercurio', 'Tierra'],
    correctAnswerIndex: 2,
    justification: 'Mercurio es el primer planeta del Sistema Solar.'
  },
  {
    id: 'sci2',
    topic: 'Ciencia y tecnología',
    text: '¿Cuál es la unidad de fuerza en el Sistema Internacional?',
    options: ['Julio', 'Newton', 'Watt', 'Pascal'],
    correctAnswerIndex: 1,
    justification: 'La fuerza se mide en newtons (N).'
  },
  {
    id: 'sci3',
    topic: 'Ciencia y tecnología',
    text: '¿Cuál es el elemento químico más abundante del universo?',
    options: ['Oxígeno', 'Hidrógeno', 'Helio', 'Carbono'],
    correctAnswerIndex: 1,
    justification: 'El hidrógeno constituye la mayor parte de la materia visible.'
  },
  {
    id: 'sci4',
    topic: 'Ciencia y tecnología',
    text: '¿Qué orgánulo celular produce la mayor parte de la energía?',
    options: ['Núcleo', 'Mitocondria', 'Ribosoma', 'Lisosoma'],
    correctAnswerIndex: 1,
    justification: 'Las mitocondrias producen ATP mediante la respiración celular.'
  },
  {
    id: 'sci5',
    topic: 'Ciencia y tecnología',
    text: '¿Cuál es el sistema numérico utilizado por las computadoras?',
    options: ['Decimal', 'Hexadecimal', 'Binario', 'Octal'],
    correctAnswerIndex: 2,
    justification: 'Los computadores procesan información en binario.'
  },

  // Cine y series
  {
    id: 'cin1',
    topic: 'Cine y series',
    text: '¿Qué premio es el más prestigioso del cine?',
    options: ['Grammy', 'Óscar', 'Emmy', 'Tony'],
    correctAnswerIndex: 1,
    justification: 'Los Premios Óscar reconocen la excelencia cinematográfica.'
  },
  {
    id: 'cin2',
    topic: 'Cine y series',
    text: '¿Cómo se llama el mago protagonista de una famosa saga creada por J. K. Rowling?',
    options: ['Percy Jackson', 'Harry Potter', 'Frodo Baggins', 'Gandalf'],
    correctAnswerIndex: 1,
    justification: 'Harry Potter es el protagonista de la saga.'
  },
  {
    id: 'cin3',
    topic: 'Cine y series',
    text: '¿Qué estudio creó Toy Story?',
    options: ['DreamWorks', 'Pixar', 'Illumination', 'Ghibli'],
    correctAnswerIndex: 1,
    justification: 'Toy Story fue producida por Pixar.'
  },
  {
    id: 'cin4',
    topic: 'Cine y series',
    text: '¿Cuál es el verdadero nombre de Batman?',
    options: ['Clark Kent', 'Bruce Wayne', 'Peter Parker', 'Tony Stark'],
    correctAnswerIndex: 1,
    justification: 'Bruce Wayne es Batman.'
  },
  {
    id: 'cin5',
    topic: 'Cine y series',
    text: '¿Quién es el padre de Luke Skywalker?',
    options: ['Han Solo', 'Anakin Skywalker', 'Obi-Wan Kenobi', 'Yoda'],
    correctAnswerIndex: 1,
    justification: 'Anakin se convierte en Darth Vader.'
  },

  // Cultura general
  {
    id: 'cul1',
    topic: 'Cultura general',
    text: '¿Quién escribió Don Quijote de la Mancha?',
    options: ['Gabriel García Márquez', 'Miguel de Cervantes', 'Pablo Neruda', 'Federico García Lorca'],
    correctAnswerIndex: 1,
    justification: 'Cervantes publicó la obra en el siglo XVII.'
  },
  {
    id: 'cul2',
    topic: 'Cultura general',
    text: '¿Quién pintó la Mona Lisa?',
    options: ['Picasso', 'Leonardo da Vinci', 'Van Gogh', 'Rembrandt'],
    correctAnswerIndex: 1,
    justification: 'La Mona Lisa fue pintada por Leonardo da Vinci.'
  },
  {
    id: 'cul3',
    topic: 'Cultura general',
    text: '¿Cuál es el idioma más hablado del mundo por número de hablantes nativos?',
    options: ['Inglés', 'Mandarín', 'Español', 'Hindi'],
    correctAnswerIndex: 1,
    justification: 'El mandarín ocupa el primer lugar.'
  },
  {
    id: 'cul4',
    topic: 'Cultura general',
    text: '¿Quién inventó la imprenta de tipos móviles en Europa?',
    options: ['Newton', 'Gutenberg', 'Edison', 'Tesla'],
    correctAnswerIndex: 1,
    justification: 'Johannes Gutenberg revolucionó la impresión.'
  },
  {
    id: 'cul5',
    topic: 'Cultura general',
    text: '¿En qué ciudad se encuentra el Museo del Louvre?',
    options: ['Madrid', 'Londres', 'París', 'Roma'],
    correctAnswerIndex: 2,
    justification: 'El Louvre está ubicado en París.'
  },

  // Geografía
  {
    id: 'geo1',
    topic: 'Geografía',
    text: '¿Cuál es la capital de Argentina?',
    options: ['Rosario', 'Córdoba', 'Buenos Aires', 'Mendoza'],
    correctAnswerIndex: 2,
    justification: 'Buenos Aires es la capital argentina.'
  },
  {
    id: 'geo2',
    topic: 'Geografía',
    text: '¿Cuál es la capital de Brasil?',
    options: ['São Paulo', 'Río de Janeiro', 'Brasilia', 'Salvador'],
    correctAnswerIndex: 2,
    justification: 'Brasilia es la capital desde 1960.'
  },
  {
    id: 'geo3',
    topic: 'Geografía',
    text: '¿Cuál es el río más largo de África?',
    options: ['Congo', 'Níger', 'Nilo', 'Zambeze'],
    correctAnswerIndex: 2,
    justification: 'El Nilo es el río más largo del continente.'
  },
  {
    id: 'geo4',
    topic: 'Geografía',
    text: '¿En qué continente se encuentra el desierto de Atacama?',
    options: ['Asia', 'África', 'América del Sur', 'Oceanía'],
    correctAnswerIndex: 2,
    justification: 'El desierto de Atacama está en Chile.'
  },
  {
    id: 'geo5',
    topic: 'Geografía',
    text: '¿Cuál es la línea imaginaria que divide la Tierra en hemisferio norte y sur?',
    options: ['Trópico de Cáncer', 'Meridiano de Greenwich', 'Ecuador', 'Círculo Polar Ártico'],
    correctAnswerIndex: 2,
    justification: 'El ecuador divide la Tierra en dos hemisferios.'
  },

  // Historia
  {
    id: 'his1',
    topic: 'Historia',
    text: '¿Qué civilización construyó las pirámides de Guiza?',
    options: ['Romanos', 'Egipcios', 'Mayas', 'Griegos'],
    correctAnswerIndex: 1,
    justification: 'Las pirámides de Guiza fueron construidas por el Antiguo Egipto.'
  },
  {
    id: 'his2',
    topic: 'Historia',
    text: '¿En qué año comienza la independencia de Colombia?',
    options: ['1808', '1810', '1819', '1821'],
    correctAnswerIndex: 1,
    justification: 'El 20 de julio de 1810 inició el proceso independentista.'
  },
  {
    id: 'his3',
    topic: 'Historia',
    text: '¿Cuál fue la capital del Imperio Romano?',
    options: ['Atenas', 'Roma', 'Constantinopla', 'Milán'],
    correctAnswerIndex: 1,
    justification: 'Roma fue la capital del imperio durante gran parte de su historia.'
  },
  {
    id: 'his4',
    topic: 'Historia',
    text: '¿Quién fue conocido como el Libertador de América?',
    options: ['José Martí', 'Simón Bolívar', 'Bernardo O\'Higgins', 'Antonio José de Sucre'],
    correctAnswerIndex: 1,
    justification: 'Simón Bolívar lideró la independencia de varios países.'
  },
  {
    id: 'his5',
    topic: 'Historia',
    text: '¿En qué país ocurrió la Revolución Francesa?',
    options: ['Italia', 'Francia', 'Alemania', 'España'],
    correctAnswerIndex: 1,
    justification: 'Ocurrió en Francia en 1789.'
  },

  // Deportes
  {
    id: 'dep1',
    topic: 'Deportes',
    text: '¿Cuántos jugadores tiene un equipo de fútbol en el campo al iniciar el partido?',
    options: ['9', '10', '11', '12'],
    correctAnswerIndex: 2,
    justification: 'Cada equipo juega con 11 futbolistas.'
  },
  {
    id: 'dep2',
    topic: 'Deportes',
    text: '¿Cada cuántos años se celebra la Copa Mundial de la FIFA?',
    options: ['2', '3', '4', '5'],
    correctAnswerIndex: 2,
    justification: 'La Copa Mundial se celebra cada cuatro años.'
  },
  {
    id: 'dep3',
    topic: 'Deportes',
    text: '¿Cómo se llama el torneo más antiguo de tenis?',
    options: ['Roland Garros', 'Wimbledon', 'US Open', 'Australian Open'],
    correctAnswerIndex: 1,
    justification: 'Wimbledon comenzó en 1877.'
  },
  {
    id: 'dep4',
    topic: 'Deportes',
    text: '¿Qué color identifica al líder del Tour de Francia?',
    options: ['Rojo', 'Verde', 'Amarillo', 'Blanco'],
    correctAnswerIndex: 2,
    justification: 'El maillot amarillo distingue al líder.'
  },
  {
    id: 'dep5',
    topic: 'Deportes',
    text: '¿Qué país ha ganado más Copas Mundiales de la FIFA masculina?',
    options: ['Italia', 'Alemania', 'Brasil', 'Argentina'],
    correctAnswerIndex: 2,
    justification: 'Brasil ha conquistado cinco títulos mundiales.'
  }
];

export const topicsList = Array.from(new Set(questionsData.map(q => q.topic)));

export function getQuestionsByTopic(topic: string): Question[] {
  return questionsData.filter(q => q.topic === topic).slice(0, 5);
}
