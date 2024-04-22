import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { Text } from 'components/text';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';

type ArticleParamsFormType = {
	title: string;
	params: ArticleStateType;
	setParams: React.Dispatch<React.SetStateAction<ArticleStateType>>;
};

export const ArticleParamsForm = ({
	title,
	params,
	setParams,
}: ArticleParamsFormType) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const sidebarRef = useRef<HTMLDivElement>(null);
	const [form, setForm] = useState<ArticleStateType>(params);

	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		};

		const handleClickOutside = (e: MouseEvent) => {
			if (
				sidebarRef.current &&
				!sidebarRef.current.contains(e.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('keydown', handleEsc);
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('keydown', handleEsc);
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	function toggle() {
		setIsOpen((prev) => !prev);
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setParams(form);
		setIsOpen(false);
	}

	function handleReset(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setForm(params);
	}

	function updateKeyValue(key: keyof ArticleStateType, option: OptionType) {
		setForm((prev) => ({ ...prev, [key]: option }));
	}

	return (
		<>
			<ArrowButton isOpen={isOpen} toggle={toggle} />
			<aside
				ref={sidebarRef}
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text as='h1' size={31} weight={800} uppercase>
						{title}
					</Text>
					<Select
						title='Шрифт'
						options={fontFamilyOptions}
						selected={form.fontFamilyOption}
						onChange={(selected) =>
							updateKeyValue('fontFamilyOption', selected)
						}
					/>
					<RadioGroup
						title='Размер шрифта'
						options={fontSizeOptions}
						name={'fontSize'}
						selected={form.fontSizeOption}
						onChange={(selected) => updateKeyValue('fontSizeOption', selected)}
					/>
					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={form.fontColor}
						onChange={(selected) => updateKeyValue('fontColor', selected)}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={form.backgroundColor}
						onChange={(selected) => updateKeyValue('backgroundColor', selected)}
					/>
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={form.contentWidth}
						onChange={(selected) => updateKeyValue('contentWidth', selected)}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
