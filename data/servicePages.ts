export interface ServicePage {
    id: string;
    slug: string;
    title: string;
    metaDescription: string;
    heroTitle: string;
    heroSubtitle: string;
    focusKeywords: string[];
    intro: string;
    benefits: {
        title: string;
        description: string;
        icon: string;
    }[];
    process: {
        step: number;
        title: string;
        description: string;
    }[];
    useCases: string[];
    faq: {
        question: string;
        answer: string;
    }[];
    relatedServices: string[];
}

export const servicePages: ServicePage[] = [
    {
        id: 'building-wrap',
        slug: 'building-shrink-wrap-vancouver',
        title: 'Building shrink wrap Vancouver | Construction Site Enclosures British Columbia',
        metaDescription: 'Professional building shrink wrap services in Vancouver. Weather-proof construction site enclosures, scaffolding wrap, and renovation protection across British Columbia.',
        heroTitle: 'Building shrink wrap',
        heroSubtitle: 'Construction Site Enclosures for Vancouver & British Columbia',
        focusKeywords: ['Building shrink wrap Vancouver', 'Construction Site Enclosure', 'Scaffolding Wrap British Columbia'],
        intro: 'Keep your construction project on schedule through Vancouver\'s harshest winters. Our building shrink wrap creates a weatherproof "workable bubble" that allows your crew to continue painting, drywalling, and finishing workâ€”no matter what the forecast says. We serve construction sites across Vancouver, Surrey, Burnaby, Victoria, and all of British Columbia.',
        benefits: [
            {
                title: 'Year-Round Construction',
                description: 'Continue building through winter with a climate-controlled environment. Our shrink wrap enclosures keep heat in and cold out, allowing interior work to proceed on schedule.',
                icon: 'Thermometer'
            },
            {
                title: '100% Weather Protection',
                description: 'Our heat-welded seams create a drum-tight seal that won\'t leak, flap, or tear in Vancouver\'s notorious winds. Snow, rain, and debris stay outside.',
                icon: 'Shield'
            },
            {
                title: 'Cost Savings',
                description: 'Weather delays cost $1,000-$5,000+ per day. Our shrink wrap pays for itself by keeping your project moving. Most clients see ROI within the first week.',
                icon: 'DollarSign'
            },
            {
                title: 'Containment & Compliance',
                description: 'Meet environmental and safety regulations with 100% dust, debris, and fume containment. Essential for asbestos abatement, sandblasting, and painting projects.',
                icon: 'CheckCircle'
            }
        ],
        process: [
            {
                step: 1,
                title: 'Site Assessment',
                description: 'We visit your construction site to measure and assess requirements. We\'ll discuss your timeline, access needs, and any special considerations.'
            },
            {
                step: 2,
                title: 'Custom Quote',
                description: 'Within 24 hours, you\'ll receive a detailed quote with no hidden fees. We explain exactly what\'s included and answer any questions.'
            },
            {
                step: 3,
                title: 'Installation',
                description: 'Our trained crew installs your shrink wrap enclosure, typically completing most projects in 1-3 days. We work around your schedule to minimize disruption.'
            },
            {
                step: 4,
                title: 'Ongoing Support',
                description: 'Need access doors, vents, or modifications? We provide ongoing support throughout your project. Our wrap includes 12-18 months of protection.'
            }
        ],
        useCases: [
            'Multi-story building construction and renovation',
            'Scaffolding enclosures for exterior work',
            'Heritage building restoration projects',
            'Commercial renovation and expansion',
            'Residential construction in winter months',
            'Asbestos abatement and hazmat containment',
            'Paint and coating application enclosures'
        ],
        faq: [
            {
                question: 'How long does building shrink wrap installation take?',
                answer: 'Most building enclosures are completed in 1-3 days, depending on size and complexity. Larger multi-story projects may take 4-5 days. We work efficiently to minimize disruption to your construction schedule.'
            },
            {
                question: 'Can workers access the building while it\'s wrapped?',
                answer: 'Absolutely! We install access doors, zippered entries, and ventilation points wherever needed. The enclosure is designed to allow full work access while maintaining weather protection.'
            },
            {
                question: 'How does shrink wrap handle heavy snow loads?',
                answer: 'Our drum-tight installation sheds snow naturallyâ€”it slides right off the taut surface. Unlike tarps that collect snow and sag, shrink wrap maintains its shape throughout winter.'
            }
        ],
        relatedServices: ['boat-wrap', 'transport-wrap']
    },
    {
        id: 'boat-wrap',
        slug: 'boat-shrink-wrap-vancouver',
        title: 'Boat shrink wrap Vancouver | Marine Storage Protection British Columbia',
        metaDescription: 'Professional boat shrink wrapping in Vancouver. Protect your boat, yacht, or watercraft during British Columbia winters. Mobile service available across the province.',
        heroTitle: 'Boat & Marine shrink wrap',
        heroSubtitle: 'Protect Your Watercraft Through British Columbia Winters',
        focusKeywords: ['Boat shrink wrap Vancouver', 'Marine Wrap British Columbia', 'Boat Storage Protection'],
        intro: 'Your boat is a significant investmentâ€”protect it properly during British Columbia\'s long, harsh winters. Our marine shrink wrap provides complete protection from snow, ice, UV damage, and critters. We wrap boats of all sizes at your location throughout Vancouver, Surrey, and across British Columbia.',
        benefits: [
            {
                title: 'Complete Protection',
                description: 'Our shrink wrap creates a sealed barrier against snow, ice, rain, and UV rays. Unlike covers that can blow off or allow moisture in, shrink wrap stays tight all winter.',
                icon: 'Shield'
            },
            {
                title: 'Prevents Mold & Mildew',
                description: 'Proper ventilation and moisture control prevent the mold and mildew that ruin upholstery and interiors. Your boat stays dry and ready for spring.',
                icon: 'Wind'
            },
            {
                title: 'Pest Protection',
                description: 'Mice, squirrels, and other critters love to nest in boats over winter. Our sealed wrap keeps them out, protecting wiring and upholstery from damage.',
                icon: 'Bug'
            },
            {
                title: 'Mobile Service',
                description: 'We come to you! Whether your boat is at home, in storage, or at a marina, our mobile crew wraps on-site anywhere in British Columbia.',
                icon: 'Truck'
            }
        ],
        process: [
            {
                step: 1,
                title: 'Schedule Service',
                description: 'Call or email to schedule your boat wrap. We\'ll ask about boat size, location, and any special requirements (engine cover, support poles, etc.).'
            },
            {
                step: 2,
                title: 'Preparation',
                description: 'We install support structures to prevent snow pooling, cover sharp edges, and ensure proper ventilation before wrapping.'
            },
            {
                step: 3,
                title: 'shrink wrap Application',
                description: 'We apply and heat-shrink the wrap to create a drum-tight seal. The entire process typically takes 1-3 hours depending on boat size.'
            },
            {
                step: 4,
                title: 'Spring Removal',
                description: 'When spring arrives, we offer removal services or you can easily cut away the wrap yourself. The material is 100% recyclable.'
            }
        ],
        useCases: [
            'Pontoon boats and fishing boats',
            'Ski boats and wakeboard boats',
            'Cabin cruisers and yachts',
            'Personal watercraft (jet skis)',
            'Sailboats and catamarans',
            'Commercial vessels',
            'Boats in outdoor storage or driveways'
        ],
        faq: [
            {
                question: 'How much does boat shrink wrap cost in Vancouver?',
                answer: 'Pricing is typically $12-$20 per linear foot. Pontoon boats usually run $300-$500, mid-size boats $500-$1,000, and larger vessels $1,000-$2,000+. We provide free quotes based on your specific boat.'
            },
            {
                question: 'Do you wrap boats at my house?',
                answer: 'Yes! Our mobile service wraps boats at your home, storage facility, marina, or anywhere in Vancouver and across British Columbia. No need to transport your boatâ€”we come to you.'
            },
            {
                question: 'Is shrink wrap better than a boat cover?',
                answer: 'For British Columbia winters, absolutely. Covers can blow off, allow moisture in, and don\'t provide the same UV or pest protection. shrink wrap stays sealed all winter and handles heavy snow loads.'
            }
        ],
        relatedServices: ['building-wrap', 'transport-wrap']
    },
    {
        id: 'transport-wrap',
        slug: 'transport-shrink-wrap-british-columbia',
        title: 'Transport shrink wrap British Columbia | Equipment & Modular Unit Protection',
        metaDescription: 'Industrial transport shrink wrap for equipment and modular units in British Columbia. Protect cargo from road debris, salt, and weather during transit.',
        heroTitle: 'Transport & Equipment Wrap',
        heroSubtitle: 'Protect Your Cargo Across British Columbia & Beyond',
        focusKeywords: ['Transport shrink wrap British Columbia', 'Equipment Wrap Vancouver', 'Modular Unit Protection'],
        intro: 'Moving heavy equipment, modular buildings, or industrial components? Our transport shrink wrap protects your valuable cargo from road salt, debris, and weather damage during transit. Unlike tarps that flap and tear at highway speeds, our heat-sealed wrap stays drum-tight from Vancouver to anywhere.',
        benefits: [
            {
                title: 'Highway-Speed Protection',
                description: 'Our shrink wrap won\'t flap, chafe, or come loose at highway speeds. The heat-sealed membrane moves with the load, staying tight from origin to destination.',
                icon: 'Zap'
            },
            {
                title: 'Corrosion Prevention',
                description: 'British Columbia roads are covered in salt and brine during winter. Our sealed wrap prevents corrosive materials from reaching sensitive equipment components.',
                icon: 'Shield'
            },
            {
                title: 'Moisture Barrier',
                description: 'Rain, snow, and road spray can\'t penetrate our heat-welded seams. Your cargo arrives dry and ready for installation.',
                icon: 'Droplets'
            },
            {
                title: 'Tamper Evidence',
                description: 'shrink wrap provides visible securityâ€”any tampering is immediately obvious. Know your cargo arrived exactly as it left.',
                icon: 'Lock'
            }
        ],
        process: [
            {
                step: 1,
                title: 'Pre-Transport Assessment',
                description: 'We assess your equipment or module, identify fragile areas, and plan the wrap strategy to ensure complete protection during transit.'
            },
            {
                step: 2,
                title: 'Surface Preparation',
                description: 'We protect sharp edges, cover sensitive components, and ensure nothing will puncture the wrap during the journey.'
            },
            {
                step: 3,
                title: 'Wrap Application',
                description: 'Industrial-grade shrink wrap is applied and heat-sealed to create a continuous, taut barrier around the entire load.'
            },
            {
                step: 4,
                title: 'Final Inspection',
                description: 'We inspect every seam, add reinforcement where needed, and ensure your cargo is ready for transport to any destination.'
            }
        ],
        useCases: [
            'Modular buildings and prefab units',
            'Industrial equipment and machinery',
            'Oil and gas components',
            'Manufacturing equipment',
            'Military and government cargo',
            'Oversize loads requiring weather protection',
            'Long-distance transport across provinces'
        ],
        faq: [
            {
                question: 'How is transport wrap different from building wrap?',
                answer: 'Transport wrap uses thicker, more durable material designed to withstand the vibration and stress of highway travel. It\'s also applied differently to ensure it moves with the load without chafing.'
            },
            {
                question: 'Do you wrap equipment at remote sites?',
                answer: 'Yes! We regularly travel to industrial sites, construction locations, and remote areas across British Columbia to wrap equipment before transport. We\'ve wrapped loads from Prince George to Victoria and beyond.'
            },
            {
                question: 'What size equipment can you wrap?',
                answer: 'There\'s virtually no limit. We\'ve wrapped everything from small machinery to massive modular buildings. Our process adapts to any shape or sizeâ€”if it needs to move, we can wrap it.'
            }
        ],
        relatedServices: ['building-wrap', 'boat-wrap']
    }
];

export const getServicePageById = (id: string): ServicePage | undefined => {
    return servicePages.find(service => service.id === id);
};

export const getServicePageBySlug = (slug: string): ServicePage | undefined => {
    return servicePages.find(service => service.slug === slug);
};
