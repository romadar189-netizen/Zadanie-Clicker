function UpgradeCard({ upgrade, points, onBuy }) {
    const canBuy = points >= upgrade.cost

    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h4>{upgrade.name}</h4>
            <p>Koszt: {upgrade.cost}</p>
            <p>+{upgrade.powerAdd} power</p>

            <button
                onClick={() => onBuy(upgrade)}
                disabled={!canBuy}
            >
                Kup
            </button>
        </div>
    )
}

export default UpgradeCard