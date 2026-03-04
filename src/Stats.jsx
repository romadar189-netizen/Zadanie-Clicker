function Stats({ points, power, level }) {
    return (
        <div className="card">
            <h2>Punkty: {points}</h2>
            <h3>Power: {power}</h3>
            <h3>Poziom: {level}</h3>
        </div>
    )
}

export default Stats