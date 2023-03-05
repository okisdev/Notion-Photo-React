import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import { BiArrowBack } from 'react-icons/bi';

const BackHome = () => {
    const { t } = useTranslation('common');

    return (
        <div id='notion-photo-back-home' className='container mx-auto my-3 w-11/12 px-6 sm:px-8 md:w-7/12'>
            <p className='flex items-center justify-center space-x-1'>
                <BiArrowBack />
                <Link href='/' passHref>
                    {t('Back Home')}
                </Link>
            </p>
        </div>
    );
};

export default BackHome;
