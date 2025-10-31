    import React from 'react';
    import Image from 'next/image';
    import { Star, BookOpen, Users, ArrowRight, Clock } from 'lucide-react'; // Added Clock for duration

    interface Course {
    id: string;
    title: string;
    price: number;
    rating: number; // e.g., 4.8
    reviewsCount: number; // Not directly visible in image, but good practice
    lessons: number;
    students: number;
    imageUrl: string;
    duration: string; // e.g., "1 Year", "6 Months"
    shortDescription: string; // e.g., "Post Graduate Diploma in Computer Application"
    }

    const coursesData: Course[] = [
    {
        id: 'pgdca',
        title: 'Angular JS',
        price: 4999,
        rating: 4.8,
        reviewsCount: 150,
        lessons: 400,
        students: 1000,
        imageUrl: '/angular.png', // Ensure you have these images in your public/courses folder
        duration: '20 Days',
        shortDescription: 'Post Graduate Diploma In Computer Application',
    },
    {
        id: 'dca',
        title: 'Frontend Development',
        price: 2999,
        rating: 4.7,
        reviewsCount: 120,
        lessons: 250,
        students: 1000,
        imageUrl: '/frontend.png',
        duration: '45 Days',
        shortDescription: 'Diploma in Computer Application',
    },
    {
        id: 'pcb',
        title: 'Backend Development',
        price: 599,
        rating: 4.8,
        reviewsCount: 80,
        lessons: 100,
        students: 650,
        imageUrl: '/backend.jpeg',
        duration: '50 Days',
        shortDescription: '', // No explicit description in image
    },
    {
        id: 'adca',
        title: 'React Preparation',
        price: 4999,
        rating: 4.7,
        reviewsCount: 180,
        lessons: 400,
        students: 1000,
        imageUrl: '/react.png',
        duration: '20 Days',
        shortDescription: 'Advance Diploma In Computer Application',
    },
    ];

    // Reusable Course Card Component
    const CourseCard: React.FC<Course> = ({
    title,
    price,
    rating,
    lessons,
    students,
    imageUrl,
    duration,
    shortDescription,
    }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col text-right text-justify">
        <div className="relative h-40 w-full"> {/* Reduced image height */}
            <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
            />
            {/* Duration Badge */}
            <span className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center shadow-md">
            <Clock className="w-3 h-3 mr-1" /> {duration}
            </span>
        </div>

        <div className="p-4 flex-grow"> {/* Reduced padding */}
            <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-gray-900 leading-tight text-justify"> {/* Reduced title font size */}
                {title}
                {shortDescription && (
                <span className="block text-sm font-medium text-gray-600 mt-1 leading-snug">
                    {shortDescription}
                </span>
                )}
            </h3>
            <span className="text-lg font-bold text-red-500 ml-2">₹{price}</span> {/* Reduced price font size */}
            </div>

            <div className="flex items-center mb-3">
            <div className="flex text-yellow-500 mr-2">
                {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-current' : 'text-gray-300'}`} />
                ))}
            </div>
            <span className="text-sm text-gray-600">({rating} / 5 Rating)</span>
            </div>

            <div className="flex items-center text-gray-600 text-sm mb-2">
            <BookOpen className="w-4 h-4 mr-2" /> {lessons}+ Lessons
            </div>
            <div className="flex items-center text-gray-600 text-sm">
            <Users className="w-4 h-4 mr-2" /> {students}+ Students
            </div>
        </div>
        </div>
    );
    };

    export default function Courses() {
    return (
        <section id='cources' className="relative py-20 md:py-18 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
        {/* Background Dotted Pattern (Right side) */}
        <div 
            className="absolute top-0 right-0 w-64 h-full bg-no-repeat bg-contain opacity-20 -z-0"
            style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2363b3ed' fill-opacity='0.4'%3E%3Cpath d='M20 0H0V20L20 0ZM0 20V0H20L0 20Z'/%3E%3C/g%3E%3C/svg%3E")`,
            transform: 'translateY(-10%) rotate(25deg)', // Adjusted to match image more closely
            }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
            {/* Section Header */}
            {/* <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">
            Online app based courses
            </p> */}
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Pick an Online Course To Get Started
            </h2>
            {/* Green Underline */}
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-16 rounded-full"></div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"> {/* Changed grid columns and gap */}
            {coursesData.map((course) => (
                <CourseCard key={course.id} {...course} />
            ))}
            </div>

            {/* Main CTA Button */}
            {/* <button className="inline-flex items-center space-x-2 px-8 py-4 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg shadow-blue-300/50">
            <span>Browse more courses</span>
            <ArrowRight className="w-5 h-5" />
            </button> */}
        </div>
        </section>
    );
    }