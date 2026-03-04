import UpgradeCard from "./UpgradeCard"

function Shop({ upgrades, points, onBuy }) {
    return (
        <div className="card">
            <h2>Sklep</h2>
            {upgrades.map((upgrade) => (
                <UpgradeCard
                    key={upgrade.id}
                    upgrade={upgrade}
                    points={points}
                    onBuy={onBuy}
                />
            ))}
        </div>
    )
}

export default Shop