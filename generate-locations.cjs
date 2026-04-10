const fs = require('fs');

const cities = `Vancouver
Surrey
Burnaby
Richmond
Abbotsford
Coquitlam
Langley (City)
Langley (Township)
Delta
North Vancouver (City)
North Vancouver (District)
West Vancouver
New Westminster
Maple Ridge
Pitt Meadows
Kelowna
Kamloops
Nanaimo
Victoria
Saanich
Langford
Colwood
Prince George
Chilliwack
Courtenay
Campbell River
Penticton
Vernon
Duncan
Squamish
Whistler
Sechelt
Powell River
Parksville
Qualicum Beach
Port Alberni
Salmon Arm
Revelstoke
Cranbrook
Kimberley
Nelson
Castlegar
Trail
Grand Forks
Williams Lake
Quesnel
Terrace
Kitimat
Prince Rupert
Fort St. John
Dawson Creek
Fort Nelson
Tumbler Ridge
Mackenzie
Chetwynd
Hudson’s Hope
Sparwood
Elkford
Logan Lake
Houston
Smithers
Burns Lake
100 Mile House
Barriere
Lillooet
Hope
Princeton
Golden
Sicamous
Chase
Cache Creek
Ashcroft
Comox
Ladysmith
Lake Cowichan
Sidney
View Royal
Central Saanich
North Saanich
Oak Bay
Port Coquitlam
Port Moody
Mission
Agassiz
Harrison Hot Springs
Oliver
Osoyoos
Summerland
Peachland
Enderby
Armstrong
Lumby
Fernie
Invermere
Radium Hot Springs
Creston
Stewart
Masset
Port Hardy
Port McNeill
Bella Coola
Kitwanga
Dease Lake`.split('\n').map(c => c.trim()).filter(Boolean);

const mainland = ['Vancouver', 'Surrey', 'Burnaby', 'Richmond', 'Abbotsford', 'Coquitlam', 'Langley (City)', 'Langley (Township)', 'Delta', 'North Vancouver (City)', 'North Vancouver (District)', 'West Vancouver', 'New Westminster', 'Maple Ridge', 'Pitt Meadows', 'Port Coquitlam', 'Port Moody', 'Mission', 'Agassiz', 'Harrison Hot Springs', 'Chilliwack', 'Hope', 'Squamish', 'Whistler'];
const island = ['Nanaimo', 'Victoria', 'Saanich', 'Langford', 'Colwood', 'Courtenay', 'Campbell River', 'Duncan', 'Sechelt', 'Powell River', 'Parksville', 'Qualicum Beach', 'Port Alberni', 'Comox', 'Ladysmith', 'Lake Cowichan', 'Sidney', 'View Royal', 'Central Saanich', 'North Saanich', 'Oak Bay', 'Masset', 'Port Hardy', 'Port McNeill', 'Bella Coola'];
const okanagan = ['Kelowna', 'Kamloops', 'Penticton', 'Vernon', 'Salmon Arm', 'Revelstoke', 'Logan Lake', '100 Mile House', 'Barriere', 'Lillooet', 'Princeton', 'Sicamous', 'Chase', 'Cache Creek', 'Ashcroft', 'Oliver', 'Osoyoos', 'Summerland', 'Peachland', 'Enderby', 'Armstrong', 'Lumby'];
const kootenay = ['Cranbrook', 'Kimberley', 'Nelson', 'Castlegar', 'Trail', 'Grand Forks', 'Sparwood', 'Elkford', 'Golden', 'Fernie', 'Invermere', 'Radium Hot Springs', 'Creston'];

function getRegion(city) {
    if (mainland.includes(city)) return 'Lower Mainland & Sea-to-Sky';
    if (island.includes(city)) return 'Vancouver Island & Coast';
    if (okanagan.includes(city)) return 'Thompson Okanagan';
    if (kootenay.includes(city)) return 'Kootenay Rockies';
    return 'Northern British Columbia';
}

function makeId(city) {
    return city.toLowerCase()
        .replace(/\(city\)/g, '-city')
        .replace(/\(district\)/g, '-district')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

const locationsData = cities.map(city => {
    return {
        id: makeId(city),
        name: city,
        region: getRegion(city),
        industrialSites: ['Local Industrial Area', 'Commercial Zones'],
        description: \`Professional shrink wrap services in \${city}, British Columbia. We provide weather protection and containment solutions for construction, marine, and industrial sectors in \${city}.\`
    };
});

const tsContent = \`export interface Location {
    id: string;
    name: string;
    region: string;
    industrialSites: string[];
    description: string;
}

export const locations: Location[] = \${JSON.stringify(locationsData, null, 4)};

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
\`;

fs.writeFileSync('data/locationsData.ts', tsContent);
console.log('locationsData.ts generated!');
