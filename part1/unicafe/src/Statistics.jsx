import StatisticLine from "./StatisticLine";

const Statistics = ({good, bad, neutral, all, average, percentage}) => {

    if (good || bad || neutral) {
        return ( 
            <table>
                <StatisticLine text="good" value={good}></StatisticLine>
                <StatisticLine text="neutral" value={neutral}></StatisticLine>
                <StatisticLine text="bad" value={bad}></StatisticLine>
                <StatisticLine text="all" value={all}></StatisticLine>
                <StatisticLine text="average" value={average}></StatisticLine>
                <StatisticLine text="positive" value={percentage}></StatisticLine>
            </table>
        );
    } else {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        );
    }
}
 
export default Statistics;