import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { kurumsal_numara } from '../constants/info';
import { LuPhone } from 'react-icons/lu';

const Promotion = () => {
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
		hidden: { opacity: 0, y: 100 },
		visible: { opacity: 1, y: 0 }
	};

	return (
		<motion.div
			ref={ref}
			initial='hidden'
			animate={controls}
			variants={variants}
			transition={{ duration: 0.5 }}
			id='promotion'
			className='flex flex-col md:flex-row items-center rounded-lg p-8 shadow-lg my-8'
		>
			<div className='md:w-1/2 text-center md:text-left'>
				<h2 className='text-2xl md:text-3xl font-bold text-green-500'>
					En iyi fiyatlar <span className='text-green-600'>Eta İş Elbiselerin&lsquo;de</span> seni bekliyor
				</h2>
				<p className='mt-4 text-green-700'>
					Profesyonel ve kaliteli iş elbiseleri ile iş hayatınızı kolaylaştırın. İş elbiseleri, iş güvenliği ekipmanları ve daha fazlası için hemen bize ulaşın.
				</p>
				<div className='flex'>
					<a href={`tel:${kurumsal_numara}`} className='mt-6 px-4 py-2 bg-green-600 text-white rounded-full flex items-center mx-auto md:mx-0'>
						<LuPhone className='mr-2' /> <div>Bize Ulaş</div>
					</a>
				</div>
			</div>
			<div className='md:w-1/2 mt-8 md:mt-0 md:ml-8'>
				<img
					src='https://cdn.armut.com/images/consumer-paid-landing-page/price-banner.png?tr=w-1080%2Car-4-3%2Cfo-auto%2Cf-auto'
					alt='Promotion'
					className='rounded-lg'
				/>
			</div>
		</motion.div>
	);
};

export default Promotion;
