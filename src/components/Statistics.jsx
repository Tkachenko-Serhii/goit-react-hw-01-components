import StatisticsItem from './StatisticsItem';

export default function Statistics({ title, statisticalData }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {statisticalData.map(data => (
          <StatisticsItem
            label={data.label}
            percentage={data.percentage}
            key={data.id}
          />
        ))}
      </ul>
    </section>
  );
}
