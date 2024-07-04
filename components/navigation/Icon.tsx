import React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
    color?: string;
    size?: number;
}


export const DashboardIcon: React.FC<IconProps> = (props) => {
    return (
        <Svg
            width={66}
            height={32}
            viewBox="0 0 66 32"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_1_79)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M41.715 13.728l-7.5-7.076a1.5 1.5 0 00-2.029-.01l-.01.01-7.491 7.076a1.5 1.5 0 00-.485 1.105V23.5a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5V19h3v4.5a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5v-8.667a1.5 1.5 0 00-.485-1.105zM40.7 23.5h-4.5V19a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5v4.5h-4.5v-8.667l.01-.01L33.2 7.75l7.49 7.072.01.009V23.5z"
                    fill={props.color}
                />
            </G>
            <Defs>
                <ClipPath id="clip0_1_79">
                    <Path fill="#fff" transform="translate(21.2 4)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export const SearchIcon: React.FC<IconProps> = (props) => {
    return (
        <Svg
            width={66}
            height={32}
            viewBox="0 0 66 32"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_1_74)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M42.53 24.47l-4.693-4.694a8.26 8.26 0 10-1.06 1.06l4.692 4.695a.75.75 0 101.062-1.062zM24.75 14.5a6.75 6.75 0 116.75 6.75 6.757 6.757 0 01-6.75-6.75z"
                    fill={props.color}
                />
            </G>
            <Defs>
                <ClipPath id="clip0_1_74">
                    <Path fill={props.color} transform="translate(21 4)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}

export const ProfileIcon: React.FC<IconProps> = (props) => {
    return (
        <Svg
            width={66}
            height={32}
            viewBox="0 0 66 32"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_1_84)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.4 6.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c-.006-5.382-4.368-9.744-9.75-9.75zm-5.055 16.266a6 6 0 0110.11 0 8.234 8.234 0 01-10.11 0zM30.4 15.25a3 3 0 116 0 3 3 0 01-6 0zm9.165 6.226a7.469 7.469 0 00-3.38-2.695 4.5 4.5 0 10-5.57 0 7.469 7.469 0 00-3.38 2.695 8.25 8.25 0 1112.33 0z"
                    fill={props.color}
                />
            </G>
            <Defs>
                <ClipPath id="clip0_1_84">
                    <Path fill="#fff" transform="translate(21.4 4)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}


export const Icon2: React.FC<IconProps> = (props) => {
    return (
        <Svg
            width={66}
            height={32}
            viewBox="0 0 66 32"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_1_69)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M41.8 8.5h-18a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5V10a1.5 1.5 0 00-1.5-1.5zm0 1.5v2.25h-18V10h18zm0 12h-18v-8.25h18V22zm-1.5-2.25a.75.75 0 01-.75.75h-3a.75.75 0 010-1.5h3a.75.75 0 01.75.75zm-6 0a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75z"
                    fill={props.color}
                />
            </G>
            <Defs>
                <ClipPath id="clip0_1_69">
                    <Path fill="#fff" transform="translate(20.8 4)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};

export const HomeIcon: React.FC<IconProps> = (props) => {
    return (
        <Svg
            width={66}
            height={32}
            viewBox="0 0 66 32"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_1_64)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40.85 7.75h-16.5a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5V9.25a1.5 1.5 0 00-1.5-1.5zm-1.5 12.75a.75.75 0 010 1.5h-13.5a.75.75 0 01-.75-.75v-10.5a.75.75 0 011.5 0v5.899l3.27-2.726a.75.75 0 01.896-.047l4.032 2.69 4.07-3.393a.75.75 0 01.96 1.154l-4.5 3.75a.75.75 0 01-.897.047l-4.031-2.69-3.8 3.168V20.5h12.75z"
                    fill={props.color}
                />
            </G>
            <Defs>
                <ClipPath id="clip0_1_64">
                    <Path fill="#fff" transform="translate(20.6 4)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}


