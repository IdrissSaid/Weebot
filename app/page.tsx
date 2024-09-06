/** @format */

'use client';
import CreateEntrepiseForm from '@/components/entreprise/CreateEntrepiseForm';
import Form from '@/components/Form';
import { AnimatedSubscribeButton } from '@/components/magicui/animated-subscribe-button';
import BoxReveal from '@/components/magicui/box-reveal';
import { StickyHeader } from '@/components/magicui/Header';
import { Hero } from '@/components/magicui/Hero1';
import { useState } from 'react';

interface FormInterface {
	type: string | null;
	template: string | null;
	company_name: string | null;
	desc: string | null;
	creation_year: string | null;
	address: string | null;
}

export default function Home() {
	const [form, setForm] = useState<FormInterface>({
		type: null,
		template: null,
		company_name: 'Le Délice Gourmand',
		desc: "Le Délice Gourmand est un restaurant chaleureux et accueillant, situé au cœur de la ville. Nous offrons une cuisine raffinée et savoureuse, préparée avec des ingrédients frais et locaux. Notre chef, avec plus de 20 ans d'expérience, crée des plats qui allient tradition et modernité, pour une expérience culinaire unique",
		creation_year: '2000',
		address: '12 rue de la paix, 75000 Paris',
	});
	const [state, setState] = useState(0);

	const handleSubmit = async () => {
		if (!form.type || !form.template) {
			alert('Veuillez sélectionner le type et le modèle');
			return;
		}
		console.log(form);
		setState(state + 1);
	};

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<StickyHeader />
			<section className='h-screen'>
				<Hero />
			</section>
			<section id='form' className='h-screen flex justify-center items-center flex-col gap-4'>
				{state === 0 && (
					<>
						<BoxReveal boxColor={'#5046e6'} duration={0.6}>
							<p className='text-[3.5rem] font-semibold'>Je vous écoute</p>
						</BoxReveal>
						<BoxReveal boxColor={'#5046e6'} duration={0.6}>
							<Form handleSubmit={handleSubmit} form={form} setForm={setForm} />
						</BoxReveal>
					</>
				)}
				{state === 1 && (
					<div className='w-full h-full flex flex-col items-center justify-center'>
						<BoxReveal boxColor={'#5046e6'} duration={0.6}>
							<p className='text-[3.5rem] font-semibold'>Remplissez le formulaire</p>
						</BoxReveal>
						<CreateEntrepiseForm form={form} setForm={setForm} />
						{form.company_name && form.desc && form.template && (
							<AnimatedSubscribeButton
								buttonColor='#000000'
								buttonTextColor='#ffffff'
								subscribeStatus={false}
								initialText={<span className='group inline-flex items-center'>Envoyer</span>}
								changeText={<span className='group inline-flex items-center'>Envoyé</span>}
								onClick={async () => {
									console.log('try ', form);
									if (!form.company_name || !form.desc || !form.template || !form.type) return;
									const response = await fetch('/api/company/websiteContentGenerator', {
										method: 'POST',
										body: JSON.stringify({
											prompt: `activityCompany: ${form.type} company_name: ${form.company_name} descritpion: ${form.desc} creation_year: ${form.creation_year} address: ${form.address}`,
											type: form.type,
											template: form.template,
											company_name: form.company_name,
											desc: form.desc,
											creation_year: form.creation_year,
											address: form.address,
										}),
									});
									console.log(response.ok ? 'ok' : 'KO');
								}}
							/>
						)}
					</div>
				)}
			</section>
		</main>
	);
}
