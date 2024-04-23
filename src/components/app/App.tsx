import React, { CSSProperties, useState } from 'react';
import { ArticleStateType, defaultArticleState } from 'src/constants/articleProps';
import clsx from 'clsx';
import styles from 'src/styles/index.module.scss';
import { ArticleParamsForm } from 'components/article-params-form';
import { Article } from 'components/article';

export const App = () => {
    const [params, setParams] = useState<ArticleStateType>(defaultArticleState);

    return (
        <div
            className={clsx(styles.main)}
            style={
                {
                    '--font-family': params.fontFamilyOption.value,
                    '--font-size': params.fontSizeOption.value,
                    '--font-color': params.fontColor.value,
                    '--container-width': params.contentWidth.value,
                    '--bg-color': params.backgroundColor.value,
                } as CSSProperties
            }>
            <ArticleParamsForm title='Задайте параметры' params={params} setParams={setParams} />
            <Article />
        </div>
    );
};
