import styles from './index.less';
import { Input, Button, Typography } from 'antd';
import { useState, ChangeEvent } from 'react';
import { tstrcmp } from './tstrcmp';


export default function IndexPage() {

  const [firstInput, setFirstInput] = useState<string>();
  const [secondInput, setSecondInput] = useState<string>();
  const [operator, setOperator] = useState<string>();

  return (
    <div>
      <div className={styles.inputContainer}> 
        <Input
          placeholder={'Input first TH word'}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFirstInput(e.target.value);
          }}
          className={styles.input}
        />
        <Typography className={styles.operator}>
          {operator}
        </Typography>
        <Input
          placeholder={'Input second TH word'}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSecondInput(e.target.value);
          }}
          className={styles.input}
          />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          className={styles.button}
          type='primary'
          onClick={() => {
            if (!firstInput || !secondInput) {
              return;
            }
            setOperator(
              tstrcmp(firstInput, secondInput) < 0 ? 'before' : 'after'
            );
          }}
        >
          Compare
        </Button>
      </div>
    </div>
  );
}


