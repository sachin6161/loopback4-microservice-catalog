import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {PaymentDatasourceName} from '../keys';
import {Transactions} from '../models';

export class TransactionsRepository extends DefaultCrudRepository<
  Transactions,
  typeof Transactions.prototype.id
> {
  constructor(
    @inject(`datasources.${PaymentDatasourceName}`)
    dataSource: juggler.DataSource,
  ) {
    super(Transactions, dataSource);
  }
}
