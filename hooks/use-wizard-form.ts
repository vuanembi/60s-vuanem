import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export type GetProductsBody = {
    cau_6: string;
    cau_7: string;
};

export type Product = {
    name: string;
    slug: string;
    imageSrc: string;
    rating: number;
};

type ProductResponse = {
    name: string;
    slug: string;
    images: string;
    avg_rate: number;
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
        rating: item.avg_rate || 4,
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
                    mattress: (data.mattress || []).map(transform),
                    accessory: (data.accessory || []).map(transform),
                }));
        },
        staleTime: Infinity,
        refetchInterval: false,
        refetchIntervalInBackground: false,
        enabled,
    });
};
