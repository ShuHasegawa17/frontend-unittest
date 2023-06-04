import { useState } from 'react';
import { Form2 } from '../../06/practice/Form2';
import { postMyAddress } from '../fetchers';
import { handleSubmit2 } from './handleSubmit2';
import { checkPhoneNumber2, ValidationError2 } from './vlidations2';

export const RegisterAddress2 = () => {
  const [postResult, setPostResult] = useState('');
  return (
    <div>
      <Form2
        onSubmit={handleSubmit2((values) => {
          try {
            checkPhoneNumber2(values.phoneNumber);
            postMyAddress(values)
              .then(() => {
                setPostResult('登録しました');
              })
              .catch(() => {
                setPostResult('登録に失敗しました');
              });
          } catch (err) {
            if (err instanceof ValidationError2) {
              setPostResult('不正な入力値が含まれています');
              return;
            }
            setPostResult('不明なエラーが発生しました');
          }
        })}
      />
      {postResult && <p>{postResult}</p>}
    </div>
  );
};
