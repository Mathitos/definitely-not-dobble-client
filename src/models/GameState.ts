export type GameState = Player[]

interface User {
  id: number
  name: string
}

export interface Player {
  user: User
  card: number[]
  cooldown: boolean
}

const isServer = (user: User): boolean => user.id === 0

const isSameUser = (user1: User, user2: User) => user1.id === user2.id

const getServerCard = (state: GameState): number[] | null => {
  const playerServer = state.find((player) => isServer(player.user))
  return playerServer?.card || null
}

const getUserCard = (user: User, state: GameState): number[] | null => {
  const player = state.find((player) => isSameUser(player.user, user))
  return player?.card || null
}

const getOtherPlayersCard = (user: User, state: GameState): Player[] =>
  state.filter((player) => !isSameUser(player.user, user) && !isServer(player.user))

export default {
  getOtherPlayersCard,
  getServerCard,
  getUserCard,
}
