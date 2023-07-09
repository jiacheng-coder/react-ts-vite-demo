import { useState, ChangeEventHandler } from "react";

type InputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

function useInput(): InputProps {
  const [value, setValue] = useState<string>("");
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
}

function Demo(): JSX.Element {
  const name = useInput();
  const password = useInput();
  const handleSubmit = () => {
    alert(`name=${name.value} ,password=${password.value}`)
  };
  return (
    <div className="container">
      <input type="text" {...name} />
      <input type="text" {...password} />
      <button onClick={handleSubmit}>提交</button>
    </div>
  );
}

export default Demo;
