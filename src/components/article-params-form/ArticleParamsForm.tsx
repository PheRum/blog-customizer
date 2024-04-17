import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const sidebarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	function handleClickOutside(e: MouseEvent) {
		if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
			setIsOpen(false);
		}
	}

	function toggle() {
		setIsOpen((prev) => !prev);
	}

	return (
		<>
			<ArrowButton isOpen={isOpen} toggle={toggle} />
			<aside
				ref={sidebarRef}
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
