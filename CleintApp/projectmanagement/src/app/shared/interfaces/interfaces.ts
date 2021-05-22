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
  avatar_min?: string
}

export interface minProject {
  id: string
  title: string
  description: string
  role: string
  users_avatar: string[]
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
  owner_id: string
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
  mytask: boolean
  avatar: string
  executorId: string
}

export interface UpdateTask {
  id: string
  status: string
}

export interface TaskUser {
  projectId: string
  project: string
  name: string
  description: string
  start_date: string
  end_date: string
  status: string
  priority: string
  taskId: string
}

export interface Myfile {
  name: string
  size: string
  type: string
  base64: string
}

export interface TaskGantt {
  id: number
  start_date: string
  end_date: string
  text: string
  progress: number
}

export interface OptimizationCombinedObjectiveFunction {
  width: number
  height: number
  Weight: number[]
  Direction: number[]
  Data: any
}

export interface OptimizationAnswer {
  answerArr: number[]
  dir: string
}
