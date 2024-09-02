import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Logo from './Logo';
import { FaInstagram, FaTimes, FaBars, FaHome, FaBriefcase, FaPhoneAlt } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { kurumsal_instagram, kurumsal_mail, kurumsal_numara } from '../constants/info';
import { LuPhone } from 'react-icons/lu';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const controls = useAnimation();

	const toggleMenu = () => setMenuOpen((prev) => !prev);

	useEffect(() => {
		controls.start('visible');
	}, [controls]);

	const navbarVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
	};

	return (
		<motion.div initial='hidden' animate={controls} variants={navbarVariants} className='bg-[#fafafa]'>
			<div className='container w-full px-2 mx-auto select-none'>
				<div className='flex items-center justify-between p-2 text-center'>
					<div className='flex flex-col space-x-0 text-xs text-gray-500 lg:flex-row lg:space-x-2'>
						<div>Çalışma Saatlerimiz:</div>
						<div>Pazartesi - Cuma: 08:30 - 18:30</div>
					</div>
					<div className='flex items-center space-x-2'>
						<a href={kurumsal_instagram} target='_blank' rel='noreferrer' className='text-black'>
							<FaInstagram size={20} className='text-black cursor-pointer' />
						</a>
					</div>
				</div>
				<div className='flex flex-col justify-between w-full p-2'>
					<div className='flex items-center justify-between w-full'>
						<Logo />
						<div className='hidden md:flex md:space-x-6'>
							<a href='#services' className='flex items-center p-2 font-bold text-black md:p-0'>
								<FaBriefcase className='mr-2' /> Hizmetlerimiz
							</a>
							<a href='#products' className='flex items-center p-2 font-bold text-black md:p-0'>
								<FaHome className='mr-2' /> Ürünlerimiz
							</a>
							<a href='#contact' className='flex items-center p-2 font-bold text-black md:p-0'>
								<FaPhoneAlt className='mr-2' /> İletişim
							</a>
						</div>
						<div className='hidden space-x-6 lg:flex'>
							<a href={`mailto:${kurumsal_mail}`} className='flex items-center space-x-2 text-sm'>
								<MdAlternateEmail size={18} className='text-black' />
								<div>
									<div className='text-sm font-bold text-green-800'>Mail Adresi</div>
									<div className='text-black'>{kurumsal_mail}</div>
								</div>
							</a>
							<div className='flex items-center space-x-2 text-sm'>
								<LuPhone size={18} className='text-black' />
								<a href={`tel:${kurumsal_numara}`}>
									<div className='text-sm font-bold text-green-800'>Sabit Telefon</div>
									<div className='text-black'>{kurumsal_numara}</div>
								</a>
							</div>
						</div>
						<div className='lg:hidden' onClick={toggleMenu}>
							{menuOpen ? <FaTimes className='text-black' size={24} /> : <FaBars className='text-black' size={24} />}
						</div>
					</div>
					<AnimatePresence>
						{menuOpen && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: 'auto' }}
								exit={{ opacity: 0, height: 0 }}
								className='mt-2 overflow-hidden text-center lg:hidden'
							>
								<a href='#services' className='flex items-center justify-center py-2 font-bold text-black'>
									<FaBriefcase className='mr-2' /> Hizmetlerimiz
								</a>
								<a href='#products' className='flex items-center justify-center py-2 font-bold text-black'>
									<FaHome className='mr-2' /> Ürünlerimiz
								</a>
								<a href='#contact' className='flex items-center justify-center py-2 font-bold text-black'>
									<FaPhoneAlt className='mr-2' /> İletişim
								</a>
								<a href={`mailto:${kurumsal_mail}`} className='flex items-center justify-center py-2 font-bold text-black'>
									<MdAlternateEmail size={18} className='text-black' />
									<span className='ml-2'>{kurumsal_mail}</span>
								</a>
								<a href={`tel:${kurumsal_numara}`} className='flex items-center justify-center py-2 font-bold text-black'>
									<LuPhone size={18} className='text-black' />
									<span className='ml-2'>{kurumsal_numara}</span>
								</a>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</motion.div>
	);
};

export default Navbar;
