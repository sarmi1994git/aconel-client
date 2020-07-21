import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { Loading } from './LoadingComponent';

function Slide(props) {
	//Uso de hooks
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	if (props.isLoading) {
		return(
			<Loading />
		);
	}
	else if (props.errMess) {
		return(
			<h4>{props.errMess}</h4>
		);
	}
	else {
		const items = props.slides.images;
		const next = () => {
			if (animating) return;
			const nextIndex = activeIndex === items.length -1 ? 0 : activeIndex + 1;
			setActiveIndex(nextIndex);
		}

		const previous = () => {
			if (animating) return;
			const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
			setActiveIndex(nextIndex);
	  	}
		const goToIndex = (newIndex) => {
			if (animating) return;
			setActiveIndex(newIndex);
		}
	  	const slides = items.map((item) => {
			return (
				<CarouselItem
					onExiting={() => setAnimating(true)}
					onExited={() => setAnimating(false)}
					key={item.src} >
					<img src={item.src} alt={item.alt} className="slide-img" />
					<CarouselCaption captionText={item.description ? item.description: ''} captionHeader={item.title} />
				</CarouselItem>
			);
		});

		return (
			<Carousel
				activeIndex={activeIndex}
				next={next}
				previous={previous} >
				<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
				{slides}
				<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
				<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
			</Carousel>
		);
	}
}


export default Slide;

