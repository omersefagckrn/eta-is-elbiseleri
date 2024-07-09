import { bannerServicesMap } from '../constants/info';
import Products from './Products';
import Promotion from './Promotion';
import Feature from './Feature';

const Services = () => {
	return (
		<div id='services' className='container mx-auto w-full'>
			{bannerServicesMap.map((feature, index) => (
				<Feature key={index} imgSrc={feature.imgSrc} title={feature.title} description={feature.description} reverse={feature.reverse} />
			))}
			<Products />
			<Promotion />
		</div>
	);
};

export default Services;
