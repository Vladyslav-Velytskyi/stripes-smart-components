export const MAX_TITLE_LENGTH = 75;
export const MAX_DETAILS_LENGTH = 3500;
export const NOTES_PATH = 'notes';

export const notesStatuses = {
  ASSIGNED: 'assigned',
  UNASSIGNED: 'unassigned',
  ALL: 'all',
};

export const sortOrders = {
  ASC: 'asc',
  DESC: 'desc',
};

export const NOTE_LINKS_MIN_NUMBER = 1;

const assigningModalColumnNames = {
  ASSIGNING: 'assigning',
  TITLE: 'title',
  STATUS: 'status',
  COUNT: 'linksNumber',
};

export const assigningModalColumnsConfig = {
  names: assigningModalColumnNames,
  widths: {
    [assigningModalColumnNames.ASSIGNING]: '5%',
    [assigningModalColumnNames.COUNT]: '25%',
    [assigningModalColumnNames.TITLE]: '50%',
    [assigningModalColumnNames.STATUS]: '20%',
  },
};
