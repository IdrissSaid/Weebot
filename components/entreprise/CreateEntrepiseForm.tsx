/** @format */

import { Textarea } from '@/components/ui/textarea';
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';
import BoxReveal from '../magicui/box-reveal';

export default function CreateEntrepiseForm({ form } : any) {
	return (
		<BoxReveal boxColor={'#5046e6'} duration={0.6}>
			<>
				<FormField
					control={form.control}
					name='company_name'
					render={({ field }) => (
						<FormItem className='px-2'>
							<FormLabel>Nom de la companie</FormLabel>
							<FormControl>
								<Input placeholder='Idriss EI' {...field} />
							</FormControl>
							<FormDescription></FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='desc'
					render={({ field }) => (
						<FormItem className='px-2'>
							<FormLabel>Description de la companie</FormLabel>
							<FormControl>
								<Textarea
									className='resize-none w-72 h-72'
									defaultValue={
										"Chez ÉcoSolutions, nous sommes passionnés par l'innovation durable. Notre mission est de fournir des solutions écologiques pour un avenir meilleur. Depuis notre création en 2010, nous nous engageons à promouvoir des pratiques respectueuses de l'environnement à travers nos produits et services de haute qualité. Rejoignez-nous dans notre quête pour un monde plus vert, plus propre et plus sain. Ensemble, construisons un avenir durable !"
									}
									{...field}
								/>
							</FormControl>
							<FormDescription></FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
			</>
		</BoxReveal>
	);
}
