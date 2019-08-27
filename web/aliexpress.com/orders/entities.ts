import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { AutoMeta, Money } from '../../../util/db';

@Entity()
export class Store {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  url() {
    return `https://www.aliexpress.com/store/${this.id}`;
  }
}

@Entity()
export class Order extends AutoMeta {
  @PrimaryColumn()
  id: string;

  @Column()
  order_date: Date;

  @ManyToOne(() => Store, { cascade: true, eager: true })
  store: Store;

  @Column(() => Money)
  amount: Money;

  // items: Item[]
}
