// components/TestimonialCard.js

interface Testimonial {
  initials: string;
  avatarColor: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

// Testimonial data array
const testimonials: Testimonial[] = [
  {
    initials: 'SK',
    avatarColor: 'bg-blue-500', // Example color
    name: 'Sarah Kim',
    role: 'Full-Stack Developer',
    quote: "I went from zero coding experience to landing a full-stack developer role in just 4 months. The hands-on projects and mentorship were invaluable!",
    rating: 5,
  },
  {
    initials: 'MP',
    avatarColor: 'bg-teal-500', // Example color
    name: 'Michael Patel',
    role: 'Software Engineer',
    quote: "The curriculum is top-notch. I learned modern frameworks and best practices that made me job-ready. Now I'm working on exciting projects!",
    rating: 5,
  },
  {
    initials: 'EG',
    avatarColor: 'bg-orange-500', // Example color
    name: 'Emily Garcia',
    role: 'Backend Developer',
    quote: "The guaranteed internship gave me real-world experience. I built production apps and now have a stable career in tech. Best decision ever!",
    rating: 5,
  },
];

// Reusable Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
      </svg>
    );
  }
  return <div className="flex">{stars}</div>;
};

// --- The Main TestimonialCard Component ---
const TestimonialCardItem = ({ data }: { data: Testimonial }) => {
  const { initials, avatarColor, name, role, quote, rating } = data;

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-xl p-8 border border-gray-100 transform hover:shadow-2xl transition duration-300 ease-in-out h-full">
      
      {/* Avatar and Name/Role */}
      <div className="flex items-center mb-6">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold ${avatarColor}`}>
          {initials}
        </div>
        <div className="ml-4">
          <p className="text-lg font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      {/* Testimonial Quote */}
      <p className="text-gray-700 flex-grow mb-6 text-base italic leading-relaxed">
        &quot;{quote}&quot;
      </p>

      {/* Star Rating */}
      <div className="mt-auto"> {/* Pushes rating to the bottom */}
        <StarRating rating={rating} />
      </div>
    </div>
  );
};

// --- The Section Wrapper Component ---
export default function TestimonialCard() {
  return (
    <section id="stories" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our graduates who transformed their careers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCardItem key={index} data={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}