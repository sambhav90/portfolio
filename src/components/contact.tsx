"use client";
import { useState } from 'react';

export default function Contact() {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Error state
    // const [errors, setErrors] = useState({});
    const [errors, setErrors] = useState<{[key: string]: string}>({});
    
    // Form submission state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Handle input changes
    const handleChange = (e:any) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
        
        // Clear error when user types
        if (errors[id]) {
            setErrors({
                ...errors,
                [id]: ''
            });
        }
    };

    // Validate form
    const validateForm = () => {
        // const newErrors = {};
        const newErrors: {[key: string]: string} = {};
        
        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        
        // Subject validation
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }
        
        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e:any) => {
        e.preventDefault();
        
        if (validateForm()) {
            setIsSubmitting(true);
            
            // Simulate form submission
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitSuccess(true);
                
                // Reset form after submission
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                
                // Reset success message after 5 seconds
                setTimeout(() => {
                    setSubmitSuccess(false);
                }, 5000);
            }, 1500);
        }
    };

    return (
        <div>
            <section id="contact" className="md:py-[64px] py-[34px] bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Get In Touch</h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                            I'm currently available for freelance work or full-time positions.
                            If you have a project that needs some creative work, don't hesitate to reach out.
                        </p>
                    </div>
                    
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                            {/* Contact Info Cards */}
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Phone</h3>
                                <p className="text-gray-600 dark:text-gray-400">+91 9027478600</p>
                                <a href="tel:+919027478600" className="mt-3 text-indigo-600 dark:text-indigo-400 hover:underline">Call now</a>
                            </div>

                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Email</h3>
                                <p className="text-gray-600 dark:text-gray-400">sambhavrajputsr@gmail.com</p>
                                <a href="mailto:sambhavrajputsr@gmail.com" className="mt-3 text-indigo-600 dark:text-indigo-400 hover:underline">Email me</a>
                            </div>

                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Address</h3>
                                <p className="text-gray-600 dark:text-gray-400">Sector 28 Near Phase 1</p>
                                <p className="text-gray-600 dark:text-gray-400">Gurgaon, Haryana</p>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
                                {submitSuccess && (
                                    <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                                        Thank you! Your message has been sent successfully. I'll get back to you soon.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white`}
                                                placeholder="Your name"
                                            />
                                            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white`}
                                                placeholder="Your email"
                                            />
                                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Subject <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white`}
                                            placeholder="Subject"
                                        />
                                        {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                                    </div>
                                    <div className="mt-6">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            // rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white`}
                                            placeholder="Your message"
                                        ></textarea>
                                        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                                    </div>
                                    <div className="mt-6">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full ${isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} text-white py-2 px-4 rounded-md transition duration-300 flex justify-center cursor-pointer`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : 'Send Message'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


// export default function Contact (){
//     return(
//         <div>
//              {/* Contact Section */}
//             <section id="contact" className="md:py-[64px] py-[34px] bg-gray-50 dark:bg-gray-800">
//                 <div className="container mx-auto px-6">
//                 <div className="mb-12 text-center">
//                     <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Get In Touch</h2>
//                     <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
//                     I'm currently available for freelance work or full-time positions.
//                     If you have a project that needs some creative work, don't hesitate to reach out.
//                     </p>
//                 </div>
//                 <div className="max-w-2xl mx-auto">
//                     <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
//                     <form>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                             Name
//                             </label>
//                             <input
//                             type="text"
//                             id="name"
//                             className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
//                             placeholder="Your name"
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                             Email
//                             </label>
//                             <input
//                             type="email"
//                             id="email"
//                             className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
//                             placeholder="Your email"
//                             />
//                         </div>
//                         </div>
//                         <div className="mt-6">
//                         <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                             Subject
//                         </label>
//                         <input
//                             type="text"
//                             id="subject"
//                             className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
//                             placeholder="Subject"
//                         />
//                         </div>
//                         <div className="mt-6">
//                         <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                             Message
//                         </label>
//                         <textarea
//                             id="message"
//                             // rows="4"
//                             className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
//                             placeholder="Your message"
//                         ></textarea>
//                         </div>
//                         <div className="mt-6">
//                         <button
//                             type="submit"
//                             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition duration-300"
//                         >
//                             Send Message
//                         </button>
//                         </div>
//                     </form>
//                     </div>
//                 </div>
//                 </div>
//             </section>
//         </div>
//     )
// }