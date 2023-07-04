const { atom } = require('jotai')

export const metrosCuadradosAtom = atom(0)
export const houseTypeAtom = atom('basic')
export const precioTotalCasaAtom = atom(
  get =>
    get(metrosCuadradosAtom) *
    (get(houseTypeAtom) === 'basic' ? 2500000 : 2800000)
)
export const precioTotalCarpetaAtom = atom(
  get => get(metrosCuadradosAtom) * 35000
)
