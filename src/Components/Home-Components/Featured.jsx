import React from 'react'



const Featured = () => {
    return (
        <div className="lg:mt-24 bg-gray-900">
            <div className="container mx-auto px-4">

                {/* What is Dine Discover Section */}
                <section className="py-10 lg:py-20 bg-gray-900 text-white">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white">What is Dine Discover?</h2>
                        <p className="text-lg text-slate-300 ">Your Ultimate Restaurant Discovery Platform</p>
                    </div>
                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Feature 1 */}
                        {/* Add your feature icons here */}
                        <div className="flex items-center justify-center">
                            <img src="https://i.ibb.co/86VCKX0/feature-icon-1.png" alt="Feature Icon" className="w-32 h-32" />
                        </div>
                        <div className="md:col-span-2 md:mt-4 lg:mt-4">
                            <h3 className="text-xl font-bold mb-2">Explore a World of Restaurants</h3>
                            <p className="text-slate-300">
                                With Dine Discover, you can browse through a vast collection of restaurants, cafes, and eateries. From local hidden gems to famous international cuisines, we've got you covered.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        {/* Add your feature icons here */}
                        <div className="flex items-center justify-center">
                            <img src="https://i.ibb.co/S0ZfMcw/feature-icon-2.png" alt="Feature Icon" className="w-32 h-32" />
                        </div>
                        <div className="md:col-span-2 md:mt-4 lg:mt-4 ">
                            <h3 className="text-xl font-bold mb-2 ">Personalized Recommendations</h3>
                            <p className="text-slate-300">
                                Our smart recommendation engine learns your preferences and suggests restaurants tailored to your taste. Say goodbye to endless scrolling and find your perfect dining spot in no time.
                            </p>
                        </div>


                        {/* Feature 3 */}
                        {/* Add your feature icons here */}
                        <div className="flex items-center justify-center">
                            <img src="https://i.ibb.co/CJ0KqQr/feature-icon-3.png" alt="Feature Icon" className="w-32 h-32" />
                        </div>
                        <div className="md:col-span-2 md:mt-4 lg:mt-4">
                            <h3 className="text-xl font-bold mb-2">Verified Reviews & Ratings</h3>
                            <p className="text-slate-300">
                                Make informed decisions with honest reviews and ratings from our community of diners. Join the conversation by sharing your own experiences and helping others discover hidden gems.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Dine Discover Section */}
                <section className="py-10 bg-gray-900">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white">Why Choose Dine Discover?</h2>
                        <p className="text-lg text-slate-300">Your Journey to Memorable Dining Experiences</p>
                    </div>
                    {/* Features */}
                    <div className="flex flex-col-reverse md:flex-col-reverse  lg:flex-row items-center  justify-around mt-4">
                        <div className="text-center lg:text-left lg:w-1/2">
                            <h3 className="text-xl text-white font-bold mb-2">Discover Hidden Gems</h3>
                            <p className="text-slate-300">
                                We uncover lesser-known restaurants that offer exceptional dining experiences. Whether it's a cozy family-run cafe or a trendy fusion eatery, Dine Discover takes you off the beaten path.
                            </p>
                            <h3 className="text-xl text-white font-bold mb-2 mt-6">Convenient Reservations</h3>
                            <p className="text-slate-300">
                                Easily book a table at your favorite restaurant right from the app. No more waiting on hold or struggling to get a reservation during peak hours.
                            </p>
                        </div>
                        {/* Add your image here */}
                        <div className="flex items-center justify-center">
                            <img src="https://i.ibb.co/sjyFF0B/why-choose-img.png" alt="Why Choose Dine Discover" className="w-96 h-96 rounded-lg" />
                        </div>
                    </div>
                    <div className="text-center mt-16">
                        <a href="/Owners" className="px-6 py-3 bg-teal-600 text-white  rounded-lg font-bold hover:bg-teal-800">Join Dine Discover As Owner</a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Featured