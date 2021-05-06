export interface Account {
  email: string
  password: string
  fio: string
}

export interface Token {
  access_token: string
}

export interface User {
  userId: string
  email: string
  fio: string
  created_at: string
  phone?: string
  avatar?: string
}

export interface minProject {
  id: string
  title: string
  description: string
  role: string
  users: User[]
}

export interface NewProject {
  name: string
  description: string
  created_at: Date
}
