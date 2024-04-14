export interface Hero {
  id: number,
  name: string,
  thumbnail: {
    extension: string,
    path: string
  }
}

export interface HeroCompleto {
  data: {
    results: Hero[]
  }
}
