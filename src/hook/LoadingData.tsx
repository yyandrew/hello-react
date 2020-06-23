// 下面的代码演示了如何使用useEffect获取数据。当输入框输入内容时，useEffect的第一个参数(一个回调函数)会被执行将数据保存到data这个变量。
import * as React from "react";

interface IProps {
  name: string;
}

interface IPerson {
  name: string;
  age: number;
}

// 显示数据
const Name = ({ name }: IProps): React.ReactElement => {
  const initData: IPerson = { name: name, age: 0 };
  const [data, setData] = React.useState(initData);
  const loadData = async () => {
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    setData(await res.json());
  };
  // 第一个参数是一个回调函数，第二个参数是一个监控对象，当对象的内容改变时调用第一个参数里的函数。这里的返回值是一个cleanup函数。当第二个参数存在时，必须要返回一个cleanup函数，否则出现`destroy is not a function`的错误
  React.useEffect(() => {
    loadData();
    return () => {};
  }, [name]);
  return (
    <>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </>
  );
};

const LoadingData = (): React.ReactElement => {
  const [name, setName] = React.useState("");
  return (
    <div>
      <input onChange={e => setName(e.target.value)} />
      <Name name={name}></Name>
    </div>
  );
};

export default LoadingData;
