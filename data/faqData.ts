export interface FAQItem {
    question: string;
    answer: string;
}

export const faqData: FAQItem[] = [
    {
        question: "What is industrial SHRINKWRAP and how does it work?",
        answer: "Industrial SHRINKWRAP is a heavy-duty polyethylene plastic that, when heated, shrinks to form a tight, protective seal around any structure or object. We use specialized heat guns to weld the plastic, creating a seamless, drum-tight membrane that protects against weather, dust, and debris. It's far superior to tarps because it won't flap, tear, or allow water penetration."
    },
    {
        question: "How long does SHRINKWRAP last on a building or structure?",
        answer: "Our industrial-grade SHRINKWRAP is UV-resistant and designed to last 12-18 months under normal British Columbia weather conditions. For projects requiring longer protection, we offer maintenance services and can re-wrap as needed. The wrap remains intact through Vancouver's harsh winters, including heavy snow loads and high winds."
    },
    {
        question: "What types of projects can Vancouver Shrinkwrap handle?",
        answer: "We handle a wide range of projects including: construction site enclosures, scaffolding containment, boat and marine vessel wrapping, industrial equipment protection, modular unit transport wrapping, dust and debris containment for renovations, and temporary weather shelters. From small residential jobs to large industrial sites, we have the expertise and equipment to wrap it all."
    },
    {
        question: "How much does SHRINKWRAPping cost?",
        answer: "Cost depends on the size and complexity of your project. Factors include square footage, height, accessibility, and whether scaffolding is needed. We provide free on-site estimates for accurate pricing. Generally, SHRINKWRAPping is more cost-effective than project delays caused by weatherâ€”most clients see immediate ROI through reduced downtime."
    },
    {
        question: "Do you service areas outside of Vancouver?",
        answer: "Yes! While we're based in Vancouver, we serve all of British Columbia including Surrey, Burnaby, Langley, Coquitlam, Victoria, Kelowna, Kamloops, and Prince George. We regularly travel for larger industrial and commercial projects throughout the province."
    },
    {
        question: "How quickly can you wrap my project?",
        answer: "Most projects can be scheduled within 1-2 weeks, with emergency services available for urgent situations. A typical building enclosure takes 1-3 days depending on size, while smaller boat wraps can often be completed same-day. Contact us for specific timelines based on your project requirements."
    },
    {
        question: "Is SHRINKWRAP environmentally friendly?",
        answer: "Our SHRINKWRAP is 100% recyclable. After removal, the material can be recycled through standard polyethylene recycling programs. Additionally, by providing superior containment, we help prevent paint fumes, dust, and debris from escaping into the environmentâ€”helping your project meet environmental compliance requirements."
    },
    {
        question: "Can workers still access the structure once it's wrapped?",
        answer: "Absolutely! We install access doors, zippered entries, and ventilation points as needed. The 'workable bubble' we create allows your crew to continue working inside a climate-controlled environment. We design each enclosure with your workflow in mind, ensuring easy access while maintaining full protection."
    },
    {
        question: "What's the difference between SHRINKWRAP and regular tarps?",
        answer: "Tarps are loose coverings that flap in wind, leak at seams, and provide minimal insulation. SHRINKWRAP is heat-welded to create a seamless, structural membrane that's completely waterproof, wind-resistant, and provides thermal insulation. SHRINKWRAP won't tear or come loose in British Columbia's harsh winter conditions, making it the professional choice for serious weather protection."
    },
    {
        question: "Are you licensed and insured?",
        answer: "Yes, Vancouver Shrinkwrap is fully insured and WCB compliant. We carry comprehensive liability insurance and workers' compensation coverage for all our team members. We can provide certificates of insurance upon request for your project requirements."
    }
];

// Generate FAQ Schema markup for SEO
export const generateFAQSchema = (faqs: FAQItem[]): object => {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
};
