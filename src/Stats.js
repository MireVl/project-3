const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You got everything! Ready to Go! ✈"
          : `💼 You have ${numItems} items on your list, and you already packed ${packedItems} (${packedPercent}%)`}
      </em>
    </footer>
  );
};

export default Stats;
