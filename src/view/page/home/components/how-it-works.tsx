const HowItWorks = () => {
  const steps = [
    {
      title: "Search for a Peer or Supervisor",
      description: "Use our tools to search for peers or supervisors.",
      icon: "🔎", // Replace with an SVG icon or image
    },
    {
      title: "Leave a Constructive Rating",
      description:
        "Share honest and constructive feedback based on your experience.",
      icon: "✍️",
    },
    {
      title: "Gain True Insight",
      description:
        "Empower better decisions based on shared experiences of peers and leadership.",
      icon: "📈",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
