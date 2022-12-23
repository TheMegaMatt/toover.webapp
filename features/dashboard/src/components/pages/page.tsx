import { Box, Flex, Title } from '@mantine/core';
import React, { PropsWithChildren, ReactNode } from 'react';

interface PageProps {
	title: string | ReactNode;
}

export const Page = ({ title, children }: PropsWithChildren<PageProps>) => {
	const getTitle = (title: string | ReactNode) => {
		if (typeof title === 'string') {
			return <Title>{title}</Title>;
		}
		return title;
	};

	return (
		<Flex h={'100%'} direction={'column'} gap={'xl'}>
			{title && <Box>{getTitle(title)}</Box>}
			<Box sx={{ flexGrow: 1 }}>{children}</Box>
		</Flex>
	);
};
