import { PrimaryGeneratedColumn } from 'typeorm'

abstract class BaseModel {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public readonly id!: string
}

export { BaseModel }
