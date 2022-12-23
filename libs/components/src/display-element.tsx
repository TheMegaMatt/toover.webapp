import { FC, MouseEventHandler, ReactNode } from 'react';
import {
    Avatar,
    Group,
    Paper,
    PaperProps,
    Text,
    Title,
    useMantineColorScheme,
} from '@mantine/core';

export type DisplayElementProps = {
    title?: string | ReactNode;
    subtitle?: string | ReactNode;
    note?: string | ReactNode;
    leftIcon?: string | ReactNode;
    rightIcon?: string | ReactNode;
    onClick?: MouseEventHandler | undefined;
    container?: Partial<PaperProps>;
};

export const DisplayElement: FC<DisplayElementProps> = ({
                                                            title,
                                                            subtitle,
                                                            note,
                                                            leftIcon,
                                                            rightIcon,
                                                            onClick,
                                                            container,
                                                        }) => {
    const { colorScheme } = useMantineColorScheme();
    return (
        <Paper
            shadow={'sm'}
            p={'sm'}
            withBorder
            onClick={onClick}
            style={{ cursor: !!onClick ? 'pointer' : 'inherit' }}
            {...container}
        >
            <Group>
                {typeof leftIcon === 'string' ? (
                    <Avatar
                        src={leftIcon}
                        styles={{
                            image: {
                                filter: colorScheme == 'dark' ? 'invert(100%);' : 'inherit',
                            },
                        }}
                    />
                ) : (
                    leftIcon
                )}
                <div style={{ flex: 1 }}>
                    {typeof title === 'string' ? <Title order={5}>{title}</Title> : title}
                    {typeof subtitle === 'string' ? <Text size={'md'}>{subtitle}</Text> : subtitle}
                    {typeof note === 'string' ? (
                        <Text size={'sm'} color={'dimmed'}>
                            {note}
                        </Text>
                    ) : (
                        note
                    )}
                </div>
                {typeof rightIcon === 'string' ? <Avatar src={rightIcon} /> : rightIcon}
            </Group>
        </Paper>
    );
};
