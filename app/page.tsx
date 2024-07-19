/** @format */

'use client';
import CreateEntrepiseForm from '@/components/entreprise/CreateEntrepiseForm';
import Form from '@/components/Form';
import { AnimatedSubscribeButton } from '@/components/magicui/animated-subscribe-button';
import BoxReveal from '@/components/magicui/box-reveal';
import { StickyHeader } from '@/components/magicui/Header';
import { Hero } from '@/components/magicui/Hero1';
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

interface FormInterface {
	type: string | null;
	template: string | null;
	company_name: string | null;
	desc: string | null;
}

export default function Home() {
	const [form, setForm] = useState<FormInterface>({
		type: null,
		template: null,
		company_name: null,
		desc: null,
	});
	const [state, setState] = useState(0);
	const uForm = useForm();
	const [isButtonVisible, setIsButtonVisible] = useState(false);

	const handleSubmit = () => {
		if (!form.type || !form.template) {
			alert('Veuillez sélectionner le type et le modèle');
			return;
		}
		console.log(form);
		setState(1);
	};

	useEffect(() => {
		const { company_name, desc } = uForm.getValues();
		setIsButtonVisible(company_name);
	}, [uForm.watch('company_name'), uForm.watch('desc')]);

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
          <FormProvider {...uForm}>
            <BoxReveal boxColor={'#5046e6'} duration={0.6}>
              <p className='text-[3.5rem] font-semibold'>Remplissez le formulaire</p>
            </BoxReveal>
            <CreateEntrepiseForm form={uForm} />
            {isButtonVisible && (
              <AnimatedSubscribeButton
                buttonColor='#000000'
                buttonTextColor='#ffffff'
                subscribeStatus={false}
                initialText={<span className='group inline-flex items-center'>Envoyer</span>}
                changeText={<span className='group inline-flex items-center'>Envoyé</span>}
                onClick={() => {
                  if (!form.company_name || !form.desc || !form.template || form.type) return;
                }}
              />
            )}
					</FormProvider>
				)}
			</section>
		</main>
	);
}
