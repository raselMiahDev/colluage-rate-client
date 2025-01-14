const WhyFreshWorkplace = () => {
  const features = [
    {
      title: "Understand Your Team",
      description:
        "Receive honest reviews of peers and supervisors to understand the work environment better.",
      icon: "💡", // Replace with an SVG icon or image
    },
    {
      title: "Voice Your Experience",
      description:
        "Share reviews of your colleagues and supervisors to help make informed decisions.",
      icon: "🗣️",
    },
    {
      title: "Find the Right Fit",
      description:
        "Use data-driven insights to identify better roles, choose workplace styles that fit you.",
      icon: "🔍",
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Why FreshWorkplace?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFreshWorkplace;
