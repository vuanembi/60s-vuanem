import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export type GetProductsFormValues = {
    question1: string;
    question2: string;
    question31: string;
    question32: string;
    question33: string;
    question34: string;
    question4: string;
    question5: string;
    question6: string;
    question7: string;
};

export type GetProductsBody = {
    cau_6: string;
    cau_7: string;
};

export type Product = {
    name: string;
    slug: string;
    imageSrc: string;
};

type ProductResponse = {
    name: string;
    slug: string;
    images: string;
};

export type GetProductResponse = {
    data: {
        mattress: ProductResponse[];
        accessory: ProductResponse[];
    };
};

export const useGetProducts = (body: GetProductsBody, enabled: boolean) => {
    const transform = (item: ProductResponse) => ({
        name: item.name,
        slug: `https://vuanem.com/${item.slug}.html`,
        imageSrc: item.images.replace('public', 'https://vuanem.com/storage'),
    });

    return useQuery<{ mattress: Product[]; accessory: Product[] }>({
        queryKey: ['products', body],
        queryFn: async () => {
            return axios
                .request<GetProductResponse>({
                    method: 'POST',
                    url: 'https://vuanem.com/api/get-product-survey-60s',
                    data: body,
                })
                .then((response) => response.data)
                .then(({ data }) => ({
                    mattress: data.mattress.map(transform),
                    accessory: data.accessory.map(transform),
                }));
        },
        staleTime: Infinity,
        refetchInterval: false,
        refetchIntervalInBackground: false,
        enabled,
    });
};
