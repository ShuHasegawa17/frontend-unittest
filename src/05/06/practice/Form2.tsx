import { useState } from 'react';
import { ContactNumber } from '../ContactNumber';
import { DeliveryAddress } from '../DeliveryAddress';
import { PastDeliveryAddress } from '../PastDeliveryAddress';
import { RegisterDeliveryAddress } from '../RegisterDeliveryAddress';

// & は交差型　2つの型を統合 = interface の extendsと同じ
export type AddressOption = React.ComponentProps<'option'> & { id: string };
export type Props = {
  deliveryAddresses?: AddressOption[];
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Form2 = (props: Props) => {
  const [registerNew, setRegisterNew] = useState<boolean | undefined>(
    undefined
  );
  return (
    <form onSubmit={props.onSubmit}>
      <h2>お届け先情報の入力</h2>
      <ContactNumber />
      {props.deliveryAddresses?.length ? (
        <>
          <RegisterDeliveryAddress onChange={setRegisterNew} />
          {registerNew ? (
            <DeliveryAddress title="新しいお届け先" />
          ) : (
            <PastDeliveryAddress
              disabled={registerNew === undefined}
              options={props.deliveryAddresses}
            />
          )}
        </>
      ) : (
        <DeliveryAddress />
      )}
      <hr />
      <div>
        <button>注文内容の確認へ進む</button>
      </div>
    </form>
  );
};
