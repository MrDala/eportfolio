import '../../style/Raw.css';

type Props = {
  args: Array<any>; 
};

const Raw = ({ args }: Props) => {
  return (
    <tr className='Raw'>
      {args.map((arg, index) => (
        <td key={index}>{arg}</td>
      ))}
    </tr>
  );
};

export default Raw;
