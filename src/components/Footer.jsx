import { useEffect } from 'react';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';
import { kurumsal_adres, kurumsal_mail, kurumsal_numara } from '../constants/info';
import Logo from './Logo';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true
	});

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	const fadeInUp = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 }
	};

	return (
		<>
			<footer id='contact' className='bg-[#fafafa] text-black pt-16 pb-4 select-none'>
				<div className='container mx-auto w-full'>
					<div className='px-4'></div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-4'>
						<motion.div
							ref={ref}
							className='flex items-start justify-between flex-col'
							initial='hidden'
							animate={controls}
							variants={fadeInUp}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<div className='text-[14px] space-y-2'>
								<div className='font-bold text-lg mb-2 border-b border-b-gray-400 pb-2 text-[17px]'>Hakkımızda</div>
								<div className='text-justify'>
									ETA İş Elbiseleri ve İş Güvenlik Ekipmanları olarak, çalışma ortamlarında güvenlik ve konforu sağlama
									misyonuyla hareket eden öncü bir firmayız. İş sağlığı ve güvenliği alanında yılların tecrübesi ile siz değerli
									müşterilerimize en kaliteli ürünleri sunmayı hedefliyoruz.
								</div>
							</div>
							<div className='pt-10 lg:mt-0'>
								<Logo />
							</div>
						</motion.div>

						<motion.div
							ref={ref}
							className='text-[14px]'
							initial='hidden'
							animate={controls}
							variants={fadeInUp}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<div className='font-bold text-lg mb-2 border-b border-b-gray-400 pb-2 text-[17px]'>İletişim</div>
							<div className='flex items-center mb-2'>
								<FiMapPin className='mr-2' />
								<div>{kurumsal_adres}</div>
							</div>
							<a href={`tel:${kurumsal_numara}`} className='flex items-center mb-2'>
								<FiPhoneCall className='mr-2' />
								<div>{kurumsal_numara}</div>
							</a>
							<a href={`mailto:${kurumsal_mail}`} className='flex items-center mb-2'>
								<FiMail className='mr-2' />
								<div>{kurumsal_mail}</div>
							</a>
						</motion.div>

						<motion.div ref={ref} initial='hidden' animate={controls} variants={fadeInUp} transition={{ duration: 0.5, delay: 0.3 }}>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d765.8601996129305!2d29.234819851638967!3d40.883868222051824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadcababbfec0d%3A0xb89f33b625ea5766!2sBah%C3%A7elievler%2C%20Adnan%20Menderes%20Blv.%20No%3A23%20D%3Aa%2C%2034893%20Pendik%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1720089632729!5m2!1sen!2str'
								width='100%'
								height='300'
								loading='lazy'
							></iframe>
						</motion.div>
					</div>
					<div className='text-center mt-8 text-black/50 text-sm'>© 2024 Eta İş Elbiseleri. Tüm hakları saklıdır, kalite ve güvenin adresi.</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
