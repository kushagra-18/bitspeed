import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'contact';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('phoneNumber').nullable();
      table.string('email').nullable();
      table.integer('linkedId').nullable();
      table.enum('linkPrecedence', ['secondary', 'primary']);
      table.timestamp('createdAt', { useTz: true }).defaultTo(this.now());
      table.timestamp('updatedAt', { useTz: true }).defaultTo(this.now()).notNullable();
      table.timestamp('deletedAt', { useTz: true }).nullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
