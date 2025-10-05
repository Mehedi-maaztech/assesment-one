import { PiPlus } from 'react-icons/pi';

const stats = [
  {
    value: '150',
    label: 'Current Clients',
  },
  {
    value: '250k',
    label: 'Completed Projects',
  },
  {
    value: '90',
    label: 'Metro Solver Team',
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#27143C] rounded-2xl shadow-xl p-10 flex flex-col items-center text-center"
          >
            <h2 className="text-5xl font-bold flex items-center gap-1">
              {stat.value}
              <span className="text-amber-600">
                <PiPlus />
              </span>
            </h2>
            <p className="mt-3 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
