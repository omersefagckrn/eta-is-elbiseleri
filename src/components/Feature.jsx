import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const Feature = ({ imgSrc, title, description, reverse }) => {
	const controls = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.1
	});

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		} else {
			controls.start('hidden');
		}
	}, [controls, inView]);

	const variants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 }
	};

	return (
		<motion.div
			ref={ref}
			className={`flex flex-col md:flex-row items-center lg:my-8 ${reverse ? 'md:flex-row-reverse' : ''} overflow-hidden`}
			initial='hidden'
			animate={controls}
			variants={variants}
			transition={{ duration: 0.5 }}
		>
			<img src={imgSrc} alt={title} className='w-full h-72 object-contain md:w-1/2 flex-shrink-0' />
			<div className='md:ml-8 md:mr-8 w-full md:w-1/2 mt-4 md:mt-0 text-center md:text-left'>
				<div className='text-xl font-bold'>{title}</div>
				<div className='text-gray-400 mt-2 text-sm'>{description}</div>
			</div>
		</motion.div>
	);
};

Feature.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	reverse: PropTypes.bool
};

export default Feature;
