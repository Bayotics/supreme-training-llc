/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/

import { useState, useEffect } from "react";
import alibaba from '../assets/alibaba.png';
import aws from '../assets/aws.png';
import azure from '../assets/azure.png';
import cisa from '../assets/cisa.png';
import cisco from '../assets/cisco.png';
import comptia from '../assets/comptia.png';
import csm from '../assets/csm.png';
import devops from '../assets/devops.png';
import ibm from '../assets/ibm.png';
import oracle from '../assets/oracle.png';
import pmp from '../assets/pmp.png';
import safe from '../assets/safe.png';


const slideWidth = 30;

const _items = [
    {
        player: {
            title: 'Certified ScrumMaster',
            description: 'Receive 30 hours of interactive live training from Scrum Alliance Certified Scrum Trainers (CSTs) and obtain 14 (PDUs) and (SEUs).',
            image: '',

            courseDuration: '30',
            rating: '',
        },
    },
    {
        player: {
            title: 'Certified ScrumMaster',
            carouselList: [
                '30 hours of interactive live sessions with experienced instructors and experiential workshops.',
                'Receive training from Scrum Alliance Certified Scrum Trainers (CSTs) and obtain 14 (PDUs) and (SEUs).'
            ],
            image: [
                
            ],

            courseDuration: '30',
            rating: '',
        },
    },
    {
        player: {
            title: 'Certified ScrumMaster',
            carouselList: [
                '30 hours of interactive live sessions with experienced instructors and experiential workshops.',
                'Receive training from Scrum Alliance Certified Scrum Trainers (CSTs) and obtain 14 (PDUs) and (SEUs).'
            ],
            image: [
                
            ],

            courseDuration: '30',
            rating: '',
        },
    },
    {
        player: {
            title: 'Certified ScrumMaster',
            carouselList: [
                '30 hours of interactive live sessions with experienced instructors and experiential workshops.',
                'Receive training from Scrum Alliance Certified Scrum Trainers (CSTs) and obtain 14 (PDUs) and (SEUs).'
            ],
            image: [
                
            ],

            courseDuration: '30',
            rating: '',
        },
    },
    {
        player: {
            title: 'Certified ScrumMaster',
            carouselList: [
                '30 hours of interactive live sessions with experienced instructors and experiential workshops.',
                'Receive training from Scrum Alliance Certified Scrum Trainers (CSTs) and obtain 14 (PDUs) and (SEUs).'
            ],
            image: [
                
            ],

            courseDuration: '30',
            rating: '',
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className="border carousel__slide-item-img-link">
                <div className="border" id="parallax-inner">
                    <div className="mt-4 border parallax-logo">
                        <img className="parallax-img" src={alibaba} alt = 'alibaba' />
                    </div>
                    <div className="parallax-button">
                        <button className="btn mt-8">Trending <i class="fa fa-fire" aria-hidden="true"></i></button>
                    </div>
                    <div className="mt-4 border parallax-header">
                        <h4>Certified ScrumMaster</h4>
                    </div>
                    <div className="border mt-4 parallax-description">
                        <p>Receive 30 hours of interactive live training from Scrum Alliance Certified Scrum Trainers (CSTs) and obtain 14 (PDUs) and (SEUs).</p>
                    </div>
                    <div className="parallax-learning-button">
                        <button className="btn mt-8">Start Learning <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                    </div>
                </div>
                {/* <img src={item.player.image} alt={item.player.title} /> */}
            </div>
            <div className="carousel-slide-item__body">
                <h4>{item.player.title}</h4>
                <p>{item.player.desc}</p>
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const Parallax = () => {
    const [items, setItems] = useState(keys);
    const [isTicking, setIsTicking] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
                <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Parallax
