import { Painting } from '../+data/models/painting-response';
import { SortType } from '../models/sort.model';

interface StringIndexedObject {
  [key: string]: () => Painting[];
}

export function sortBy(
  works: Painting[] | undefined,
  sortByType: SortType
): Painting[] | undefined {
  if (sortByType && works) {
    const sortFuncs: StringIndexedObject = {
      newest: () => {
        return works.sort((n, o) => {
          return Number(o.year) - Number(n.year);
        });
      },
      oldest: () => {
        return works.sort((n, o) => {
          return Number(n.year) - Number(o.year);
        });
      },
      biggest: () => {
        return works.sort((b, s) => {
          const big = getDimensions(b.height, s.width);
          const small = getDimensions(b.height, s.width);
          return small - big;
        });
      },
      smallest: () => {
        return works.sort((b, s) => {
          const big = getDimensions(b.height, s.width);
          const small = getDimensions(b.height, s.width);
          return big - small;
        });
      },
      medium: () =>
        works.sort((med1) =>
          ('' + med1.medium).localeCompare(String(med1.medium))
        ),
      availability: () => {
        return works.sort((available, notAvailable) => {
          return (
            Number(available.availability) - Number(notAvailable.availability)
          );
        });
      },
    };
    return sortFuncs[sortByType]();
  } else return;
}

function getDimensions(height: number, width: number): number {
  return height * width;
}
