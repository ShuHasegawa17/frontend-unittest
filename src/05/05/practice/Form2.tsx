import { useId, useState } from 'react';
import { Agreement2 } from './Agreement2';
import { InputAccount2 } from './InputAccount2';

export const Form2 = () => {
  const [checked, setChecked] = useState(false);
  const headingId = useId();
  return (
    <form aria-labelledby={headingId}>
      <h2 id={headingId}>新規アカウント登録</h2>
      <InputAccount2 />
      <Agreement2
        onChange={(event) => {
          setChecked(event.currentTarget.checked);
        }}
      />
      <div>
        <button disabled={!checked}>サインアップ</button>
      </div>
    </form>
  );
};
