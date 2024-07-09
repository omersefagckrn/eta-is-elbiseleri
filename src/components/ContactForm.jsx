const ContactForm = () => {
	return (
		<div className='container mx-auto my-16 p-8 bg-gray-100 rounded-lg shadow-lg'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div>
					<h2 className='text-2xl font-bold mb-4'>Bize Ulaşın</h2>
					<p className='mb-2'>Bahçelievler, </p>
					<p className='mb-2'>Adnan Menderes Blv. No:23, 34893</p>
					<p className='mb-4'>Pendik/İstanbul</p>
				</div>
				<div>
					<h3 className='text-xl font-semibold mb-4'>Bize ulaşmak için aşağıdaki formu doldurabilirsiniz.</h3>
					<form className='space-y-4'>
						<input type='text' placeholder='Adınızı girin' className='w-full p-3 border rounded-lg' />
						<input
							type='email'
							placeholder='Geçerli bir e-posta adresi girin'
							className='w-full p-3 border rounded-lg focus:outline-none outline-none'
						/>
						<textarea placeholder='Mesajınızı girin' className='w-full p-3 border rounded-lg focus:outline-none outline-none' rows='4'></textarea>
						<button type='submit' className='px-4 py-2 bg-[#16A349] text-white rounded-lg focus:outline-none outline-none'>
							Gönder
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
