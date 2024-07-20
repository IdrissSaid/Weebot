/** @format */

import { useState } from 'react';
import BoxReveal from '../magicui/box-reveal';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export default function CreateEnterpriseForm({ form, setForm }: any) {
	const [companyName, setCompanyName] = useState(form.company_name || '');
	const [description, setDescription] = useState(form.desc || '');
	const [creation_year, setCreationYear] = useState(form.creation_year || '');
	const [address, setAddress] = useState(form.address || '');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setForm((prevForm: any) => ({
			...prevForm,
			[name]: value,
		}));

		if (name === 'company_name') setCompanyName(value);
		if (name === 'desc') setDescription(value);
		if (name === 'creation_year') setCreationYear(value);
		if (name === 'address') setAddress(value);
	}

	return (
		<div className='w-[80%] flex items-center justify-center'>
			<form className='p-4'>
				<div>
					<div className='w-full grid grid-cols-3'>
						<div className='grid col-span-2'>
							<BoxReveal boxColor={'#5046e6'} duration={0.6}>
								<Label
									className='block text-gray-700 text-sm font-bold mb-2'
									htmlFor='company_name'>
									Nom de la companie
								</Label>
							</BoxReveal>
							<BoxReveal boxColor={'#5046e6'} duration={0.6}>
								<Input
									className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
									id='company_name'
									name='company_name'
									type='text'
									value={companyName}
									onChange={handleInputChange}
								/>
							</BoxReveal>
						</div>

						<div className='grid gap-3'>
							<BoxReveal boxColor={'#5046e6'} duration={0.6}>
								<Label
									className='block text-gray-700 text-sm font-bold mb-2'
									htmlFor='creation_year'>
									Année de création
								</Label>
							</BoxReveal>
							<BoxReveal boxColor={'#5046e6'} duration={0.6}>
								<Input
									className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
									id='creation_year'
									name='creation_year'
									type='text'
									value={creation_year}
									onChange={handleInputChange}
								/>
							</BoxReveal>
						</div>
					</div>
				</div>
				<div>
					<BoxReveal boxColor={'#5046e6'} width='100%' duration={0.6}>
						<Label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='address'>
							Adresse de l&apos;entreprise
						</Label>
					</BoxReveal>
					<BoxReveal boxColor={'#5046e6'} width='100%' duration={0.6}>
						<Input
							className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='address'
							name='address'
							type='text'
							value={address}
							onChange={handleInputChange}
						/>
					</BoxReveal>
				</div>
				<div className='w-full'>
					<BoxReveal boxColor={'#5046e6'} width='100%' duration={0.6}>
						<Label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='desc'>
							Description de la companie
						</Label>
					</BoxReveal>
					<BoxReveal boxColor={'#5046e6'} width='100%' duration={0.6}>
						<Textarea
							className='resize-none h-72 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='desc'
							name='desc'
							placeholder='Description de la companie'
							value={description}
							onChange={handleInputChange}
						/>
					</BoxReveal>
				</div>
			</form>
		</div>
	);
}
