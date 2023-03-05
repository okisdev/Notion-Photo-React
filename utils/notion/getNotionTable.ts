import axios from 'axios';

import { PostProps } from '@/types/app';

const NOTION_API = process.env.NOTION_API;
const NOTION_TABLE_SLUG = process.env.NOTION_TABLE_SLUG;

export const getNotionTable = async (): Promise<PostProps[]> => {
    return await axios.get(`https://${NOTION_API}/v1/table/${NOTION_TABLE_SLUG}`).then((response) => response.data);
};
