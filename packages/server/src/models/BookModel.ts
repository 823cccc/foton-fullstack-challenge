import { Book } from '@foton-challenge/common'
import { Column, Entity } from 'typeorm'

import { BaseModel } from './BaseModel'

@Entity('books')
class BookModel extends BaseModel implements Book {
  @Column({ name: 'name', type: 'varchar', length: 120 })
  public readonly name!: string

  @Column({ name: 'author', type: 'varchar', length: 120 })
  public readonly author!: string

  @Column({ name: 'description', type: 'text' })
  public readonly description!: string

  @Column({ name: 'cover_url', type: 'varchar', length: 2048 })
  public readonly coverUrl!: string
}

export { BookModel }
