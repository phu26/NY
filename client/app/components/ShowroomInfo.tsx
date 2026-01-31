import React from 'react';
import { MapPin, Mail, ArrowRight } from 'lucide-react';

const ShowroomInfo = () => {
    return (
        <section className="bg-white border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Showroom Left */}
                <div className="bg-[#FAF9F6] p-12 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="max-w-md mx-auto w-full">
                        <span className="text-[#8B5E3C] uppercase tracking-widest text-sm font-semibold mb-2 block">Visit Us</span>
                        <h3 className="text-3xl font-serif text-[#2C2C2C] mb-8">Our Showrooms</h3>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="bg-white p-3 rounded-full h-fit shadow-sm text-[#3F3127]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-[#3F3127] mb-1">Ho Chi Minh City</h4>
                                    <p className="text-gray-500 leading-relaxed">
                                        123 Nguyen Van Linh, District 7<br />
                                        Open daily: 9:00 AM - 9:00 PM
                                    </p>
                                    <a href="#" className="text-[#8B5E3C] text-sm font-bold mt-2 inline-block hover:underline">Get Directions</a>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-white p-3 rounded-full h-fit shadow-sm text-[#3F3127]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-[#3F3127] mb-1">Ha Noi</h4>
                                    <p className="text-gray-500 leading-relaxed">
                                        456 Tay Ho, Tay Ho District<br />
                                        Open daily: 9:00 AM - 9:00 PM
                                    </p>
                                    <a href="#" className="text-[#8B5E3C] text-sm font-bold mt-2 inline-block hover:underline">Get Directions</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Right */}
                <div className="p-12 md:p-20 flex flex-col justify-center bg-[#3F3127] text-white">
                    <div className="max-w-md mx-auto w-full">
                        <div className="mb-6 text-[#D4AF37]">
                            <Mail size={40} />
                        </div>
                        <h3 className="text-3xl font-serif mb-4">Join our community</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Subscribe to our newsletter to receive exclusive offers, latest news about products and events.
                        </p>

                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
                            />
                            <button className="w-full bg-white text-[#3F3127] p-4 font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 flex justify-center items-center gap-2">
                                Subscribe Now <ArrowRight size={16} />
                            </button>
                            <p className="text-xs text-center text-gray-500 mt-4">
                                By subscribing you agree to our Terms & Conditions and Privacy Policy.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowroomInfo;
