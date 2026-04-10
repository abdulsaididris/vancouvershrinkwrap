
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Phone, ChevronDown, Thermometer, Shield, DollarSign, CheckCircle, Wind, Truck, Zap, Droplets, Lock, Bug } from 'lucide-react';
import { getServicePageById, ServicePage as ServicePageType } from '../data/servicePages';

interface ServicePageProps {
    serviceId: string;
    onBack: () => void;
    onServiceClick: (serviceId: string) => void;
}

const iconMap: { [key: string]: React.ReactNode } = {
    Thermometer: <Thermometer size={24} />,
    Shield: <Shield size={24} />,
    DollarSign: <DollarSign size={24} />,
    CheckCircle: <CheckCircle size={24} />,
    Wind: <Wind size={24} />,
    Truck: <Truck size={24} />,
    Zap: <Zap size={24} />,
    Droplets: <Droplets size={24} />,
    Lock: <Lock size={24} />,
    Bug: <Bug size={24} />
};

export const ServicePage: React.FC<ServicePageProps> = ({ serviceId, onBack, onServiceClick }) => {
    const service = getServicePageById(serviceId);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [serviceId]);

    if (!service) {
        return (
            <div className="py-24 text-center">
                <h2 className="text-2xl font-bold text-slate-900">Service not found</h2>
                <button onClick={onBack} className="mt-4 text-orange-500 hover:text-orange-600">
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
        <div className="relative bg-slate-900 pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/hero-building.jpg')] bg-cover bg-center opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900"></div>
            <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
                    <button
                        onClick={onBack}
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        <span className="font-semibold">Back to Home</span>
                    </button>

                    <span className="inline-block px-4 py-1.5 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                        Our Services
                    </span>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4">
                        {service.heroTitle}
                    </h1>

                    <p className="text-xl md:text-2xl text-orange-400 font-semibold mb-6">
                        {service.heroSubtitle}
                    </p>

                    <p className="text-slate-300 text-lg max-w-3xl leading-relaxed mb-8">
                        {service.intro}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contact"
                            onClick={onBack}
                            className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg transition-all gap-3 rounded-lg"
                        >
                            Get Free Quote
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="tel:6044090668"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white hover:text-slate-900 text-white font-bold text-lg transition-all gap-3 rounded-lg border-2 border-white/30"
                        >
                            <Phone size={20} />
                            604-409-0668
                        </a>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-16 md:py-24 bg-white">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <span className="mono text-orange-600 font-bold uppercase tracking-widest text-xs mb-3 block">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                            KEY <span className="text-orange-500">BENEFITS</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {service.benefits.map((benefit, i) => (
                            <div
                                key={i}
                                className="p-6 md:p-8 bg-slate-50 border-2 border-slate-100 hover:border-orange-500 transition-all rounded-lg group"
                            >
                                <div className="w-14 h-14 bg-orange-500 text-white flex items-center justify-center mb-6 rounded-lg group-hover:scale-110 transition-transform">
                                    {iconMap[benefit.icon] || <CheckCircle size={24} />}
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-3">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="py-16 md:py-24 bg-slate-100">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <span className="mono text-orange-600 font-bold uppercase tracking-widest text-xs mb-3 block">
                            How It Works
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                            OUR <span className="text-orange-500">PROCESS</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.process.map((step, i) => (
                            <div key={i} className="relative">
                                <div className="bg-white p-6 rounded-lg border-2 border-slate-200 h-full">
                                    <div className="w-12 h-12 bg-orange-500 text-white font-black text-xl flex items-center justify-center rounded-full mb-4">
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                                </div>
                                {i < service.process.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                                        <ArrowRight className="text-orange-300" size={20} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Use Cases Section */}
            <div className="py-16 md:py-24 bg-white">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <span className="mono text-orange-600 font-bold uppercase tracking-widest text-xs mb-3 block">
                            Applications
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                            COMMON <span className="text-orange-500">USE CASES</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {service.useCases.map((useCase, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100"
                            >
                                <CheckCircle className="text-orange-500 flex-shrink-0" size={20} />
                                <span className="text-slate-700 font-medium">{useCase}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-16 md:py-24 bg-slate-900">
                <div className="max-w-[900px] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <span className="mono text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">
                            Common Questions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-white">
                            FREQUENTLY <span className="text-orange-500">ASKED</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {service.faq.map((item, i) => (
                            <div
                                key={i}
                                className={`bg-slate-800 rounded-lg overflow-hidden transition-all ${openFaq === i ? 'ring-2 ring-orange-500' : ''
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-5 text-left"
                                >
                                    <span className={`font-bold text-lg ${openFaq === i ? 'text-orange-500' : 'text-white'
                                        }`}>
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        size={20}
                                        className={`text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-orange-500' : ''
                                            }`}
                                    />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96' : 'max-h-0'
                                    }`}>
                                    <p className="px-5 pb-5 text-slate-400 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 md:py-24 bg-orange-500">
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
                        Contact Vancouver Shrinkwrap today for a free, no-obligation quote. We serve Vancouver, Surrey, Burnaby, Victoria, and all of British Columbia.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            onClick={onBack}
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 hover:bg-slate-900 hover:text-white font-bold text-lg transition-all gap-3 rounded-lg"
                        >
                            Get Free Quote
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="tel:6044090668"
                            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold text-lg transition-all gap-3 rounded-lg"
                        >
                            <Phone size={20} />
                            604-409-0668
                        </a>
                    </div>
                </div>
            </div>

            {/* Related Services */}
            <div className="py-16 bg-slate-50">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                    <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">
                        Related Services
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {service.relatedServices.map((relatedId) => (
                            <button
                                key={relatedId}
                                onClick={() => onServiceClick(relatedId)}
                                className="px-6 py-3 bg-white border-2 border-slate-200 hover:border-orange-500 text-slate-700 hover:text-orange-600 font-bold rounded-lg transition-all"
                            >
                                {relatedId === 'building-wrap' && 'Building SHRINKWRAP'}
                                {relatedId === 'boat-wrap' && 'Boat & Marine Wrap'}
                                {relatedId === 'transport-wrap' && 'Transport Wrap'}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* SEO Keywords Footer */}
            <div className="py-8 bg-slate-100 border-t border-slate-200">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                    <div className="flex flex-wrap justify-center gap-2">
                        {service.focusKeywords.map((keyword, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-white text-slate-500 text-xs font-semibold rounded-full border border-slate-200"
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
