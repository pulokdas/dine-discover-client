import React from 'react';


const Contact = () => {
    return (
        <section className="h-screen  bg-gray-900 text-white">       
            <div className="py-24 container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-4">
                    Contact Us
                </h2>
                <form className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-800"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-800"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-800"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
