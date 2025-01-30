import { useEffect, useState } from 'react';

export const useResize = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const updateScrollPosition = () => {
				setWidth(window.innerWidth);
				setHeight(window.innerHeight);
			};
			window.addEventListener('resize', updateScrollPosition);
			updateScrollPosition();

			return () => {
				window.removeEventListener('resize', updateScrollPosition);
			};
		}
	}, []);

	return { width, height };
};
