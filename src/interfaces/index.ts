export interface Route {
  name: string
  link: string
}

export interface History {
  title: string
  description: string,
  date: string
  backGround: string
  icon: any
}

export interface Skill {
  field: string
  coverImage: string
  logos: Array<{
    title: string
    image: string
  }>
}

export interface Post {
  id: string
  title: string
  subTitle: string
  body: HTMLElement
  thumbnail: {
    url: string
  },
  publishedAt: Date
}

export interface Work {
  image: string
  title: string
  link: string
}

export interface SocialNetwork {
  link: string
  icon: any
}
