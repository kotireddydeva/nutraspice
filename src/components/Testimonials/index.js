const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rohit Sharma",
      feedback: "Excellent quality cashews! Very fresh and tasty.",
    },
    {
      id: 2,
      name: "Smriti Mandana",
      feedback: "Loved the spices. Fast delivery and great packing.",
    },
    {
      id: 3,
      name: "Virat Kohli",
      feedback: "Almonds are really premium. Will order again.",
    },
  ];

  return (
    <div className="max-w-[90%] mx-auto my-10">
      <h2 className="text-2xl font-bold mb-8 text-center">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white p-6 rounded-2xl shadow-lg 
                  hover:shadow-2xl transition cursor-pointer
                  transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-bold mb-4">
              {t.name[0].toUpperCase()}
            </div>
            <p className="text-gray-700 italic mb-4">{t.feedback}</p>
            <h4 className="font-semibold text-lg">{t.name}</h4>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Testimonials