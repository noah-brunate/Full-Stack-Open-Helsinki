const Total = (props) => {
    const part1 = props.parts[0];
    const part2 = props.parts[1];
    const part3 = props.parts[2];
    return ( 
        <>
            <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
        </>
     );
}
 
export default Total;