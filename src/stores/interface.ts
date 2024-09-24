export interface OneCard {
  type: string
  details: string
}

export interface TwoCard {
  type1: string
  details1: string
  type2: string
  details2: string
}

export interface Cards {
  0: OneCard
  1: TwoCard
  2: OneCard
}
