import InterestCard from '@/components/cards/InterestCard';
import React from 'react';
import outdoor from '@/assets/images/outdoor.png'
import culture from '@/assets/images/culture.png'
import food from '@/assets/images/food.png'
import shore from '@/assets/images/shore.png'
import night from '@/assets/images/night.png'
import wellness from '@/assets/images/wellness.png'
import friendly from '@/assets/images/friendly.png'
import art from '@/assets/images/art.png'

const interests = [
    {
        title: 'Outdoor Adventures',
        imageUrl: outdoor,
    },
    {
        title: 'Culture & History',
        imageUrl: culture,
    },
    {
        title: 'Wellness & Relaxation',
        imageUrl: wellness,
    },
    {
        title: 'Shore Excursions',
        imageUrl: shore,
    },
    {
        title: 'Family-Friendly',
        imageUrl: friendly,
    },
    {
        title: 'Art & Craft',
        imageUrl: art,
    },
    {
        title: 'Food & Drink',
        imageUrl: food,
    },
    {
        title: 'Nightlife & Ent.',
        imageUrl: night,
    },
];

const Interests: React.FC = () => {
    return (

        <div className="grid grid-cols-4 gap-4 w-full">
            {interests.map((interest, index) => (
                <InterestCard
                    key={index}
                    title={interest.title}
                    imageUrl={interest.imageUrl}
                    isSelectable={false}
                    containerClassName='w-[92px]'
                    imageClassName=' h-[105px] rounded-[12px] cove'
                />
            ))}
        </div>
    );
};

export default Interests;
