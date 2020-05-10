import { Configuration, UsersApi, CreateUserRequest } from '~/lib/apiClient'
export { CreateUserRequest }

const config = new Configuration({
  basePath: process.env.API_URL,
})

const usersApi = new UsersApi(config)

export const usersRepository = {
  getUsers: () => usersApi.getUsers(),
  createUser: (params: CreateUserRequest) => usersApi.createUser(params),
}
