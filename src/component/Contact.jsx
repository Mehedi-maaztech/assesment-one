import { useState } from "react";
import metrologo from '../assets/Frame.gif'
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { GiDrippingStar } from "react-icons/gi";


const socialLinks = [
    {
        name: "LinkedIn", icon: <CiLinkedin />
    },
    {
        name: "Facebook", icon: <CiFacebook />
    },
    {
        name: "Instagram", icon: <FaInstagram />
    },
    {
        name: "Twitter", icon: <FaTwitter />
    },
    {
        name: "YouTube", icon: <CiYoutube />
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "Choose service",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setFormData({
            name: "",
            email: "",
            phone: "",
            service: "Choose service",
            message: "",
        });
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 py-12 font-inter text-white"
            style={{
                background:
                    "radial-gradient(circle at 20% 30%, #1E003E 0%, #0D061C 80%)",
            }}
        >
            <div
                className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl grid lg:grid-cols-5 border border-violet-600/30"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(29, 0, 70, 0.25), rgba(13, 6, 28, 0.75))",
                }}
            >
                <div
                    className="p-10 lg:col-span-2 flex flex-col justify-between"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(45,0,90,0.9) 0%, rgba(15,5,30,1) 100%)",
                    }}
                >
                    <div className="flex items-center space-x-2 mb-10">
                        <div className="w-10 h-10  rounded-lg flex items-center justify-center font-bold text-xl">
                            <img src={metrologo} alt="" />
                        </div>
                        <h2 className="text-2xl font-semibold tracking-wide">
                            Metro Solver
                        </h2>
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold mb-4 leading-tight">
                            Still Have
                            <br />
                            A Question?
                        </h1>
                        <p className="text-gray-300 text-sm leading-relaxed mb-10">
                            Get in touch with our team — we’re here to assist you with your
                            project, inquiry, or partnership opportunity.
                        </p>
                    </div>

                    <div className="flex space-x-3 mt-auto">
                        {socialLinks.map((social) => (
                            <button
                                key={social.name}
                                className="btn btn-circle bg-violet-900/30 border border-violet-500/40 text-violet-300 hover:bg-violet-600 hover:text-white transition-all"
                            >
                                {
                                    social.icon
                                }
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-10 lg:col-span-3 bg-transparent">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label text-gray-300">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full bg-transparent border-violet-700 focus:border-violet-500 text-white"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label text-gray-300">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full bg-transparent border-violet-700 focus:border-violet-500 text-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label text-gray-300">WhatsApp / Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your number"
                                    className="input input-bordered w-full bg-transparent border-violet-700 focus:border-violet-500 text-white"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label text-gray-300">
                                    Looking for Support in
                                </label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="select select-bordered w-full bg-transparent border-violet-700 focus:border-violet-500 text-white"
                                >
                                    <option disabled>Choose service</option>
                                    <option>General Inquiry</option>
                                    <option>Technical Support</option>
                                    <option>Billing & Payments</option>
                                    <option>Partnership</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-control flex flex-col">
                            <label className="label text-gray-300">Your Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message here..."
                                className="textarea textarea-bordered w-full h-40 bg-transparent border-violet-700 focus:border-violet-500 text-white"
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="btn w-full border-none text-lg font-semibold text-white transition-transform duration-300 hover:scale-105"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #8b5cf6 0%, #a855f7 50%, #ec4899 100%)",
                                    boxShadow: "0 6px 20px rgba(168, 85, 247, 0.4)",
                                }}
                            >
                                <GiDrippingStar />
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
