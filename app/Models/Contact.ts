import { DateTime } from 'luxon';
import { column, BaseModel } from '@ioc:Adonis/Lucid/Orm';

export default class Contact extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public phoneNumber?: string;

  @column()
  public email?: string;

  @column()
  public linkedId?: number;

  @column()
  public linkPrecedence: 'secondary' | 'primary';

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column.dateTime({ serializeAs: null })
  public deletedAt?: DateTime;

}
