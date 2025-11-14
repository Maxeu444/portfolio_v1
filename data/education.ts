/**
 * Education data
 * TODO: Replace with your real education
 */

export interface Education {
  id: string;
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
}

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor Concepteur Développeur d’Applications',
    school: 'ForEach Academy - Marcq-en-Barœul',
    startDate: 'Septembre 2023',
    endDate: 'Juillet 2025',
  },
  {
    id: '2',
    degree: 'Titre Pro Développeur Web et Web Mobile',
    school: 'Afpa - Roubaix',
    startDate: 'Octobre 2022',
    endDate: 'Juillet 2023',
  },
  {
    id: '3',
    degree: 'BTS Communication',
    school: 'Lycée Saint-Luc - Cambrai',
    startDate: 'Septembre 2019',
    endDate: 'Juin 2021',
  },
  {
    id: '4',
    degree: 'Bac Professionnel Communication Visuelle',
    school: 'Lycée Le Corbusier - Tourcoing',
    startDate: 'Septembre 2017',
    endDate: 'Juin 2019',
  },
];
