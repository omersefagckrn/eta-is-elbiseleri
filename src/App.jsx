import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';
import Banner from './components/Banner';
import { FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { kurumsal_instagram, kurumsal_numara } from './constants/info';
import LoadingScreen from './components/Loading';

const App = () => {
	const [loading, setLoading] = useState(true);
	const formattedNumber = kurumsal_numara.replace(/\s+/g, '').replace(/^0/, '90');

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);

	const buttonVariants = {
		hover: {
			scale: 1.2,
			rotate: 10,
			transition: {
				duration: 0.3,
				yoyo: Infinity
			}
		}
	};

	return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (
				<div className='flex flex-col min-h-screen'>
					<Navbar />
					<Banner />
					<main className='flex-grow bg-[#fafafa] px-2'>
						<Services />
					</main>
					<Footer />
					<div className='fixed bottom-4 right-4 flex flex-col space-y-4 z-50'>
						<motion.a
							href={kurumsal_instagram}
							target='_blank'
							rel='noopener noreferrer'
							className='bg-pink-500 text-white p-3 rounded-full shadow-lg'
							whileHover='hover'
							variants={buttonVariants}
						>
							<FaInstagram size={24} />
						</motion.a>
						<motion.a
							href={`tel:${kurumsal_numara}`}
							className='bg-green-500 text-white p-3 rounded-full shadow-lg'
							whileHover='hover'
							variants={buttonVariants}
						>
							<FaPhone size={24} />
						</motion.a>
						<motion.a
							href='https://api.whatsapp.com/send?phone=905415063052&text=Merhaba.%20ETA%20İş%20Elbiseleri%20ve%20İş%20Güvenlik%20Ekipmanları%20hakkında%20bilgi%20almak%20istiyorum.'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-green-500 text-white p-3 rounded-full shadow-lg'
							whileHover='hover'
							variants={buttonVariants}
						>
							<FaWhatsapp size={24} />
						</motion.a>
					</div>
				</div>
			)}
		</>
	);
};

export default App;
