import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Banner = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: false // her geldiğinde tetiklenmesi için false yapıyoruz
	});

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		} else {
			controls.start('hidden');
		}
	}, [controls, inView]);

	const fadeInUp = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 }
	};

	return (
		<div className='relative h-screen overflow-hidden w-full'>
			<div className='parallax-bg absolute inset-0'></div>
			<motion.div
				ref={ref}
				className='relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 w-full'
				initial='hidden'
				animate={controls}
				variants={fadeInUp}
				transition={{ duration: 0.5 }}
			>
				<div className='max-w-2xl'>
					<h1 className='text-5xl font-bold md:text-6xl lg:text-7xl'>Her Dikişte Güvenlik ve Rahatlık</h1>
					<p className='mt-4 text-lg md:text-xl lg:text-2xl'>
						Çalışma alanında koruma ve rahatlık sağlamak için en kaliteli iş elbiseleri ve güvenlik ekipmanlarını sunuyoruz. Yılların deneyimi ve
						mükemmelliğe bağlılık ile.
					</p>
					<div className='mt-8 flex flex-col items-center justify-center md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
						<button
							className='px-8 py-4 bg-yellow-500 text-black font-bold rounded-full shadow-lg transition transform hover:scale-105'
							onClick={() => {
								document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
							}}
						>
							İş Elbiselerini Keşfedin
						</button>
						<button
							className='px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full shadow-lg transition transform hover:scale-105'
							onClick={() => {
								document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
							}}
						>
							Güvenlik Ekipmanlarını Görüntüle
						</button>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Banner;
