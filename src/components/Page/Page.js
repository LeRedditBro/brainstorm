import { Box } from '@mantine/core';
import React from 'react';

const margins = {
	left: { marginRight: '30vw' },
	right: { marginLeft: '30vw' },
};

export default function Page({ sx, position = undefined, ...rest }) {
	return (
		<Box
			{...rest}
			sx={{
				...sx,
				height: 'calc(100vh - 70px)',
				padding: '3rem 6rem',
				...(margins[position] || {}),
			}}
		/>
	);
}
