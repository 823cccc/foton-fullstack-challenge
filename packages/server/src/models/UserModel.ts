import { User } from '@foton-challenge/common'
import { Column, Entity } from 'typeorm'

import { BaseModel } from './BaseModel'

@Entity('users')
class UserModel extends BaseModel implements User {
  @Column({ name: 'name', type: 'varchar', length: 100 })
  public readonly name!: string

  @Column({ name: 'email', type: 'varchar', length: 320, unique: true })
  public readonly email!: string

  @Column({ name: 'password', type: 'varchar', length: 100 })
  public readonly password!: string
}

export { UserModel }
