import { motion } from 'framer-motion';

const LoadingScreen = () => {
	return (
		<div className='flex items-center justify-center h-screen bg-[#fafafa]'>
			<div className='text-white text-center'>
				<motion.div
					className='animate-spin rounded-full h-32 w-32 border-t-4 border-black mx-auto'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, yoyo: Infinity }}
				></motion.div>
				<div className='mt-4 text-black font-bold text-2xl lg:text-4xl text-center'>ETA İş Elbiseleri ve İş Güvenlik Ekipmanları</div>
			</div>
		</div>
	);
};

export default LoadingScreen;
