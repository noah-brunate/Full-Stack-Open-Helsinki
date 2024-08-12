const StatisticLine = ({text, value}) => {
    return ( 
      <tbody>
        <tr>
          {text === 'positive' && <td>{text} {value} %</td>}
          {text !== 'positive' && <td>{text} {value}</td>}
        </tr>
      </tbody>
     );
}
  
export default StatisticLine;