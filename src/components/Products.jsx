import { useState, useEffect } from 'react';
import { Image } from 'primereact/image';
import { productsData } from '../constants/info';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Products = () => {
	const [selectedCategory, setSelectedCategory] = useState('Yelek');
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredCategories, setFilteredCategories] = useState(Object.keys(productsData));

	const controls = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: false
	});

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		} else {
			controls.start('hidden');
		}
	}, [controls, inView]);

	useEffect(() => {
		controls.start('hidden').then(() => controls.start('visible'));
	}, [selectedCategory, controls]);

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
	};

	const handleSearchChange = (e) => {
		const query = e.target.value;
		setSearchQuery(query);
		setFilteredCategories(Object.keys(productsData).filter((category) => category.toLowerCase().includes(query.toLowerCase())));
	};

	const formatCategory = (category) => {
		return category.replace(/([A-Z])/g, ' $1').trim();
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
	};

	return (
		<motion.div id='products' ref={ref} initial='hidden' animate={controls} variants={itemVariants} className='flex flex-col lg:flex-row'>
			<div className='w-full p-4 lg:w-1/4'>
				<h2 className='mb-6 text-xl font-bold'>Kategoriler</h2>
				<input
					type='text'
					placeholder='Kategori Ara...'
					value={searchQuery}
					onChange={handleSearchChange}
					className='w-full px-4 py-2 mb-4 border rounded-lg shadow-md focus:outline-none'
				/>
				<div className='space-y-2'>
					{filteredCategories.length > 0 ? (
						filteredCategories.map((category, index) => (
							<button
								key={index}
								onClick={() => handleCategoryChange(category)}
								className={`w-full py-2 px-4 text-left rounded-lg transition duration-300 ${
									selectedCategory === category
										? 'bg-black text-white shadow-lg'
										: 'bg-gray-200 text-gray-800 hover:bg-black hover:text-white'
								}`}
							>
								{formatCategory(category)}
							</button>
						))
					) : (
						<div className='text-center text-gray-500'>Bu kategori bulunamadı, lütfen başka bir kelime deneyin.</div>
					)}
				</div>
			</div>

			<div className='w-full p-4 lg:w-3/4'>
				<h2 className='mb-4 text-2xl font-bold'>Ürünlerimiz</h2>
				<div className='font-bold text-gray-400 underline'>Ürünlerimiz sizler için yenileniyor, lütfen daha sonra tekrar deneyin!</div>
				{/* <motion.div
					key={selectedCategory}
					initial='hidden'
					animate='visible'
					variants={itemVariants}
					transition={{ duration: 0.5 }}
					className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'
				>
					{productsData[selectedCategory] && productsData[selectedCategory].length > 0 ? (
						productsData[selectedCategory].map((product, index) => (
							<motion.div
								key={index}
								className='p-4 bg-white rounded-lg shadow-md'
								initial='hidden'
								animate='visible'
								variants={itemVariants}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Image
									imageClassName='w-full h-[200px] object-contain bg-transparent'
									preview
									src={product.imgSrc}
									alt={product.title}
									className='w-full rounded-lg'
								/>
							</motion.div>
						))
					) : (
						<div className='p-4 bg-white rounded-lg shadow-md'>
							<div className='text-center text-gray-500'>Bu kategori için ürün bulunamadı</div>
						</div>
					)}
				</motion.div> */}
			</div>
		</motion.div>
	);
};

export default Products;
