
import React, { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData, generateFAQSchema, FAQItem } from '../data/faqData';

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    useEffect(() => {
        // Inject FAQ Schema into the page head
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(generateFAQSchema(faqData));
        script.id = 'faq-schema';

        // Remove existing schema if present
        const existingScript = document.getElementById('faq-schema');
        if (existingScript) {
            existingScript.remove();
        }

        document.head.appendChild(script);

        return () => {
            const scriptToRemove = document.getElementById('faq-schema');
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
        };
    }, []);

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-16 md:py-24 bg-slate-900 relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-12 md:mb-16">
                    <span className="mono text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 md:mb-4 block">
                        Got Questions?
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white">
                        FREQUENTLY <span className="text-orange-500">ASKED</span>
                    </h2>
                    <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
                        Everything you need to know about our shrink wrap services in Vancouver and across British Columbia.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-3 md:space-y-4">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-slate-800 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? 'ring-2 ring-orange-500' : ''
                                    }`}
                            >
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                                    aria-expanded={openIndex === index}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <HelpCircle
                                                size={20}
                                                className={`transition-colors ${openIndex === index ? 'text-orange-500' : 'text-slate-500'
                                                    }`}
                                            />
                                        </div>
                                        <span className={`text-base md:text-lg font-bold transition-colors ${openIndex === index ? 'text-orange-500' : 'text-white group-hover:text-orange-400'
                                            }`}>
                                            {faq.question}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        size={20}
                                        className={`flex-shrink-0 ml-4 text-slate-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-orange-500' : ''
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-5 md:px-6 pb-5 md:pb-6 pl-14 md:pl-16">
                                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-10 md:mt-12 text-center p-6 md:p-8 bg-slate-800/50 rounded-lg border border-slate-700">
                        <p className="text-slate-300 text-base md:text-lg mb-4">
                            Still have questions? We're here to help!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold transition-colors rounded-lg"
                            >
                                Contact Us
                            </a>
                            <a
                                href="tel:7804793285"
                                className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold transition-colors rounded-lg"
                            >
                                Call 780-479-3285
                            </a>
                        </div>
                    </div>
                </div>

                {/* SEO Keywords */}
                <div className="mt-12 text-center">
                    <p className="text-slate-600 text-xs">
                        Vancouver Shrink Wrap | Shrink Wrap British Columbia | Industrial Shrink Wrap Vancouver | Building Enclosures | Scaffolding Containment
                    </p>
                </div>
            </div>
        </div>
    );
};
