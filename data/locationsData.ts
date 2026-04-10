export interface Location {
    id: string;
    name: string;
    region: string;
    industrialSites: string[];
    description: string;
}

export const locations: Location[] = [
    { id: 'vancouver', name: 'Vancouver', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Vancouver, British Columbia. We provide weather protection and containment solutions for construction, marine, and industrial sectors in Vancouver.' },
    { id: 'surrey', name: 'Surrey', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Surrey, British Columbia. We provide weather protection and containment solutions for construction, marine, and industrial sectors in Surrey.' },
    { id: 'burnaby', name: 'Burnaby', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Burnaby, British Columbia. We provide weather protection and containment solutions for construction, marine, and industrial sectors in Burnaby.' },
    { id: 'richmond', name: 'Richmond', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Richmond, British Columbia. We provide weather protection and containment solutions for construction, marine, and industrial sectors in Richmond.' },
    { id: 'abbotsford', name: 'Abbotsford', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Abbotsford, British Columbia. We provide weather protection and containment solutions for construction, marine, and industrial sectors in Abbotsford.' },
    { id: 'coquitlam', name: 'Coquitlam', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Coquitlam, British Columbia. We provide weather protection and containment solutions for construction, marine, and industrial sectors in Coquitlam.' },
    { id: 'langley-city', name: 'Langley (City)', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Langley (City), British Columbia. We provide weather protection and containment solutions for construction, marine, and industrial sectors in Langley (City).' },
    { id: 'langley-township', name: 'Langley (Township)', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Langley (Township), British Columbia. We provide weather protection and containment solutions for construction, marine, and industrial sectors in Langley (Township).' },
    { id: 'delta', name: 'Delta', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Delta, British Columbia. We provide weather protection and containment solutions for construction, marine, and industrial sectors in Delta.' },
    { id: 'north-vancouver-city', name: 'North Vancouver (City)', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in North Vancouver (City), British Columbia. We provide weather protection and containment solutions for construction, marine, and industrial sectors in North Vancouver (City).' },
    { id: 'north-vancouver-district', name: 'North Vancouver (District)', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in North Vancouver (District), British Columbia. We provide weather protection and containment solutions for construction, marine, and industrial sectors in North Vancouver (District).' },
    { id: 'west-vancouver', name: 'West Vancouver', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in West Vancouver, British Columbia. We provide weather protection and containment solutions for construction, marine, and industrial sectors in West Vancouver.' },
    { id: 'new-westminster', name: 'New Westminster', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in New Westminster, British Columbia. We provide weather protection and containment solutions for construction, marine, and industrial sectors in New Westminster.' },
    { id: 'maple-ridge', name: 'Maple Ridge', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Maple Ridge, British Columbia. We provide weather protection and containment solutions for construction, marine, and industrial sectors in Maple Ridge.' },
    { id: 'pitt-meadows', name: 'Pitt Meadows', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Pitt Meadows, British Columbia. We provide weather protection and containment solutions for construction, marine, and industrial sectors in Pitt Meadows.' },
    
    { id: 'kelowna', name: 'Kelowna', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Kelowna, British Columbia.' },
    { id: 'kamloops', name: 'Kamloops', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Kamloops, British Columbia.' },
    { id: 'nanaimo', name: 'Nanaimo', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Nanaimo, British Columbia.' },
    { id: 'victoria', name: 'Victoria', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Victoria, British Columbia.' },
    { id: 'saanich', name: 'Saanich', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Saanich, British Columbia.' },
    { id: 'langford', name: 'Langford', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Langford, British Columbia.' },
    { id: 'colwood', name: 'Colwood', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Colwood, British Columbia.' },
    
    { id: 'prince-george', name: 'Prince George', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Prince George, British Columbia.' },
    { id: 'chilliwack', name: 'Chilliwack', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Chilliwack, British Columbia.' },
    { id: 'courtenay', name: 'Courtenay', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Courtenay, British Columbia.' },
    { id: 'campbell-river', name: 'Campbell River', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Campbell River, British Columbia.' },
    { id: 'penticton', name: 'Penticton', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Penticton, British Columbia.' },
    { id: 'vernon', name: 'Vernon', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Vernon, British Columbia.' },
    { id: 'duncan', name: 'Duncan', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Duncan, British Columbia.' },
    { id: 'squamish', name: 'Squamish', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Squamish, British Columbia.' },
    { id: 'whistler', name: 'Whistler', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Whistler, British Columbia.' },
    { id: 'sechelt', name: 'Sechelt', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Sechelt, British Columbia.' },
    { id: 'powell-river', name: 'Powell River', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Powell River, British Columbia.' },
    { id: 'parksville', name: 'Parksville', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Parksville, British Columbia.' },
    { id: 'qualicum-beach', name: 'Qualicum Beach', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Qualicum Beach, British Columbia.' },
    { id: 'port-alberni', name: 'Port Alberni', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Port Alberni, British Columbia.' },
    
    { id: 'salmon-arm', name: 'Salmon Arm', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Salmon Arm.' },
    { id: 'revelstoke', name: 'Revelstoke', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Revelstoke.' },
    { id: 'cranbrook', name: 'Cranbrook', region: 'Kootenay Rockies', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Cranbrook.' },
    { id: 'kimberley', name: 'Kimberley', region: 'Kootenay Rockies', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Kimberley.' },
    { id: 'nelson', name: 'Nelson', region: 'Kootenay Rockies', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Nelson.' },
    { id: 'castlegar', name: 'Castlegar', region: 'Kootenay Rockies', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Castlegar.' },
    { id: 'trail', name: 'Trail', region: 'Kootenay Rockies', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Trail.' },
    { id: 'grand-forks', name: 'Grand Forks', region: 'Kootenay Rockies', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Grand Forks.' },
    { id: 'williams-lake', name: 'Williams Lake', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Williams Lake.' },
    { id: 'quesnel', name: 'Quesnel', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Quesnel.' },
    { id: 'terrace', name: 'Terrace', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Terrace.' },
    { id: 'kitimat', name: 'Kitimat', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Kitimat.' },
    { id: 'prince-rupert', name: 'Prince Rupert', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area', 'Commercial Zones'], description: 'Professional SHRINKWRAP services in Prince Rupert.' },
    
    { id: 'fort-st-john', name: 'Fort St. John', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Fort St. John.' },
    { id: 'dawson-creek', name: 'Dawson Creek', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Dawson Creek.' },
    { id: 'fort-nelson', name: 'Fort Nelson', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Fort Nelson.' },
    { id: 'tumbler-ridge', name: 'Tumbler Ridge', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Tumbler Ridge.' },
    { id: 'mackenzie', name: 'Mackenzie', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Mackenzie.' },
    { id: 'chetwynd', name: 'Chetwynd', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Chetwynd.' },
    { id: 'hudsons-hope', name: 'Hudsonâ€™s Hope', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Hudsonâ€™s Hope.' },
    { id: 'sparwood', name: 'Sparwood', region: 'Kootenay Rockies', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Sparwood.' },
    { id: 'elkford', name: 'Elkford', region: 'Kootenay Rockies', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Elkford.' },
    { id: 'logan-lake', name: 'Logan Lake', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Logan Lake.' },
    { id: 'houston', name: 'Houston', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Houston.' },
    { id: 'smithers', name: 'Smithers', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Smithers.' },
    { id: 'burns-lake', name: 'Burns Lake', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Burns Lake.' },
    
    { id: '100-mile-house', name: '100 Mile House', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in 100 Mile House.' },
    { id: 'barriere', name: 'Barriere', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Barriere.' },
    { id: 'lillooet', name: 'Lillooet', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Lillooet.' },
    { id: 'hope', name: 'Hope', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Hope.' },
    { id: 'princeton', name: 'Princeton', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Princeton.' },
    { id: 'golden', name: 'Golden', region: 'Kootenay Rockies', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Golden.' },
    { id: 'sicamous', name: 'Sicamous', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Sicamous.' },
    { id: 'chase', name: 'Chase', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Chase.' },
    { id: 'cache-creek', name: 'Cache Creek', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Cache Creek.' },
    { id: 'ashcroft', name: 'Ashcroft', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Ashcroft.' },
    
    { id: 'comox', name: 'Comox', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Comox.' },
    { id: 'ladysmith', name: 'Ladysmith', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Ladysmith.' },
    { id: 'lake-cowichan', name: 'Lake Cowichan', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Lake Cowichan.' },
    { id: 'sidney', name: 'Sidney', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Sidney.' },
    { id: 'view-royal', name: 'View Royal', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in View Royal.' },
    { id: 'central-saanich', name: 'Central Saanich', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Central Saanich.' },
    { id: 'north-saanich', name: 'North Saanich', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in North Saanich.' },
    { id: 'oak-bay', name: 'Oak Bay', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Oak Bay.' },
    
    { id: 'port-coquitlam', name: 'Port Coquitlam', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Port Coquitlam.' },
    { id: 'port-moody', name: 'Port Moody', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Port Moody.' },
    { id: 'mission', name: 'Mission', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Mission.' },
    { id: 'agassiz', name: 'Agassiz', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Agassiz.' },
    { id: 'harrison-hot-springs', name: 'Harrison Hot Springs', region: 'Lower Mainland & Sea-to-Sky', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Harrison Hot Springs.' },
    
    { id: 'oliver', name: 'Oliver', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Oliver.' },
    { id: 'osoyoos', name: 'Osoyoos', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Osoyoos.' },
    { id: 'summerland', name: 'Summerland', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Summerland.' },
    { id: 'peachland', name: 'Peachland', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Peachland.' },
    { id: 'enderby', name: 'Enderby', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Enderby.' },
    { id: 'armstrong', name: 'Armstrong', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Armstrong.' },
    { id: 'lumby', name: 'Lumby', region: 'Thompson Okanagan', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Lumby.' },
    
    { id: 'fernie', name: 'Fernie', region: 'Kootenay Rockies', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Fernie.' },
    { id: 'invermere', name: 'Invermere', region: 'Kootenay Rockies', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Invermere.' },
    { id: 'radium-hot-springs', name: 'Radium Hot Springs', region: 'Kootenay Rockies', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Radium Hot Springs.' },
    { id: 'creston', name: 'Creston', region: 'Kootenay Rockies', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Creston.' },
    
    { id: 'stewart', name: 'Stewart', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Stewart.' },
    { id: 'masset', name: 'Masset', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Masset.' },
    { id: 'port-hardy', name: 'Port Hardy', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Port Hardy.' },
    { id: 'port-mcneill', name: 'Port McNeill', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Port McNeill.' },
    { id: 'bella-coola', name: 'Bella Coola', region: 'Vancouver Island & Coast', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Bella Coola.' },
    { id: 'kitwanga', name: 'Kitwanga', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Kitwanga.' },
    { id: 'dease-lake', name: 'Dease Lake', region: 'Northern British Columbia', industrialSites: ['Local Industrial Area'], description: 'Professional SHRINKWRAP services in Dease Lake.' }
];

export const getLocationsGroupedByRegion = () => {
    return locations.reduce((acc, location) => {
        if (!acc[location.region]) {
            acc[location.region] = [];
        }
        acc[location.region].push(location);
        return acc;
    }, {} as Record<string, Location[]>);
};

export const getLocationById = (id: string) => {
    return locations.find(loc => loc.id === id);
};
