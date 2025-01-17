'use client';
import React from 'react';
import Container from '../shared/container';
import { Input } from '../ui/input';
import { useSearchParam } from '@/hooks/use-search-param';
import { ModeToggle } from './mode-toggle';

const Header = () => {
	const { searchValue, setSearchValue } = useSearchParam({
		key: 'product',
	});
	return (
		<header className='w-full'>
			<Container>
				<div className='flex justify-between items-center py-6 gap-4'>
					<Input
						value={searchValue}
						onChange={e => setSearchValue(e.target.value)}
						placeholder='Search product...'
						className='flex-1 max-w-[500px]'
					/>
					<ModeToggle />
				</div>
			</Container>
		</header>
	);
};

export default Header;
