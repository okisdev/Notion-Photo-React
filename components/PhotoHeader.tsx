import siteConfig from '../config/site.config';

const stringToJSX = () => {
    return {
        __html: siteConfig.global.content.header.description,
    };
};

const PhotoHeader = () => {
    return (
        <div id='notion-photo-header' className='flex flex-row justify-center items-center my-10 space-x-2 md:space-x-8 dark:text-[#adbac7]'>
            <div id='notion-photo-header-content'>
                <div id='notion-photo-header-title' className='text-center text-2xl font-bold'>
                    <span>{siteConfig.global.site.name}</span>
                </div>
                <div id='notion-photo-header-description' className='pt-6'>
                    <span className='text-center'>
                        <div dangerouslySetInnerHTML={stringToJSX()}></div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PhotoHeader;
