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

export interface Project {
  name: string
  description: string
  created_at: Date
  role: string
  owner_avatar: string
}

export interface UserToProject {
  ProjectId: string
  email: string
  RoleId: string
}

export interface UsersOfProject {
  userId: string
  fio: string
}

export interface AddTask {
  UserId: string
  ProjectId: string
  name: string
  description: string
  start_date: string
  end_date: string
  PriorityId: string
}

export interface Task {
  id: string
  name: string
  description: string
  start_date: Date
  end_date: Date
  executor: string
  status: string
  priority: string
}
