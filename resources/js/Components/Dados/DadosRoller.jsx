export default function DadosRoller({ dieType , rolls = [], refreshKey = 0 }) {
  return (
    <div className="dados-roller">
      {rolls.map((roll, i) => {
        const imageName = `${dieType}_roll_${roll}.gif`;
        const src = `/images/dice/${imageName}?${refreshKey}`;
        const showPlaceholder = dieType === "d20" ? true : false;

        return (
          <img
            key={`${i}-${refreshKey}`}
            src={showPlaceholder ? "/images/dice/d20_box.png" : src}
            style={{
              width: dieType === "d20" ? '512px' : '80px'
            }}
            onLoad={showPlaceholder ? (e) => (e.currentTarget.src = src) : undefined}
          />
        );
      })}
    </div>
  );
}