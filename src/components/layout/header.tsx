'use client';
import React from 'react';
import Container from '../shared/container';
import { ModeToggle } from './mode-toggle';

const Header = () => {
	return (
		<header className='w-full'>
			<Container>
				<div className='flex justify-between items-center py-6 gap-4'>
					<div>Test Tafakkur</div>
					<ModeToggle />
				</div>
			</Container>
		</header>
	);
};

export default Header;
